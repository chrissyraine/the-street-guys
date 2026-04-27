'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    partySize: '',
    eventType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service or booking system
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        partySize: '',
        eventType: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="w-full bg-black py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 glow-red">
            Let's Cook
          </h2>
          <p className="text-xl text-gray-300">
            Tell us about your event. We'll take care of the rest.
          </p>
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-950 border-2 border-gray-700 rounded px-4 py-3 text-white focus:border-[#C41E3A] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-950 border-2 border-gray-700 rounded px-4 py-3 text-white focus:border-[#C41E3A] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-bold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 border-2 border-gray-700 rounded px-4 py-3 text-white focus:border-[#C41E3A] focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Event Date and Party Size */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-bold mb-2">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-950 border-2 border-gray-700 rounded px-4 py-3 text-white focus:border-[#C41E3A] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-bold mb-2">Party Size</label>
                <input
                  type="number"
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-950 border-2 border-gray-700 rounded px-4 py-3 text-white focus:border-[#C41E3A] focus:outline-none transition-colors"
                  placeholder="Number of guests"
                  min="1"
                />
              </div>
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-white font-bold mb-2">Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 border-2 border-gray-700 rounded px-4 py-3 text-white focus:border-[#C41E3A] focus:outline-none transition-colors"
              >
                <option value="">Select an event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="private">Private Party</option>
                <option value="fundraiser">Fundraiser</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-white font-bold mb-2">Tell Us About Your Event</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-gray-950 border-2 border-gray-700 rounded px-4 py-3 text-white focus:border-[#C41E3A] focus:outline-none transition-colors resize-none"
                placeholder="Any dietary needs, menu preferences, or special requests?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full glow-button px-8 py-4 text-white font-bold text-lg rounded-lg transition-all hover:shadow-2xl"
            >
              Get A Quote
            </button>

            <p className="text-gray-400 text-sm text-center">
              We'll be in touch within 24 hours to discuss your event.
            </p>
          </form>
        ) : (
          <div className="text-center py-12">
            <div className="mb-6">
              <div className="inline-block w-16 h-16 bg-[#C41E3A] rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-white">✓</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Thanks for reaching out!</h3>
            <p className="text-gray-300 text-lg">
              We'll be in touch soon to talk about your event.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
