export interface TemplateProps {
    name: string;
    setName: (val: string) => void;
    attending: boolean;
    setAttending: (val: boolean) => void;
    handleSubmit: () => void;
  }
  