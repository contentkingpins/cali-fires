import React from 'react';
import '../styles/TrustSection.css';

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <h2 className="section-title">Why Choose Our Firm</h2>
        
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Clients Represented</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">$500M+</div>
            <div className="stat-label">Recovered for Clients</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Focus on Wildfire Cases</div>
          </div>
        </div>
        
        <div className="testimonials-container">
          <h3>What Our Clients Say</h3>
          
          <div className="testimonial-grid">
            <div className="testimonial-item">
              <div className="testimonial-quote">
                "After losing our home in the wildfire, we were devastated. Your team guided us through the entire process and helped us get the compensation we needed to rebuild."
              </div>
              <div className="testimonial-author">- Michael S., Santa Rosa</div>
            </div>
            
            <div className="testimonial-item">
              <div className="testimonial-quote">
                "The insurance company initially denied my claim, but your attorneys fought for me and secured a settlement that was far more than I expected."
              </div>
              <div className="testimonial-author">- Jennifer L., Paradise</div>
            </div>
            
            <div className="testimonial-item">
              <div className="testimonial-quote">
                "Professional, compassionate, and effective. I couldn't have asked for better representation during such a difficult time in my life."
              </div>
              <div className="testimonial-author">- Robert T., Malibu</div>
            </div>
          </div>
          
          <div className="testimonial-disclaimer">
            *Prior results do not guarantee a similar outcome. Testimonials are from actual clients.
          </div>
        </div>
        
        <div className="credentials-container">
          <h3>Top-Rated California Wildfire Attorneys</h3>
          <div className="credentials-list">
            <div className="credential-item">
              <i className="fas fa-award"></i>
              <span>California Bar Licensed Attorneys</span>
            </div>
            
            <div className="credential-item">
              <i className="fas fa-gavel"></i>
              <span>Specialized in Wildfire Litigation</span>
            </div>
            
            <div className="credential-item">
              <i className="fas fa-star"></i>
              <span>Top 100 Trial Lawyers</span>
            </div>
            
            <div className="credential-item">
              <i className="fas fa-university"></i>
              <span>Members of Consumer Attorneys of California</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection; 