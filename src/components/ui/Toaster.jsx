

// components/ui/Toaster.jsx
import { Toaster as SonnerToaster } from "sonner";

export const Toaster = () => {
  return (
    <SonnerToaster 
      position="top-right" 
      richColors 
      closeButton 
      theme="system" // or "light" / "dark"
    />
  );
};
