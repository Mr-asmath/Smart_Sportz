import { Lock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Page } from "../components/UI";

export function LoginPage({ recovery = false }: { recovery?: boolean }) {
  return (
    <Page className="auth-page">
      <div className="auth-card">
        <div className="auth-visual">
          <ShieldCheck size={48} />
          <h2>SmartSportz.in</h2>
          <p>Secure tournament operations for teams, athletes, managers, and admins.</p>
        </div>
        <form>
          <Lock size={28} />
          <h1>{recovery ? "Forgot Password?" : "Welcome Back"}</h1>
          <p>{recovery ? "Enter your email and we will send an OTP for password recovery." : "Please enter your credentials to access your dashboard."}</p>
          <label>Email address<input placeholder="coach@smartsportz.in" /></label>
          {!recovery && <label>Password<input placeholder="********" type="password" /></label>}
          <button type="button" className="btn btn-primary wide">{recovery ? "Send OTP" : "Sign in"}</button>
          <Link to={recovery ? "/login" : "/forgot-password"}>{recovery ? "Back to login" : "Forgot password?"}</Link>
        </form>
      </div>
    </Page>
  );
}
