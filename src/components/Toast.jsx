export default function Toast({ children }) {
  return (
    <div className="fixed bottom-5 right-5 bg-black text-white/90 px-4 py-2 rounded shadow z-[60]">
      {children}
    </div>
  );
}
