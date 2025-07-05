

// src/hooks/useToast.js
import { toast } from "sonner";

export const useToast = () => {
  const success = (msg, opts) => toast.success(msg, opts);
  const error = (msg, opts) => toast.error(msg, opts);
  const info = (msg, opts) => toast(msg, opts);

  return { success, error, info };
};
