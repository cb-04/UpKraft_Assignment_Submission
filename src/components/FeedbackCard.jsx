import { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import Toast from "./Toast";

export default function FeedbackCard({ initialPending = 12 }) {
  const [pending, setPending] = useState(initialPending);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const onSubmit = (rating, comment) => {
    setOpen(false);
    setPending((p) => Math.max(0, p - 1));
    setToast({ text: `Feedback submitted${rating ? ` (${rating}★)` : ""}`, id: Date.now() });
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <div className="ring-card flex flex-col items-center">
      <p className="text-gray-500">Feedback Pending</p>
      <div className="text-3xl font-extrabold text-purple-700 mt-2">{pending}</div>
      <button onClick={() => setOpen(true)} className="btn-primary mt-3">Give Feedback</button>

      {open && <FeedbackModal onClose={() => setOpen(false)} onSubmit={onSubmit} />}
      {toast && <Toast>{toast.text}</Toast>}
    </div>
  );
}
