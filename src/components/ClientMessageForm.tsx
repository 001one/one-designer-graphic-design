// components/ClientMessageForm.tsx
'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ClientMessageForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('✅ Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-md border border-orange-200 md:mx-auto mt-30"
    >
      <h2 className="text-2xl font-bold text-orange-600 mb-6">Send Me a Message</h2>

      <label className="block text-sm font-medium text-orange-800 mb-1">Enter your Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-3 border border-orange-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <label className="block text-sm font-medium text-orange-800 mb-1">Enter your Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-3 border border-orange-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <label className="block text-sm font-medium text-orange-800 mb-1">Enter the Message you want to send to me</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full p-3 h-32 border border-orange-300 rounded-lg mb-6 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold transition-colors"
      >
        Send Message
      </button>

      {status && <p className="text-sm text-center text-orange-700 mt-4">{status}</p>}
    </form>
  );
}
