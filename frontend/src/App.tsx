import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer, PublicHeader } from "./components/UI";
import {
  AdminPage,
  ArticleDetailPage,
  CmsSectionPage,
  ContentPage,
  HomePage,
  LiveHubPage,
  LiveMatchPage,
  LoginPage,
  ManagementPage,
  RegistrationPage,
  SettingsPage,
  SportDetailPage,
  SportsPage,
  TeamDetailPage,
  TeamsPage,
  TournamentDetailPage,
  TournamentsPage,
  ManagementSectionPage,
  UserSectionPage,
  UtilityDetailPage,
  UserDashboardPage,
} from "./pages";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("smart-sportz-theme") === "dark");
  const location = useLocation();
  const isPortal = location.pathname.startsWith("/admin") || location.pathname.startsWith("/management") || location.pathname.startsWith("/user");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("smart-sportz-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="app-shell">
      {!isPortal && <PublicHeader darkMode={darkMode} setDarkMode={setDarkMode} />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/tournaments/:slug" element={<TournamentDetailPage />} />
          <Route path="/tournaments/:slug/register" element={<RegistrationPage />} />
          <Route path="/registration/:id/payment" element={<RegistrationPage />} />
          <Route path="/payments/:id/receipt" element={<UtilityDetailPage type="payment" />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/sports/:slug" element={<SportDetailPage />} />
          <Route path="/live" element={<LiveHubPage />} />
          <Route path="/live/:matchId" element={<LiveMatchPage />} />
          <Route path="/leaderboards" element={<ContentPage type="leaderboards" />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/teams/:slug" element={<TeamDetailPage />} />
          <Route path="/athletes/:slug" element={<AdminPage section="players" />} />
          <Route path="/gallery" element={<ContentPage type="gallery" />} />
          <Route path="/blog" element={<ContentPage type="blog" />} />
          <Route path="/blog/:slug" element={<ArticleDetailPage />} />
          <Route path="/about" element={<ContentPage type="about" />} />
          <Route path="/contact" element={<ContentPage type="contact" />} />
          <Route path="/sponsors" element={<ContentPage type="sponsors" />} />
          <Route path="/faq" element={<ContentPage type="faq" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<LoginPage recovery />} />
          <Route path="/otp" element={<LoginPage recovery />} />
          <Route path="/reset-password" element={<LoginPage recovery />} />
          <Route path="/user/profile" element={<UserSectionPage section="profile" />} />
          <Route path="/user/registrations" element={<UserSectionPage section="registrations" />} />
          <Route path="/user/payments" element={<UserSectionPage section="payments" />} />
          <Route path="/user/certificates" element={<UserSectionPage section="certificates" />} />
          <Route path="/user/settings" element={<UserSectionPage section="settings" />} />
          <Route path="/user/*" element={<UserDashboardPage />} />
          <Route path="/management/tournaments" element={<ManagementSectionPage section="tournaments" />} />
          <Route path="/management/registrations" element={<ManagementSectionPage section="registrations" />} />
          <Route path="/management/matches" element={<ManagementSectionPage section="matches" />} />
          <Route path="/management/players" element={<ManagementSectionPage section="players" />} />
          <Route path="/management/reports" element={<ManagementSectionPage section="reports" />} />
          <Route path="/management/*" element={<ManagementPage />} />
          <Route path="/management/matches/:id/control" element={<LiveMatchPage />} />
          <Route path="/admin/dashboard" element={<AdminPage />} />
          <Route path="/admin/tournaments" element={<AdminPage section="tournaments" />} />
          <Route path="/admin/teams" element={<AdminPage section="teams" />} />
          <Route path="/admin/players" element={<AdminPage section="players" />} />
          <Route path="/admin/payments" element={<AdminPage section="payments" />} />
          <Route path="/admin/payments/operations" element={<UtilityDetailPage type="admin-payments" />} />
          <Route path="/admin/cms" element={<AdminPage section="cms" />} />
          <Route path="/admin/cms/:section" element={<CmsSectionPage />} />
          <Route path="/admin/reports" element={<AdminPage section="reports" />} />
          <Route path="/admin/reports/detail" element={<UtilityDetailPage type="admin-reports" />} />
          <Route path="/admin/logs" element={<AdminPage section="logs" />} />
          <Route path="/admin/logs/detail" element={<UtilityDetailPage type="admin-logs" />} />
          <Route path="/live-ops/*" element={<LiveMatchPage />} />
          <Route path="/settings" element={<SettingsPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      {!isPortal && <Footer />}
    </div>
  );
}
