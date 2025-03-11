import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <div className="container">
          <h1>Our Wildfire Legal Services</h1>
          <p className="tagline">Comprehensive legal support for victims of the 2025 California wildfires</p>
        </div>
      </header>

      <section className="services-intro">
        <div className="container">
          <div className="intro-content">
            <h2>How We Can Help You Recover</h2>
            <p>The 2025 California wildfires—including the Palisades, Eaton, Hurst, Lidia, Sunset, and Kenneth fires—have caused unprecedented damage to homes, businesses, and lives. Our specialized legal team is dedicated to helping victims navigate the complex process of securing fair compensation.</p>
            <p>We understand that each case is unique, which is why we offer personalized legal services tailored to your specific situation and needs.</p>
            <div className="cta-box">
              <h3>Don't face this alone. We're here to help.</h3>
              <div className="cta-buttons">
                <Link to="/#eligibility-form" className="btn btn-primary">Fill out our quick eligibility form →</Link>
                <a href="tel:8005551234" className="btn btn-secondary">📞 Call our wildfire claim specialists now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="property-damage">
        <div className="container">
          <div className="service-content">
            <div className="service-icon">
              <i className="fas fa-home"></i>
            </div>
            <h2>Property Damage Claims</h2>
            <p className="service-description">We help homeowners and property owners recover the full value of their losses, going beyond what insurance typically offers.</p>
            
            <div className="service-details">
              <h3>What We Handle:</h3>
              <ul>
                <li><strong>Total Loss Claims:</strong> When your home or property has been completely destroyed</li>
                <li><strong>Partial Damage Claims:</strong> For smoke, ash, or fire damage to structures</li>
                <li><strong>Land Remediation:</strong> Addressing soil contamination and erosion issues</li>
                <li><strong>Personal Property Loss:</strong> Compensation for furniture, clothing, vehicles, and other possessions</li>
                <li><strong>Landscaping Damage:</strong> Recovery for destroyed trees, gardens, and outdoor features</li>
              </ul>
              
              <h3>Our Approach:</h3>
              <p>We work with expert property appraisers, contractors, and environmental specialists to accurately document and value your losses. Our attorneys then aggressively negotiate with insurance companies and pursue claims against responsible parties to maximize your recovery.</p>
              
              <div className="success-story">
                <h4>Success Story:</h4>
                <p>"After my insurance offered only $350,000 for my completely destroyed home, this firm helped me recover over $1.2 million—enough to actually rebuild." — Robert T., Wildfire Survivor</p>
              </div>
            </div>
            
            <div className="service-cta">
              <p>Time is limited to file your property damage claim. Don't delay.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Fill out our quick eligibility form to see if you qualify →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call our wildfire claim specialists directly now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="personal-injury">
        <div className="container">
          <div className="service-content">
            <div className="service-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h2>Personal Injury Representation</h2>
            <p className="service-description">Wildfires can cause serious health issues, from smoke inhalation to severe burns and emotional trauma.</p>
            
            <div className="service-details">
              <h3>What We Handle:</h3>
              <ul>
                <li><strong>Burn Injuries:</strong> Compensation for medical treatment, rehabilitation, and scarring</li>
                <li><strong>Respiratory Damage:</strong> Claims for smoke inhalation and long-term breathing issues</li>
                <li><strong>Evacuation Injuries:</strong> Injuries sustained while fleeing the fires</li>
                <li><strong>Emotional Trauma:</strong> PTSD, anxiety, and other psychological impacts</li>
                <li><strong>Wrongful Death:</strong> Compassionate representation for families who lost loved ones</li>
              </ul>
              
              <h3>Our Approach:</h3>
              <p>Our personal injury team works closely with medical experts to document your injuries and project future care needs. We fight to secure compensation not just for current medical bills, but for ongoing treatment, pain and suffering, and diminished quality of life.</p>
              
              <div className="success-story">
                <h4>Success Story:</h4>
                <p>"The smoke inhalation I suffered led to chronic respiratory issues. This firm secured a settlement that covers all my ongoing medical care." — Maria L., Palisades Fire Survivor</p>
              </div>
            </div>
            
            <div className="service-cta">
              <p>Your health deserves proper compensation. Let us help you.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Fill out our quick eligibility form to see if you qualify →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call our wildfire claim specialists directly now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="lost-income">
        <div className="container">
          <div className="service-content">
            <div className="service-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h2>Lost Income Recovery</h2>
            <p className="service-description">When wildfires disrupt your ability to work and earn a living, you deserve compensation for those losses.</p>
            
            <div className="service-details">
              <h3>What We Handle:</h3>
              <ul>
                <li><strong>Lost Wages:</strong> Compensation for missed work during evacuation and recovery</li>
                <li><strong>Reduced Earning Capacity:</strong> Claims for long-term income impacts due to injury</li>
                <li><strong>Job Loss:</strong> Recovery when your workplace was destroyed</li>
                <li><strong>Self-Employment Losses:</strong> Specialized claims for freelancers and independent contractors</li>
                <li><strong>Benefits Replacement:</strong> Recovery for lost healthcare and retirement benefits</li>
              </ul>
              
              <h3>Our Approach:</h3>
              <p>We work with economic experts and vocational specialists to accurately calculate your past and future income losses. Our team develops comprehensive claims that account for all aspects of your financial setbacks, from immediate wage losses to long-term career impacts.</p>
              
              <div className="success-story">
                <h4>Success Story:</h4>
                <p>"When my home office burned down, I lost my ability to work for months. This firm helped me recover not just property damages, but all my lost freelance income." — David K., Kenneth Fire Survivor</p>
              </div>
            </div>
            
            <div className="service-cta">
              <p>Don't let lost income add financial stress to your wildfire recovery.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Fill out our quick eligibility form to see if you qualify →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call our wildfire claim specialists directly now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="business-interruption">
        <div className="container">
          <div className="service-content">
            <div className="service-icon">
              <i className="fas fa-store"></i>
            </div>
            <h2>Business Interruption Claims</h2>
            <p className="service-description">Business owners face unique challenges after wildfires, from physical damage to extended closures and customer loss.</p>
            
            <div className="service-details">
              <h3>What We Handle:</h3>
              <ul>
                <li><strong>Revenue Losses:</strong> Compensation for income lost during closure and recovery</li>
                <li><strong>Physical Business Damage:</strong> Claims for buildings, equipment, inventory, and supplies</li>
                <li><strong>Supply Chain Disruptions:</strong> Recovery for impacts to your business operations</li>
                <li><strong>Customer Base Loss:</strong> Compensation for long-term business impacts</li>
                <li><strong>Employee Retention Costs:</strong> Help with expenses to maintain your workforce</li>
              </ul>
              
              <h3>Our Approach:</h3>
              <p>Our business claims team includes attorneys with business and accounting backgrounds who understand the complex financial impacts of disaster on your enterprise. We work with forensic accountants to document all aspects of your business losses and fight for comprehensive recovery.</p>
              
              <div className="success-story">
                <h4>Success Story:</h4>
                <p>"My restaurant was closed for 4 months after the fire. This firm helped me recover not just property damage, but all my lost profits and the costs of retaining my staff." — Jennifer R., Sunset Fire Business Owner</p>
              </div>
            </div>
            
            <div className="service-cta">
              <p>Your business deserves to recover fully from wildfire impacts.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Fill out our quick eligibility form to see if you qualify →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call our wildfire claim specialists directly now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="insurance-disputes">
        <div className="container">
          <div className="service-content">
            <div className="service-icon">
              <i className="fas fa-file-contract"></i>
            </div>
            <h2>Insurance Claim Dispute Resolution</h2>
            <p className="service-description">When insurance companies delay, deny, or undervalue your legitimate wildfire claim, we fight back.</p>
            
            <div className="service-details">
              <h3>What We Handle:</h3>
              <ul>
                <li><strong>Claim Denials:</strong> Fighting back when insurers wrongfully reject your claim</li>
                <li><strong>Undervalued Settlements:</strong> Challenging lowball offers that don't cover your losses</li>
                <li><strong>Delayed Processing:</strong> Holding insurers accountable for unreasonable delays</li>
                <li><strong>Bad Faith Claims:</strong> Additional compensation when insurers act improperly</li>
                <li><strong>Policy Interpretation:</strong> Ensuring all coverage provisions are properly applied</li>
              </ul>
              
              <h3>Our Approach:</h3>
              <p>Our attorneys have extensive experience with insurance law and know the tactics insurers use to minimize payouts. We meticulously document your losses, identify all applicable coverage, and aggressively advocate for your rights—including filing bad faith claims when insurers act improperly.</p>
              
              <div className="success-story">
                <h4>Success Story:</h4>
                <p>"My insurer claimed smoke damage wasn't covered under my policy. This firm not only got them to pay for all repairs but secured additional compensation for their improper denial." — Thomas B., Eaton Fire Survivor</p>
              </div>
            </div>
            
            <div className="service-cta">
              <p>Don't accept an unfair insurance settlement. Let us fight for what you deserve.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Fill out our quick eligibility form to see if you qualify →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call our wildfire claim specialists directly now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <h2>Ready to Take the First Step Toward Recovery?</h2>
          <p>The 2025 California wildfires have caused immense suffering, but you don't have to face the aftermath alone. Our experienced legal team is ready to help you navigate the complex process of securing fair compensation for all your losses.</p>
          <p>The consultation is free, and you pay nothing unless we win your case.</p>
          <div className="final-cta-buttons">
            <Link to="/#eligibility-form" className="btn btn-primary btn-xl">Check Your Eligibility Now →</Link>
            <a href="tel:8005551234" className="btn btn-secondary btn-xl">📞 Call Now for Immediate Assistance</a>
          </div>
          <p className="final-note">Time limits apply to wildfire claims. Don't wait to get the help you deserve.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage; 