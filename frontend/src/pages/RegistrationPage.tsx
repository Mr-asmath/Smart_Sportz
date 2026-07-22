import { Page } from "../components/UI";
import { PageHero } from "./shared";
import { Link } from "react-router-dom";

export function RegistrationPage() {
  return (
    <Page>
      <PageHero title="Professional Tournament Registration" text="A complete five-step flow for team details, roster, documents, payment, and review." />
      <div className="wizard">
        {["Personal", "Team", "Documents", "Payment", "Review"].map((step, index) => (
          <div className={`wizard-step ${index < 2 ? "active" : ""}`} key={step}><span>{index + 1}</span>{step}</div>
        ))}
      </div>
      <div className="form-layout">
        <form className="panel form-card">
          <h2>Team composition</h2>
          <div className="form-grid">
            <label>Team name<input placeholder="Mumbai Mavericks" /></label>
            <label>Captain name<input placeholder="Arjun Sharma" /></label>
            <label>Email<input placeholder="captain@team.com" /></label>
            <label>Phone<input placeholder="+91 98765 43210" /></label>
            <label>Primary category<select><option>Professional League</option></select></label>
            <label>City<select><option>Mumbai</option></select></label>
          </div>
          <Link className="btn btn-primary" to="/user/registrations">Continue to roster</Link>
        </form>
        <aside className="panel payment-summary">
          <h3>Payment Summary</h3>
          <p>Entry Fee</p><strong>INR 4,999</strong>
          <p>Processing</p><strong>INR 180</strong>
          <hr />
          <p>Total Payable</p><strong>INR 5,179</strong>
          <Link className="btn btn-primary wide" to="/payments/registration-demo/receipt">Pay with Razorpay</Link>
        </aside>
      </div>
    </Page>
  );
}
