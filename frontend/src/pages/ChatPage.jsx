import React from 'react';
import ChatBot from '../assets/ChatBot';

const ChatPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">AI Chat Assistant</h1>
      <div className="w-full max-w-2xl">
        <ChatBot />
      </div>
    </main>
  );
};

export default ChatPage;
