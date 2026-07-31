import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Send, Users, Video } from 'lucide-react';
import './Live.css';

export default function Live() {
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'Sarah J.', text: 'So excited for this session!' },
    { user: 'Mike T.', text: 'Ready to crush this workout 💪' },
    { user: 'Coach', text: 'Welcome everyone! We start in 2 minutes.' }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      setMessages([...messages, { user: 'You', text: chatMessage }]);
      setChatMessage('');
    }
  };

  return (
    <div className="theme-dark">
      <Navbar theme="dark" />
      
      <div className="live-page-container container">
        <div className="live-header">
          <h1><span className="live-dot-large"></span> LIVE: Full Body HIIT Blast</h1>
          <div className="live-stats">
            <span className="viewer-count"><Users size={18} /> 248 tuning in</span>
          </div>
        </div>

        <div className="live-layout">
          <div className="video-section">
            <div className="video-player">
              <div className="video-placeholder">
                <Video size={64} className="video-icon" />
                <p>Waiting for the broadcast to begin...</p>
              </div>
            </div>
            <div className="session-info">
              <h3>Today's Focus: High Intensity Interval Training</h3>
              <p>Get ready to sweat! You won't need any equipment today, just some space and a water bottle. We'll be doing 45 seconds of work followed by 15 seconds of rest.</p>
            </div>
          </div>

          <div className="chat-section">
            <div className="chat-header">
              <h3>Live Chat</h3>
            </div>
            
            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.user === 'You' ? 'own-message' : ''} ${msg.user === 'Coach' ? 'coach-message' : ''}`}>
                  <strong>{msg.user}:</strong> {msg.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="chat-input-container">
              <input 
                type="text" 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Say hello to the community..." 
                className="chat-input"
              />
              <button type="submit" className="chat-send-btn">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer theme="dark" />
    </div>
  );
}
