import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMsg = { sender: 'bot', text: '⚠️ Error contacting the server.' };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  useEffect(() => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="chatbot-container">
        <div ref={chatBoxRef} className="chatbot-messages scrollbar-thin">
            {messages.length === 0 && (
            <div className="chatbot-message bot">Start the conversation 👋</div>
            )}
            {messages.map((msg, idx) => (
            <div
                key={idx}
                className={`chatbot-message ${msg.sender === 'user' ? 'user' : 'bot'}`}
            >
                {msg.text}
            </div>
            ))}
        </div>

        <div className="chatbot-input-area">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask me anything..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    </div>
  );
};

export default ChatBot;
