import React from 'react';
import FireClaimForm from '../components/FireClaimForm';
import Footer from '../components/Footer';
import '../styles/FireClaimPage.css';

const FireClaimPage = () => {
  return (
    <div className="fire-claim-page">
      <div className="fire-claim-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>California Wildfire Damage Claims</h1>
          <p>Get the compensation you deserve for damages caused by recent wildfires</p>
        </div>
      </div>
      
      <div className="fire-claim-content">
        <div className="info-section">
          <h2>Recent California Wildfires Affecting Homeowners</h2>
          <p>
            Recent wildfires across California have devastated communities, damaged properties, 
            and disrupted lives. If you were affected by the Palisades, Eaton, Hurst, Lidia, Sunset, 
            or Kenneth fires, you may be eligible for significant compensation.
          </p>
          <div className="benefits">
            <div className="benefit">
              <i className="fas fa-home"></i>
              <h3>Property Damage</h3>
              <p>Compensation for damage to your home, personal belongings, and land</p>
            </div>
            <div className="benefit">
              <i className="fas fa-briefcase"></i>
              <h3>Business Losses</h3>
              <p>Recovery for business interruption, lost income, and commercial property</p>
            </div>
            <div className="benefit">
              <i className="fas fa-hand-holding-medical"></i>
              <h3>Personal Injuries</h3>
              <p>Support for medical expenses, emotional distress, and evacuation costs</p>
            </div>
          </div>
        </div>
        
        <FireClaimForm />
        
        <div className="testimonials">
          <h2>Success Stories</h2>
          <div className="testimonial">
            <blockquote>
              "After losing almost everything in the wildfire, I didn't know where to turn. 
              The legal team helped me get compensation that allowed me to rebuild my home and my life."
            </blockquote>
            <cite>— Michael R., Eaton Fire Survivor</cite>
          </div>
          <div className="testimonial">
            <blockquote>
              "My insurance wasn't covering nearly enough of my losses. Filing a claim was the best 
              decision I made - I received over 3x what insurance initially offered."
            </blockquote>
            <cite>— Jennifer L., Palisades Fire Victim</cite>
          </div>
        </div>
        
        <div className="faqs">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How much does it cost to file a claim?</h3>
            <p>There are no upfront costs. Our partner attorneys work on a contingency fee basis, 
            which means you only pay if you win your case.</p>
          </div>
          <div className="faq-item">
            <h3>How long do I have to file a claim?</h3>
            <p>Deadlines vary depending on the specific fire and circumstances, but many claims have 
            a statute of limitations of 2-3 years. It's important to act quickly to preserve your rights.</p>
          </div>
          <div className="faq-item">
            <h3>What if my insurance already paid me?</h3>
            <p>You may still be entitled to additional compensation beyond what your insurance covered, 
            especially for long-term losses, emotional distress, and other damages.</p>
          </div>
          <div className="faq-item">
            <h3>What documentation do I need?</h3>
            <p>While helpful, you don't need to have all documentation to start the process. Our partner 
            attorneys can help you gather the necessary evidence to support your claim.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FireClaimPage; 