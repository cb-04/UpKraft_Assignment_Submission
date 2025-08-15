export default function StatsCard({ title, value, suffix = "" }) {
  return (
    <div className="ring-card">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-3xl font-extrabold text-purple-700">
        {value}{suffix}
      </p>
    </div>
  );
}
