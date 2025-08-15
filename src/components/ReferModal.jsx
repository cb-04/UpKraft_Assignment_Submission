export default function ReferModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Refer & Earn</h2>
        <p className="text-sm text-gray-600 mb-4">
          Share your referral link with friends and earn exclusive rewards!
        </p>
        <input
          className="w-full border rounded px-3 py-2 text-sm mb-4"
          readOnly
          value="https://upkraft.com/referral/ABC123"
        />
        <div className="flex justify-end gap-2">
          <button
            className="px-3 py-1 rounded bg-gray-200"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="btn-primary"
            onClick={() => navigator.clipboard.writeText("https://upkraft.com/referral/ABC123")}
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}
