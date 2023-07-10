"use client";

import { User } from "@prisma/client";
import { useState } from "react";

interface ChatClientProps {
  currentUser?: User | null;
}

const ChatClient = ({ currentUser }: ChatClientProps) => {
  const [receiver, setReceiver] = useState({
    receiverId: "",
    receiverName: "",
    receiverImage: "",
  });

  const [layout, setLayout] = useState(true);
  return (
    <main>
      <div className="grid grid-clos-[1fr] md:grid-clos-[300px_1fr]">
        <section className={`md:flex ${layout && "hidden"}`}>
          Contact Component
        </section>
        <section className={`md:flex ${!layout && "hidden"}`}>
          Chat Component
        </section>
      </div>
    </main>
  );
};

export default ChatClient;
