export default function ProfileCard({ profileImage, setProfileImage }) {
  const handleUpload = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setProfileImage(url);
  };

  return (
    <div className="ring-card flex flex-col items-center relative">
      <div className="relative">
        <img
          src={profileImage || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <label className="absolute -bottom-1 -right-1 bg-purple-600 p-1 rounded-full cursor-pointer shadow">
          <span className="text-white text-xs">📷</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>

      <h2 className="font-bold mt-2">Sherry Wolf</h2>
      <p className="text-sm text-gray-500">Piano Tutor</p>

      <div className="flex justify-between w-full mt-3">
        <div className="text-center">
          <p className="font-extrabold text-purple-700">30</p>
          <p className="text-xs text-gray-500">Students</p>
        </div>
        <div className="text-center">
          <p className="font-extrabold text-purple-700">6</p>
          <p className="text-xs text-gray-500">Courses</p>
        </div>
        <div className="text-center">
          <p className="font-extrabold text-purple-700">3</p>
          <p className="text-xs text-gray-500">Rewards</p>
        </div>
      </div>
    </div>
  );
}
