"use client";

import React, { useState, useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import EmptyBoxState from "../EmptyBoxState";
import axios from "axios";
import { GroupSizeUi } from "./GroupSizeUi";
import BudgetUi from "./BudegetUi";
import Daysui from "./Daysui";
import TripPlanningUi from "./TripPlanningUi";
import toast from "react-hot-toast";
import { useTripDetail } from "@/app/provider";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: string; content: string; ui?: string };

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [tripGenerated, setTripGenerated] = useState(false);
  const [uiCompleted, setUiCompleted] = useState<{ [key: string]: boolean }>({});

  const tripContext = useTripDetail();
  if (!tripContext) throw new Error("useTripDetail must be inside Provider");
  const { tripDetailInfo, setTripDetailInfo } = tripContext;

  const chatRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Scroll
  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  // Handle UI option selection
  const handleSelectOption = (value: string, uiType?: string) => {
    if (uiType) setUiCompleted((prev) => ({ ...prev, [uiType]: true }));
    onSend(value);
  };

  // Step-by-step message send
  const onSend = async (value?: string) => {
    const content = value ?? userInput;
    if (!content.trim()) return;

    const newMsg: Message = { role: "user", content };
    setMessages((prev) => [...prev, newMsg]);
    setUserInput("");
    setLoading(true);

    try {
      const result = await axios.post("/api/aimodel", {
        messages: [...messages, newMsg],
        generateFinalPlan: false,
      });

      const isFinal = result.data?.ui === "final";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: result.data?.resp || "", ui: result.data?.ui },
      ]);

      if (isFinal) setTripGenerated(true);
    } catch (e) {
      console.error(e);
      setMessages((prev) => [...prev, { role: "assistant", content: "⚠️ AI failed. Try again." }]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch final trip plan
  const handleViewTrip = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/aimodel", { messages, generateFinalPlan: true });
      let tripPlan = result.data.trip_plan || null;

      // fallback parse if AI wraps JSON in resp string
      if (!tripPlan && result.data.resp) {
        try {
          tripPlan = JSON.parse(result.data.resp).trip_plan;
        } catch (e) {
          toast.error("AI response parsing error");
          setLoading(false);
          return;
        }
      }

      if (!tripPlan) {
        toast.error("No trip plan returned by AI");
        setLoading(false);
        return;
      }

      setTripDetailInfo(tripPlan);
      toast.success("🎉 Trip plan ready!");
    } catch (e) {
      console.error(e);
      toast.error("Failed to generate final trip");
    } finally {
      setLoading(false);
    }
  };

  const RenderGenerativeUI: React.FC<{ ui: string }> = ({ ui }) => {
    if (uiCompleted[ui]) return null;
    if (ui === "budget") return <BudgetUi onSelectOptions={(val) => handleSelectOption(val, "budget")} />;
    if (ui === "groupSize") return <GroupSizeUi onSelectOptions={(val) => handleSelectOption(val, "groupSize")} />;
    if (ui === "tripDuration") return <Daysui onSelectOptions={(val) => handleSelectOption(val, "tripDuration")} />;
    return null;
  };

  return (
    <div className="flex flex-col h-[82vh] border rounded-2xl p-4 bg-gradient-to-b from-orange-100 to-white shadow-xl relative">
      <div className="flex-1 overflow-y-auto space-y-4 p-2 custom-scroll" ref={chatRef}>
        {messages.length === 0 && <EmptyBoxState onSelectOptions={handleSelectOption} />}

        <AnimatePresence>
          {messages.map((msg, idx) => {
            const reversed = [...messages].reverse();
            const lastUiIdx = reversed.findIndex((m) => m.role === "assistant" && m.ui);
            const isRenderUI = idx === messages.length - 1 - lastUiIdx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`rounded-2xl p-3 w-fit max-w-[70%] shadow-md ${
                  msg.role === "assistant" ? "bg-white border text-gray-800" : "bg-gradient-to-r from-orange-500 to-pink-500 text-white ml-auto"
                }`}
              >
                {msg.content}
                {msg.ui && isRenderUI && <RenderGenerativeUI ui={msg.ui} />}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {tripGenerated && (
          <div className="mt-4">
            <TripPlanningUi loading={loading} tripGenerated={tripGenerated} onViewTrip={handleViewTrip} />
          </div>
        )}

        {loading && (
          <div className="bg-white border text-black rounded-lg p-3 w-fit max-w-[70%] flex gap-1 shadow">
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
          </div>
        )}
      </div>

      <div className="border rounded-2xl p-4 relative bg-white mt-4 shadow-inner">
        <Textarea
          ref={textareaRef}
          placeholder="✈️ Create a trip from Paris to New York..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full h-20 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
        />
        <Button size="icon" className="absolute bottom-6 right-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-lg p-7" onClick={() => onSend()} disabled={loading}>
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
