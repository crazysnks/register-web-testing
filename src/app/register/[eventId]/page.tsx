'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

import TemplateA from '../../components/TemplateA';
import TemplateB from '../../components/TemplateB';
import TemplateC from '../../components/TemplateC';
import { TemplateProps } from '../../components/templates/TemplateProps';

export default function RegisterPage() {
  const params = useParams();
  const eventId = params.eventId as string;

  const [template, setTemplate] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    async function fetchTemplate() {
      const { data, error } = await supabase
        .from('events')
        .select('template')
        .eq('event_id', eventId)
        .single();

      if (error) {
        console.error('Error fetching template:', error.message);
        setTemplate('template-a'); // default fallback
      } else {
        setTemplate(data?.template || 'template-a'); // use default if null
      }

      setLoading(false);
    }

    if (eventId) {
      fetchTemplate();
    }
  }, [eventId]);

  if (loading) {
    return <div className="text-center mt-20">Loading template...</div>;
  }

  if (submitted) {
    return <div className="text-center mt-20 text-xl">✅ Thanks for registering!</div>;
  }

  const templateProps: TemplateProps = {
    name,
    setName,
    attending,
    setAttending,
    handleSubmit,
  };

  switch (template) {
    case 'template-b':
      return <TemplateB {...templateProps} />;
    case 'template-c':
      return <TemplateC {...templateProps} />;
    case 'template-a':
    default:
      return <TemplateA {...templateProps} />;
  }
}
