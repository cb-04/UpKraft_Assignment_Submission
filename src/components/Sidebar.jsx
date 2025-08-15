import { useState } from "react";

const items = [
  "Home",
  "My Students",
  "My Courses",
  "Calendar",
  "Assignment",
  "Music Library",
  "Practice Studio",
  "Payment Summary",
  "Refer & Earn",
  { label: "Settings", children: ["Profile", "Account", "Preferences"] },
];

export default function Sidebar({ active, onChange }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const handleClick = (item) => {
    if (typeof item === "string") {
      onChange(item);
    } else {
      setOpenSettings((o) => !o);
    }
  };

  return (
    <aside
      className={`h-screen sticky top-0 text-white flex flex-col ${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300 bg-gradient-to-b from-purple-700 to-purple-500`}
    >
      <div className="flex items-center justify-between px-4 py-4">
        <div className="font-extrabold tracking-wider">
          {collapsed ? "UK" : "UPKRAFT"}
        </div>
        <button
          className="text-white/90 hover:text-white"
          title={collapsed ? "Expand" : "Collapse"}
          onClick={() => setCollapsed((v) => !v)}
        >
          {collapsed ? "➤" : "◀"}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {items.map((item) => {
          const isActive = active === (typeof item === "string" ? item : item.label);
          return (
            <div key={typeof item === "string" ? item : item.label}>
              <button
                onClick={() => handleClick(item)}
                className={`w-full text-left flex items-center gap-3 px-5 py-2 hover:bg-white/10 ${
                  isActive ? "bg-white/15" : ""
                }`}
                title={typeof item === "string" ? item : item.label}
              >
                <span className="text-lg">•</span>
                {!collapsed && (
                  <span>
                    {typeof item === "string" ? item : item.label}
                    {item.children && (
                      <span className="ml-1">{openSettings ? "▲" : "▼"}</span>
                    )}
                  </span>
                )}
              </button>
              {item.children && openSettings && !collapsed && (
                <div className="ml-8">
                  {item.children.map((child) => (
                    <button
                      key={child}
                      onClick={() => onChange(child)}
                      className={`block w-full text-left px-3 py-1 text-sm hover:bg-white/10 ${
                        active === child ? "bg-white/15" : ""
                      }`}
                    >
                      {child}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <button className="px-5 py-3 hover:bg-white/10 text-left">Logout</button>
    </aside>
  );
}
