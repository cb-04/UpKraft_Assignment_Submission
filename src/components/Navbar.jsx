export default function Navbar({ right, profileImage }) {
  return (
    <div className="flex justify-between items-center p-4 shadow-sm bg-white sticky top-0 z-10">
      <input
        type="text"
        placeholder="Search here"
        className="border rounded px-3 py-1 w-1/3"
        onChange={(e) => right?.onGlobalSearch?.(e.target.value)}
      />
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="text-right">
          <div className="font-semibold leading-tight">Sherry Wolf</div>
          <div className="text-gray-500 text-xs">Tutor</div>
        </div>
      </div>
    </div>
  );
}
