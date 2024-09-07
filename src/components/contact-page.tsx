'use client'

import React, { useState } from 'react';
import SharedHeader from './shared-header';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && !data.error) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(`Failed to send message: ${data.error?.message || 'Unknown error'}`);
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <SharedHeader />

      <main className="flex-grow container mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-green-600">{status}</p>}
      </main>

      <footer className="py-6 bg-gray-100">
        <div className="container mx-auto px-5 flex flex-col items-center text-center">
          <p className="text-sm text-gray-600">© 2024 Tristan Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;