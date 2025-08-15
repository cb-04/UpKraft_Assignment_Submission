import { useState } from "react";

export default function FeedbackModal({ onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const submit = () => {
    if (!rating) return onSubmit(0, comment); // allow empty rating if needed
    onSubmit(rating, comment);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4">Give Feedback</h2>

        <div className="flex gap-1 mb-3">
          {[1,2,3,4,5].map((n) => (
            <button
              key={n}
              onClick={() => setRating(n)}
              className={`text-2xl ${n <= rating ? "text-yellow-500" : "text-gray-300"}`}
              aria-label={`${n} star`}
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          className="w-full border rounded p-2 mb-3"
          rows="4"
          placeholder="Leave a note for the student…"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="btn-ghost">Cancel</button>
          <button onClick={submit} className="btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
