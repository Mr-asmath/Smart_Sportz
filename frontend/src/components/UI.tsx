import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Search, Settings, Sun, Moon } from "lucide-react";
import type React from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data/platform";

export function Page({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.main
      className={`page ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

export function PublicHeader({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <span className="brand-mark">S</span>
        <span>SmartSportz.in</span>
      </Link>
      <nav className="site-nav">
        {navItems.slice(0, 7).map((item) => (
          <NavLink key={item.path} to={item.path}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <div className="search-pill">
          <Search size={16} />
          <span>Search events...</span>
        </div>
        <button className="icon-btn" onClick={() => setDarkMode(!darkMode)} title="Toggle dark mode">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Link to="/login" className="btn btn-secondary">Login</Link>
        <Link to="/tournaments/mumbai-premier-bash/register" className="btn btn-primary">Register</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className="brand compact">
          <span className="brand-mark">S</span>
          <span>SmartSportz.in</span>
        </Link>
        <p>Enterprise sports tournament management for registrations, payments, live scoring, and analytics.</p>
      </div>
      <div className="footer-grid">
        <div><b>Platform</b><Link to="/tournaments">Tournaments</Link><Link to="/live">Live</Link><Link to="/teams">Teams</Link></div>
        <div><b>Resources</b><Link to="/blog">Blog</Link><Link to="/gallery">Gallery</Link><Link to="/faq">FAQ</Link></div>
        <div><b>Company</b><Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/sponsors">Sponsors</Link></div>
      </div>
    </footer>
  );
}

export function PortalShell({
  title,
  subtitle,
  sidebar,
  children,
  action,
}: {
  title: string;
  subtitle: string;
  sidebar: Array<{ label: string; path: string; icon: React.ComponentType<{ size?: number | string }> }>;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="portal-shell">
      <aside className="portal-sidebar">
        <Link to="/" className="brand">
          <span className="brand-mark">S</span>
          <span>SmartSportz.in</span>
        </Link>
        <nav>
          {sidebar.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.path} to={item.path}>
                <Icon size={18} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
        <Link className="btn btn-primary wide" to="/tournaments/mumbai-premier-bash/register">Create Tournament</Link>
        <Link className="sidebar-link" to="/settings"><Settings size={16} /> Settings</Link>
      </aside>
      <section className="portal-main">
        <div className="portal-topbar">
          <div>
            <p className="eyebrow">Smart Sportz Enterprise</p>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          {action}
        </div>
        {children}
      </section>
    </div>
  );
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="section-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function MetricCard({
  label,
  value,
  trend,
  icon: Icon,
  to,
}: {
  label: string;
  value: string;
  trend: string;
  icon: React.ComponentType<{ size?: number | string }>;
  to?: string;
}) {
  const content = (
    <motion.div className="metric-card" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}>
      <div className="metric-icon"><Icon size={22} /></div>
      <span className="trend">{trend}</span>
      <p>{label}</p>
      <strong>{value}</strong>
      <div className="meter"><span /></div>
    </motion.div>
  );

  return to ? <Link to={to} className="click-card">{content}</Link> : content;
}

export function TournamentCard({ item }: { item: any }) {
  return (
    <Link to={`/tournaments/${item.slug}`} className="click-card">
    <motion.article className="tournament-card" whileHover={{ y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <img src={item.image} alt="" />
      <div className="card-body">
        <span className={`status ${item.accent}`}>{item.status}</span>
        <h3>{item.name}</h3>
        <p>{item.sport} • {item.location} • {item.date}</p>
        <div className="card-meta">
          <span>{item.teams}/{item.capacity} teams</span>
          <span>{item.prize}</span>
        </div>
        <span className="inline-link">View details <ChevronRight size={16} /></span>
      </div>
    </motion.article>
    </Link>
  );
}

export function LiveMatchCard({ match }: { match: any }) {
  return (
    <Link className="live-card click-card" to={`/live/${match.id}`}>
      <div className="live-media"><img src={match.image} alt="" /><span className="live-dot">Live</span></div>
      <div>
        <p className="eyebrow">{match.tournament}</p>
        <h3>{match.home} vs {match.away}</h3>
        <div className="score-line"><strong>{match.score}</strong><span>{match.awayScore}</span></div>
        <p>{match.sport} • {match.stage}</p>
        <span className="inline-link">Open center <ArrowRight size={16} /></span>
      </div>
    </Link>
  );
}

export function DataTable({ columns, rows }: { columns: string[]; rows: Array<Array<React.ReactNode>> }) {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr>{columns.map((col) => <th key={col}>{col}</th>)}</tr></thead>
        <tbody>{rows.map((row, index) => <tr key={index}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
