import {
  Activity,
  BarChart3,
  CalendarDays,
  CircleDollarSign,
  FileText,
  Flame,
  GalleryHorizontal,
  LifeBuoy,
  MapPin,
  Medal,
  ShieldCheck,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const assetPath = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

export const assets = {
  cricket: assetPath("cricket-stadium.png"),
  football: assetPath("football-match.png"),
  basketball: assetPath("basketball-match.png"),
  volleyball: assetPath("volleyball-match.png"),
  publicSheet: assetPath("public-sheet.png"),
  dashboardSheet: assetPath("dashboard-sheet.png"),
};

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Tournaments", path: "/tournaments" },
  { label: "Sports", path: "/sports" },
  { label: "Live", path: "/live" },
  { label: "Teams", path: "/teams" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const tournaments = [
  {
    slug: "mumbai-premier-bash",
    name: "Mumbai Premier Bash 2026",
    sport: "Cricket",
    status: "Registration Open",
    location: "Mumbai",
    date: "Aug 14 - Sep 02",
    teams: 32,
    capacity: 48,
    prize: "₹25,00,000",
    image: assets.cricket,
    accent: "emerald",
  },
  {
    slug: "bangalore-corporate-t20",
    name: "Bangalore Corporate T20",
    sport: "Cricket",
    status: "Live",
    location: "Bengaluru",
    date: "Jul 25 - Aug 05",
    teams: 18,
    capacity: 24,
    prize: "₹12,00,000",
    image: assets.cricket,
    accent: "orange",
  },
  {
    slug: "national-youth-football",
    name: "National Youth Football Cup",
    sport: "Football",
    status: "Upcoming",
    location: "Delhi",
    date: "Sep 12 - Sep 20",
    teams: 24,
    capacity: 32,
    prize: "₹8,50,000",
    image: assets.football,
    accent: "blue",
  },
  {
    slug: "pro-elite-basketball",
    name: "Pro Elite Basketball Series",
    sport: "Basketball",
    status: "Registration Open",
    location: "Chennai",
    date: "Oct 04 - Oct 12",
    teams: 16,
    capacity: 16,
    prize: "₹10,00,000",
    image: assets.basketball,
    accent: "emerald",
  },
];

export const liveMatches = [
  {
    id: "match-48",
    tournament: "Bangalore Corporate T20",
    sport: "Cricket",
    home: "India Forge",
    away: "England XI",
    score: "156/4",
    awayScore: "Yet to bat",
    stage: "Over 18.4",
    status: "Live Now",
    image: assets.cricket,
  },
  {
    id: "match-72",
    tournament: "Pro Elite Basketball Series",
    sport: "Basketball",
    home: "Titans United",
    away: "Phoenix Fire",
    score: "58",
    awayScore: "62",
    stage: "Q3 08:39",
    status: "Live Now",
    image: assets.basketball,
  },
  {
    id: "match-21",
    tournament: "Youth Football Cup",
    sport: "Football",
    home: "Bengaluru Bulls",
    away: "Mumbai Mavericks",
    score: "2",
    awayScore: "1",
    stage: "78 min",
    status: "Second Half",
    image: assets.football,
  },
];

export const teams = [
  { slug: "mumbai-mavericks", name: "Mumbai Mavericks", rank: "#01", sport: "Cricket", players: 18, wins: 15, rating: 92, image: assets.cricket },
  { slug: "bangalore-blaze", name: "Bangalore Blaze", rank: "#04", sport: "Football", players: 22, wins: 12, rating: 88, image: assets.football },
  { slug: "chennai-chargers", name: "Chennai Chargers", rank: "#12", sport: "Basketball", players: 15, wins: 9, rating: 81, image: assets.basketball },
  { slug: "kerala-spikers", name: "Kerala Spikers", rank: "#07", sport: "Volleyball", players: 12, wins: 10, rating: 86, image: assets.volleyball },
];

export const sports = [
  { slug: "cricket", name: "Cricket", icon: Trophy, active: 42, color: "emerald" },
  { slug: "football", name: "Football", icon: Medal, active: 36, color: "blue" },
  { slug: "basketball", name: "Basketball", icon: Zap, active: 18, color: "orange" },
  { slug: "volleyball", name: "Volleyball", icon: Activity, active: 16, color: "pink" },
  { slug: "badminton", name: "Badminton", icon: Flame, active: 22, color: "emerald" },
  { slug: "table-tennis", name: "Table Tennis", icon: Trophy, active: 11, color: "blue" },
  { slug: "e-sports", name: "E-Sports", icon: BarChart3, active: 29, color: "orange" },
  { slug: "athletics", name: "Athletics", icon: Medal, active: 14, color: "emerald" },
];

export const dashboardStats = [
  { label: "Total Revenue", value: "₹12,84,500", trend: "+12.4%", icon: CircleDollarSign, path: "/admin/payments" },
  { label: "Active Tournaments", value: "14", trend: "3 running", icon: Trophy, path: "/admin/tournaments" },
  { label: "Total Teams", value: "156", trend: "24 this month", icon: Users, path: "/admin/teams" },
  { label: "Live Matches", value: "8", trend: "2 finals today", icon: Activity, path: "/live" },
];

export const sidebar = [
  { label: "Dashboard", path: "/admin/dashboard", icon: BarChart3 },
  { label: "Tournaments", path: "/admin/tournaments", icon: Trophy },
  { label: "Teams", path: "/admin/teams", icon: Users },
  { label: "Players", path: "/admin/players", icon: Medal },
  { label: "Payments", path: "/admin/payments", icon: CircleDollarSign },
  { label: "CMS", path: "/admin/cms", icon: FileText },
  { label: "Reports", path: "/admin/reports", icon: BarChart3 },
  { label: "Logs", path: "/admin/logs", icon: ShieldCheck },
];

export const userSidebar = [
  { label: "Dashboard", path: "/user/dashboard", icon: BarChart3 },
  { label: "Profile", path: "/user/profile", icon: Users },
  { label: "Registrations", path: "/user/registrations", icon: Trophy },
  { label: "Payments", path: "/user/payments", icon: CircleDollarSign },
  { label: "Certificates", path: "/user/certificates", icon: Medal },
  { label: "Settings", path: "/user/settings", icon: ShieldCheck },
];

export const managementSidebar = [
  { label: "Dashboard", path: "/management/dashboard", icon: BarChart3 },
  { label: "Tournament", path: "/management/tournaments", icon: Trophy },
  { label: "Registrations", path: "/management/registrations", icon: FileText },
  { label: "Matches", path: "/management/matches", icon: Activity },
  { label: "Players", path: "/management/players", icon: Users },
  { label: "Reports", path: "/management/reports", icon: BarChart3 },
];

export const timeline = [
  { time: "18.4", type: "FOUR", text: "Rohan Sharma drives through extra cover. The chasing side tightens control.", score: "156/4" },
  { time: "17.6", type: "WICKET", text: "Clean catch at deep square leg after a slower ball variation.", score: "148/4" },
  { time: "16.2", type: "SIX", text: "Massive hit over long-on. Crowd volume spikes in the live feed.", score: "139/3" },
  { time: "15.1", type: "COMMENTARY", text: "Bowling team changes field to protect the off-side boundary.", score: "126/3" },
];

export const contentCards = [
  { slug: "ai-sports-analytics", title: "The Future of AI in Professional Sports Analytics", type: "Article", icon: FileText, path: "/blog/ai-sports-analytics" },
  { slug: "regional-masters-highlights", title: "Regional Masters Photo Highlights", type: "Gallery", icon: GalleryHorizontal, path: "/gallery" },
  { slug: "payment-refund-guide", title: "Tournament Payment and Refund Guide", type: "FAQ", icon: LifeBuoy, path: "/faq" },
  { slug: "venue-operations", title: "Venue Operations in Major Indian Cities", type: "Guide", icon: MapPin, path: "/contact" },
];

export const cmsSections = ["Homepage Hero", "Sponsors", "Gallery", "Blogs", "FAQs", "About", "Contact", "Footer"];
export const paymentRows = ["Razorpay order created", "Webhook verified", "Receipt generated", "Refund pending review"];
export const logRows = ["Admin login success", "Score correction requested", "Payment webhook processed", "CMS page published"];
export const reports = ["Tournament revenue", "Registration funnel", "Venue utilization", "Live score audit", "Player participation"];
