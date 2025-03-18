import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="container">
          <h1>About Cali Fire Claim Center</h1>
          <p className="tagline">Your compassionate guides on the road to recovery</p>
        </div>
      </header>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Standing Together in the Wake of Devastation</h2>
            <p>The 2025 California wildfires—Palisades, Eaton, Hurst, Lidia, Sunset, and Kenneth—have left unimaginable destruction in their path. Homes reduced to ash, cherished possessions lost forever, and communities forever changed.</p>
            <p>We understand that behind every insurance claim is a family trying to piece their lives back together. This isn't just about compensation—it's about recovery, healing, and hope for the future.</p>
            
            <div className="animated-stat-container">
              <div className="animated-stat">
                <div className="stat-icon"><i className="fas fa-home"></i></div>
                <div className="stat-number">5,000+</div>
                <div className="stat-text">Families Helped</div>
              </div>
              <div className="animated-stat">
                <div className="stat-icon"><i className="fas fa-dollar-sign"></i></div>
                <div className="stat-number">$500M+</div>
                <div className="stat-text">Recovered</div>
              </div>
              <div className="animated-stat">
                <div className="stat-icon"><i className="fas fa-fire-extinguisher"></i></div>
                <div className="stat-number">15+</div>
                <div className="stat-text">Years Experience</div>
              </div>
            </div>
            
            <div className="cta-box">
              <h3>You don't have to face this alone</h3>
              <Link to="/#eligibility-form" className="btn btn-primary">Check Your Eligibility Now →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission: Your Recovery</h2>
            <p>At Cali Fire Claim Center, our mission is simple yet powerful: to compassionately guide wildfire victims through the complex claims process and secure the maximum compensation they deserve so they can rebuild their lives.</p>
            <p>You're not just a claim number to us—you're our neighbor, our community member, and someone who deserves unwavering support during this challenging time.</p>
            
            <div className="mission-image">
              <img 
                src="/cali fires photo.jpg" 
                alt="Aerial view of California wildfire damage and recovery efforts" 
                className="img-fluid"
              />
              <div className="image-caption" aria-hidden="true">Communities rebuilding together after the Palisades Fire, 2025</div>
            </div>
            
            <div className="cta-box">
              <h3>Time is limited to file your claim</h3>
              <p>Don't miss your opportunity for the compensation you deserve.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check Your Eligibility Now →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Cali Fire Claim Center</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="icon"><i className="fas fa-heart"></i></div>
              <h3>Compassionate Support</h3>
              <p>We treat every client with the care, respect, and individual attention they deserve during this difficult time.</p>
            </div>
            <div className="expertise-card">
              <div className="icon"><i className="fas fa-fire-alt"></i></div>
              <h3>Wildfire Specialists</h3>
              <p>Our team is exclusively dedicated to helping California wildfire victims recover what they've lost.</p>
            </div>
            <div className="expertise-card">
              <div className="icon"><i className="fas fa-hands-helping"></i></div>
              <h3>Community-Focused</h3>
              <p>As Californians ourselves, we're deeply invested in helping our communities rebuild and recover.</p>
            </div>
            <div className="expertise-card">
              <div className="icon"><i className="fas fa-shield-alt"></i></div>
              <h3>No Risk Approach</h3>
              <p>We only get paid if you do. There are no upfront costs, and consultation is always free.</p>
            </div>
          </div>
          <div className="cta-centered">
            <p className="cta-text">Join thousands of Californians who have successfully rebuilt their lives.</p>
            <Link to="/#eligibility-form" className="btn btn-primary btn-lg">Check Your Eligibility Now →</Link>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <div className="approach-content">
            <h2>Our Compassionate Approach</h2>
            <p>We understand that dealing with the aftermath of a wildfire is overwhelming. That's why we've developed a supportive, stress-free process to help you recover.</p>
            
            <div className="approach-features">
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-user-friends"></i></div>
                <h3>Personalized Attention</h3>
                <p>Every client receives dedicated support from experienced specialists who understand the nuances of wildfire recovery.</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-hand-holding-usd"></i></div>
                <h3>No Upfront Costs</h3>
                <p>We work on a contingency basis, meaning you pay nothing unless we win your case.</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-tasks"></i></div>
                <h3>Simplified Process</h3>
                <p>We handle all the complex paperwork, evidence gathering, and negotiations so you can focus on rebuilding.</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-comments"></i></div>
                <h3>Clear Communication</h3>
                <p>We keep you informed at every stage with clear, jargon-free updates about your claim's progress.</p>
              </div>
            </div>
            
            <div className="testimonial fade-in">
              <blockquote>
                "After losing everything in the Palisades Fire, I felt completely lost. Cali Fire Claim Center not only secured compensation far beyond what my insurance offered, but they treated me with genuine care throughout the process. They gave me hope when I needed it most."
              </blockquote>
              <cite>— Maria C., Palisades Fire Survivor</cite>
            </div>
            
            <div className="testimonial fade-in">
              <blockquote>
                "The team at Cali Fire Claim Center understood that this wasn't just about money—it was about rebuilding our lives. They fought for us when the insurance company tried to minimize our losses. I'm forever grateful for their compassion and determination."
              </blockquote>
              <cite>— James T., Eaton Fire Survivor</cite>
            </div>
            
            <div className="cta-box urgent">
              <h3>The time to act is now</h3>
              <p>Legal deadlines for 2025 wildfire claims are approaching. Don't miss your opportunity for justice.</p>
              <Link to="/#eligibility-form" className="btn btn-primary btn-lg">Check Your Eligibility Now →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="community-section">
        <div className="container">
          <h2>Committed to Our California Communities</h2>
          <div className="community-content">
            <p>Beyond providing legal assistance, we're deeply committed to the long-term recovery of communities affected by the 2025 wildfires. We participate in local rebuilding efforts, support community resilience programs, and advocate for better wildfire prevention and response measures.</p>
            
            <div className="community-initiatives">
              <div className="initiative">
                <div className="initiative-icon"><i className="fas fa-hands"></i></div>
                <h3>Volunteer Support</h3>
                <p>Our team regularly volunteers with local recovery organizations throughout affected communities.</p>
              </div>
              <div className="initiative">
                <div className="initiative-icon"><i className="fas fa-seedling"></i></div>
                <h3>Reforestation Efforts</h3>
                <p>We partner with environmental groups to help restore California's precious natural landscapes.</p>
              </div>
              <div className="initiative">
                <div className="initiative-icon"><i className="fas fa-book"></i></div>
                <h3>Educational Resources</h3>
                <p>We provide free educational workshops to help communities prepare for and recover from wildfires.</p>
              </div>
            </div>
            
            <div className="hope-message">
              <h3>There is hope after devastation</h3>
              <p>While we can't undo the damage caused by the wildfires, we can walk alongside you on the path to recovery, providing the legal support and resources you need to rebuild.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <h2>Take the First Step Toward Recovery</h2>
          <p>The 2025 California wildfires have caused immeasurable suffering. While we can't undo the damage, we can help you secure the financial resources needed to rebuild your life.</p>
          <p>Our compassionate team is ready to fight for you against insurance companies and negligent parties. The consultation is free, and you pay nothing unless we win your case.</p>
          <div className="final-cta-buttons">
            <Link to="/#eligibility-form" className="btn btn-primary btn-xl">Check Your Eligibility Now →</Link>
          </div>
          <p className="final-note">Time limits apply to wildfire claims. Don't wait to get the help you deserve.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage; 