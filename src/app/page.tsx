'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';

import TemplateA from './components/TemplateA';
import TemplateB from './components/TemplateB';
import TemplateC from './components/TemplateC';

export default function RegisterPage() {
  const params = useParams();
  const eventId = params.eventId as string;

  const [template, setTemplate] = useState('template-a');
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function fetchTemplate() {
      const { data } = await supabase.from('events').select('template').eq('event_id', eventId).single();
      if (data?.template) setTemplate(data.template);
    }
    fetchTemplate();
  }, [eventId]);

  const handleSubmit = async () => {
    if (!eventId || !name) {
      alert('Missing info');
      return;
    }
    await supabase.from('registrations').insert({ event_id: eventId, name, is_attending: attending });
    setSubmitted(true);
  };

  const props = { name, setName, attending, setAttending, handleSubmit };

  if (submitted) return <div className="text-center mt-20">✅ Thanks for registering!</div>;

  switch (template) {
    case 'template-b':
      return <TemplateB {...props} />;
    case 'template-c':
      return <TemplateC {...props} />;
    case 'template-a':
    default:
      return <TemplateA {...props} />;
  }
}
