import { useMemo, useState } from "react";

// Expanded lesson list
const seed = [
  { id: 1, date: "21 July", time: "2:00 – 3:00 PM", course: "Introduction to Piano", students: "Eunice Robel & Arnold Hayes" },
  { id: 2, date: "22 July", time: "4:00 – 5:00 PM", course: "Finger Warmups", students: "Eunice Robel & Arnold Hayes" },
  { id: 3, date: "23 July", time: "3:00 – 4:00 PM", course: "Simple Chords", students: "Eunice Robel & Arnold Hayes" },
  { id: 4, date: "24 July", time: "5:00 – 6:00 PM", course: "Advanced Chords", students: "Eunice Robel & Arnold Hayes" },
  { id: 5, date: "25 July", time: "2:00 – 3:00 PM", course: "Melody Practice", students: "Eunice Robel & Arnold Hayes" },
  { id: 6, date: "26 July", time: "4:00 – 5:00 PM", course: "Composition Basics", students: "Eunice Robel & Arnold Hayes" },
];

export default function UpcomingLessons({ globalSearch }) {
  const [lessons, setLessons] = useState(seed);
  const [query, setQuery] = useState("");

  const q = (globalSearch || "") + " " + query;
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return lessons;
    return lessons.filter(
      (l) =>
        l.course.toLowerCase().includes(s) ||
        l.students.toLowerCase().includes(s) ||
        l.date.toLowerCase().includes(s) ||
        l.time.toLowerCase().includes(s)
    );
  }, [lessons, q]);

  const markDone = (id) => setLessons((arr) => arr.filter((x) => x.id !== id));

  return (
    <div className="ring-card">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Upcoming Lessons</h3>
        <input
          className="border rounded px-2 py-1 text-sm"
          placeholder="Search lessons..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2">Date</th>
            <th>Time</th>
            <th>Course</th>
            <th>Student Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((l) => (
            <tr key={l.id} className="border-t hover:bg-gray-50">
              <td className="py-2">{l.date}</td>
              <td>{l.time}</td>
              <td>{l.course}</td>
              <td>{l.students}</td>
              <td className="text-right">
                <button onClick={() => markDone(l.id)} className="btn-primary text-sm">
                  Mark Done
                </button>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center text-gray-500 py-6">No lessons found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
