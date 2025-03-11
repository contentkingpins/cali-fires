import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="container">
          <h1>About Our Firm</h1>
          <p className="tagline">Dedicated advocates for California wildfire victims since 2010</p>
        </div>
      </header>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>In the wake of devastating California wildfires, we stand with victims as their unwavering advocates. Our mission is simple yet powerful: to ensure that every person affected by the 2025 wildfires receives the full compensation they deserve.</p>
            <p>The Palisades, Eaton, Hurst, Lidia, Sunset, and Kenneth fires have left communities shattered and lives forever changed. We believe that behind every insurance claim is a family trying to rebuild their life—and we fight tirelessly to make that rebuilding possible.</p>
            <div className="cta-box">
              <h3>Don't wait to seek the compensation you deserve</h3>
              <Link to="/#eligibility-form" className="btn btn-primary">Check Your Eligibility Now →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call Now for Immediate Assistance</a>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="container">
          <h2>Our Expertise in Wildfire Litigation</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="icon"><i className="fas fa-fire-extinguisher"></i></div>
              <h3>15+ Years Experience</h3>
              <p>Our attorneys have specialized in wildfire litigation for over 15 years, handling cases from the state's most devastating fires.</p>
            </div>
            <div className="expertise-card">
              <div className="icon"><i className="fas fa-dollar-sign"></i></div>
              <h3>$500M+ Recovered</h3>
              <p>We've secured over half a billion dollars in compensation for wildfire victims throughout California.</p>
            </div>
            <div className="expertise-card">
              <div className="icon"><i className="fas fa-users"></i></div>
              <h3>5,000+ Families Helped</h3>
              <p>We've helped thousands of families rebuild their lives after devastating wildfire losses.</p>
            </div>
            <div className="expertise-card">
              <div className="icon"><i className="fas fa-gavel"></i></div>
              <h3>Proven Track Record</h3>
              <p>Our success rate against insurance companies and negligent utilities speaks for itself.</p>
            </div>
          </div>
          <div className="cta-centered">
            <p className="cta-text">Time is limited to file your 2025 wildfire claim. Don't delay.</p>
            <Link to="/#eligibility-form" className="btn btn-primary btn-lg">Check Your Eligibility Now →</Link>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <div className="approach-content">
            <h2>Our Compassionate Approach</h2>
            <p>We understand that you're not just another case number. You're a person who has experienced a traumatic loss, and you deserve both justice and compassion.</p>
            
            <div className="approach-features">
              <div className="feature">
                <h3>Personalized Attention</h3>
                <p>Every client works directly with our senior attorneys—never passed off to junior staff or paralegals.</p>
              </div>
              <div className="feature">
                <h3>No Upfront Costs</h3>
                <p>We work on a contingency basis, meaning you pay nothing unless we win your case.</p>
              </div>
              <div className="feature">
                <h3>Simplified Process</h3>
                <p>We handle all the complex paperwork, evidence gathering, and negotiations so you can focus on rebuilding.</p>
              </div>
              <div className="feature">
                <h3>Regular Updates</h3>
                <p>We keep you informed at every stage of your case with clear, jargon-free communication.</p>
              </div>
            </div>
            
            <div className="testimonial">
              <blockquote>
                "After losing everything in the wildfire, I felt completely lost. This firm not only secured compensation far beyond what my insurance offered, but they treated me with genuine care throughout the process. They gave me hope when I needed it most."
              </blockquote>
              <cite>— Maria C., Palisades Fire Survivor</cite>
            </div>
            
            <div className="cta-box urgent">
              <h3>The time to act is now</h3>
              <p>Legal deadlines for 2025 wildfire claims are approaching. Don't miss your opportunity for justice.</p>
              <div className="cta-buttons">
                <a href="tel:8005551234" className="btn btn-secondary btn-lg">📞 Call Now for Immediate Assistance</a>
                <Link to="/#eligibility-form" className="btn btn-primary btn-lg">Check Your Eligibility Now →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Leadership Team</h2>
          <p className="section-intro">Meet the experienced attorneys who will fight for your rights</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Jennifer Martinez, Esq.</h3>
              <p className="member-title">Founding Partner</p>
              <p>Specializing in utility negligence cases with over 20 years of experience in wildfire litigation.</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Michael Chen, Esq.</h3>
              <p className="member-title">Senior Partner</p>
              <p>Former insurance defense attorney who now exclusively represents wildfire victims.</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Sarah Johnson, Esq.</h3>
              <p className="member-title">Lead Trial Attorney</p>
              <p>Has secured multiple seven-figure verdicts for California wildfire victims.</p>
            </div>
          </div>
          
          <div className="cta-centered">
            <p className="cta-text">Our team is standing by to help you with your 2025 wildfire claim.</p>
            <a href="tel:8005551234" className="btn btn-secondary btn-lg">📞 Call Now for Immediate Assistance</a>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <h2>You Deserve Justice and Fair Compensation</h2>
          <p>The 2025 California wildfires have caused immeasurable suffering. While we can't undo the damage, we can help you secure the financial resources needed to rebuild your life.</p>
          <p>Our team is ready to fight for you against insurance companies and negligent parties. The consultation is free, and you pay nothing unless we win your case.</p>
          <div className="final-cta-buttons">
            <Link to="/#eligibility-form" className="btn btn-primary btn-xl">Check Your Eligibility Now →</Link>
            <a href="tel:8005551234" className="btn btn-secondary btn-xl">📞 Call Now for Immediate Assistance</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage; 