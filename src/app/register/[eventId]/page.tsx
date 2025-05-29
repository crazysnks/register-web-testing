'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function RegisterPage() {
  const params = useParams();
  const eventId = params.eventId as string;  // ✅ Get route param directly
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!eventId || !name) {
      alert('Missing info');
      return;
    }

    await supabase.from('registrations').insert({
      event_id: eventId,
      name,
      is_attending: attending,
    });

    setSubmitted(true);
  };

  if (submitted) return <div className="text-center mt-20">✅ Thanks for registering!</div>;

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border rounded mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            checked={attending}
            onChange={() => setAttending(true)}
          />{' '}
          Attending
        </label>
        <label>
          <input
            type="radio"
            checked={!attending}
            onChange={() => setAttending(false)}
          />{' '}
          Not Attending
        </label>
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
}
