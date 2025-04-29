import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ChatModal = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Add welcome message on first load
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = i18n.language === 'en' 
        ? "👋 Hi there! I'm Nexora™ AI, your personal assistant for eSIM activation and digital services. How can I help you today?"
        : "👋 မင်္ဂလာပါ! ကျွန်တော်ကတော့ eSIM အသက်သွင်းခြင်းနှင့် ဒစ်ဂျစ်တယ် ဝန်ဆောင်မှုများအတွက် သင့်ရဲ့ ကိုယ်ပိုင်လက်ထောက် Nexora™ AI ဖြစ်ပါတယ်။ ကျွန်တော် ဘယ်လိုကူညီပေးရမလဲ?";
      
      setMessages([
        { id: 1, text: welcomeMessage, sender: 'bot' }
      ]);
    }
  }, [isOpen, i18n.language, messages.length]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { 
      id: Date.now(), 
      text: inputValue, 
      sender: 'user' 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    try {
      // Call Exa.ai API
      const response = await fetch('https://api.exa.ai/v1/ask', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer b6d50048-3959-40ae-91e6-fea49cf7a764',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: inputValue,
          language: 'auto'
        })
      });
      
      const data = await response.json();
      
      // Add bot response
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now(), 
            text: data.response || "I'm having trouble connecting to my knowledge base. Please try again later.", 
            sender: 'bot' 
          }
        ]);
        setIsTyping(false);
      }, 1000); // Simulate typing delay for better UX
      
    } catch (error) {
      console.error('Error calling AI API:', error);
      
      // Add error message
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now(), 
            text: "I'm having trouble connecting to my knowledge base. Please try again later.", 
            sender: 'bot' 
          }
        ]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: 50,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          {/* Chat modal */}
          <motion.div
            className="fixed inset-2 md:inset-10 z-50 
                      bg-background/30 backdrop-blur-md 
                      border border-white/10 rounded-2xl 
                      shadow-glass overflow-hidden
                      flex flex-col"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-primary/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                  <span className="text-xl">🤖</span>
                </div>
                <h2 className="text-xl font-bold text-white">Nexora™ AI</h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center
                          hover:bg-white/10 transition-colors text-text-light"
              >
                ✕
              </button>
            </div>
            
            {/* Messages container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] md:max-w-[70%] rounded-2xl p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary/30 text-white border border-primary/30'
                        : 'bg-white/5 text-text-light border border-white/10'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] md:max-w-[70%] rounded-2xl p-3 bg-white/5 text-text-light border border-white/10">
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex gap-1"
                    >
                      <span>•</span>
                      <span>•</span>
                      <span>•</span>
                    </motion.div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input form */}
            <form 
              onSubmit={handleSubmit}
              className="p-4 border-t border-white/10 bg-background/50"
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={i18n.language === 'en' ? "Type your message here..." : "သင့်မက်ဆေ့ချ်ကို ဒီမှာရိုက်ထည့်ပါ..."}
                  className="flex-1 bg-white/5 border border-white/10 rounded-full
                            px-4 py-3 text-white placeholder-text-dark
                            focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-background font-medium
                            rounded-full px-5 py-3"
                >
                  <span>{i18n.language === 'en' ? "Send" : "ပို့ရန်"}</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatModal;