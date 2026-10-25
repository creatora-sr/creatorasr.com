"use client";
import { createContext, useContext } from "react";

type ChatCtx = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const ChatContext = createContext<ChatCtx>({
  open: false,
  setOpen: () => {},
});

export function useChat() {
  return useContext(ChatContext);
}
