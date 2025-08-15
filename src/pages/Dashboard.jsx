import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import UpcomingLessons from "../components/UpcomingLessons";
import PerformanceCard from "../components/PerformanceCard";
import FeedbackCard from "../components/FeedbackCard";
import ReferModal from "../components/ReferModal";

export default function Dashboard() {
  const [active, setActive] = useState("Home");
  const [globalSearch, setGlobalSearch] = useState("");
  const [profileImage, setProfileImage] = useState(null); 
  const [referOpen, setReferOpen] = useState(false);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar active={active} onChange={setActive} />
      <main className="flex-1">
        <Navbar
          right={{ onGlobalSearch: setGlobalSearch }}
          profileImage={profileImage}
        />

        <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <ProfileCard
            profileImage={profileImage}
            setProfileImage={setProfileImage}
          />
          <StatsCard title="Total Active Students" value="30" />
          <StatsCard title="Tutor CSAT Score" value="80" suffix="%" />
          <StatsCard title="Assignment Completion Rate" value="15" suffix="%" />

          <div className="md:col-span-2">
            <UpcomingLessons globalSearch={globalSearch} />
          </div>

          <PerformanceCard
            title="Overall Course Performance"
            value10={8}
            ringColor="#FACC15"
          />
          <PerformanceCard
            title="Overall Student Performance"
            value10={6.6}
            ringColor="#F87171"
          />

          {/* Bottom-right stacked cards */}
          <div className="md:col-span-2 flex flex-col gap-4 justify-end">
            <FeedbackCard initialPending={12} />
            <div className="ring-card bg-purple-50">
              <p className="font-semibold">Refer & Earn</p>
              <p className="text-sm text-gray-600 mt-1">
                Invite friends and earn exclusive rewards for every successful
                referral.
              </p>
              <button 
                className="btn-primary mt-3"
                onClick={() => setReferOpen(true)}
              >
                Refer Now
              </button>
            </div>
          </div>
        </div>
      </main>

      {referOpen && <ReferModal onClose={() => setReferOpen(false)} />}
    </div>
  );
}
