import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/ResourcesPage.css';

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <header className="resources-header">
        <div className="container">
          <h1>Wildfire Recovery Resources</h1>
          <p className="tagline">Practical guidance and support for 2025 California wildfire survivors</p>
        </div>
      </header>

      <section className="resources-intro">
        <div className="container">
          <div className="intro-content">
            <h2>We're Here to Support Your Recovery Journey</h2>
            <p>The aftermath of the Palisades, Eaton, Hurst, Lidia, Sunset, and Kenneth fires can feel overwhelming. Beyond legal representation, we're committed to providing practical resources to help you navigate this challenging time.</p>
            <p>While these resources are helpful, remember that personalized guidance is just a call away. Our team is ready to answer your specific questions and provide tailored support.</p>
            <div className="cta-box">
              <h3>Need immediate assistance with your wildfire claim?</h3>
              <div className="cta-buttons">
                <Link to="/#eligibility-form" className="btn btn-primary">Check your eligibility here →</Link>
                <a href="tel:8005551234" className="btn btn-secondary">📞 Call our specialists now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section" id="immediate-steps">
        <div className="container">
          <div className="resource-content">
            <div className="resource-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <h2>Immediate Post-Wildfire Steps</h2>
            <p className="resource-description">The first days and weeks after a wildfire are critical. Here's what to do right away to protect yourself and strengthen your claim.</p>
            
            <div className="resource-details">
              <div className="step-list">
                <div className="step">
                  <h3>1. Ensure Your Safety First</h3>
                  <p>Do not return to your property until authorities confirm it's safe. Be aware of hazards like hot spots, unstable structures, and contaminated water.</p>
                </div>
                
                <div className="step">
                  <h3>2. Document Everything</h3>
                  <p>Before cleaning up or making repairs, thoroughly document all damage:</p>
                  <ul>
                    <li>Take extensive photos and videos of all damaged areas</li>
                    <li>Make detailed lists of damaged or destroyed items</li>
                    <li>Save all receipts for emergency expenses</li>
                    <li>Keep a journal of all fire-related events and conversations</li>
                  </ul>
                </div>
                
                <div className="step">
                  <h3>3. Contact Your Insurance Company</h3>
                  <p>Report your loss promptly, but don't feel pressured to accept their first offer. Request a complete copy of your policy and all related documents.</p>
                </div>
                
                <div className="step">
                  <h3>4. Secure Your Property</h3>
                  <p>Take reasonable steps to prevent further damage, such as covering broken windows or damaged roofs with tarps. Your insurance typically covers these temporary repairs.</p>
                </div>
                
                <div className="step">
                  <h3>5. Apply for FEMA Assistance</h3>
                  <p>Register with FEMA at <a href="https://www.disasterassistance.gov" target="_blank" rel="noopener noreferrer">DisasterAssistance.gov</a> or call 1-800-621-3362 as soon as possible, even if you have insurance.</p>
                </div>
              </div>
              
              <div className="resource-download">
                <h3>Free Download: Post-Wildfire Checklist</h3>
                <p>Our comprehensive checklist helps you track all necessary steps in the days and weeks following a wildfire.</p>
                <a href="/downloads/post-wildfire-checklist.pdf" className="btn btn-outline">Download PDF Checklist</a>
              </div>
            </div>
            
            <div className="resource-cta">
              <p>Need personalized guidance on your next steps?</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check your eligibility here →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call our specialists now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section" id="assistance-programs">
        <div className="container">
          <div className="resource-content">
            <div className="resource-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h2>California Wildfire Victim Assistance Programs</h2>
            <p className="resource-description">Various government and non-profit organizations offer support specifically for 2025 California wildfire survivors.</p>
            
            <div className="resource-details">
              <div className="program-grid">
                <div className="program-card">
                  <h3>Federal Emergency Management Agency (FEMA)</h3>
                  <p>Provides grants for temporary housing, home repairs, and other disaster-related expenses not covered by insurance.</p>
                  <a href="https://www.fema.gov/disaster/4610" target="_blank" rel="noopener noreferrer" className="program-link">Visit Website →</a>
                </div>
                
                <div className="program-card">
                  <h3>California Office of Emergency Services (Cal OES)</h3>
                  <p>Coordinates state-level disaster response and connects victims with available resources.</p>
                  <a href="https://www.caloes.ca.gov" target="_blank" rel="noopener noreferrer" className="program-link">Visit Website →</a>
                </div>
                
                <div className="program-card">
                  <h3>Small Business Administration (SBA)</h3>
                  <p>Offers low-interest disaster loans to homeowners, renters, businesses, and non-profits.</p>
                  <a href="https://www.sba.gov/disaster-assistance" target="_blank" rel="noopener noreferrer" className="program-link">Visit Website →</a>
                </div>
                
                <div className="program-card">
                  <h3>American Red Cross</h3>
                  <p>Provides emergency shelter, food, supplies, and emotional support for disaster victims.</p>
                  <a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer" className="program-link">Visit Website →</a>
                </div>
                
                <div className="program-card">
                  <h3>California Department of Insurance</h3>
                  <p>Offers assistance with insurance claims and disputes for wildfire victims.</p>
                  <a href="https://www.insurance.ca.gov" target="_blank" rel="noopener noreferrer" className="program-link">Visit Website →</a>
                </div>
                
                <div className="program-card">
                  <h3>United Policyholders</h3>
                  <p>Non-profit organization providing guidance, information, and advocacy for disaster survivors navigating insurance claims.</p>
                  <a href="https://uphelp.org" target="_blank" rel="noopener noreferrer" className="program-link">Visit Website →</a>
                </div>
              </div>
              
              <div className="program-note">
                <p><strong>Note:</strong> Eligibility requirements and available assistance vary by program and disaster declaration. We recommend applying for all programs you may qualify for, as soon as possible after the wildfire.</p>
              </div>
            </div>
            
            <div className="resource-cta">
              <p>Need help navigating these assistance programs?</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check your eligibility here →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call our specialists now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section" id="insurance-guidance">
        <div className="container">
          <div className="resource-content">
            <div className="resource-icon">
              <i className="fas fa-file-contract"></i>
            </div>
            <h2>Insurance Claim Guidance</h2>
            <p className="resource-description">Navigating insurance claims after a wildfire can be complex and frustrating. Here's how to maximize your recovery.</p>
            
            <div className="resource-details">
              <div className="guidance-content">
                <h3>Understanding Your Policy</h3>
                <p>Most homeowner policies include these key coverages:</p>
                <ul>
                  <li><strong>Dwelling Coverage:</strong> Pays to repair/rebuild your home's structure</li>
                  <li><strong>Personal Property Coverage:</strong> Covers belongings inside your home</li>
                  <li><strong>Additional Living Expenses (ALE):</strong> Pays for temporary housing and living costs</li>
                  <li><strong>Other Structures Coverage:</strong> Covers detached garages, sheds, fences</li>
                </ul>
                
                <h3>Common Insurance Challenges</h3>
                <p>Be aware of these frequent issues with wildfire claims:</p>
                <ul>
                  <li><strong>Underinsurance:</strong> Many homes are insured for less than their replacement cost</li>
                  <li><strong>Inventory Requirements:</strong> Insurers often require detailed lists of lost items</li>
                  <li><strong>ALE Limitations:</strong> Coverage for temporary housing may be capped</li>
                  <li><strong>Depreciation Deductions:</strong> Insurers may reduce payouts based on item age</li>
                  <li><strong>Claim Deadlines:</strong> Missing deadlines can result in claim denial</li>
                </ul>
                
                <h3>Tips for Successful Claims</h3>
                <ol>
                  <li>Document all communication with your insurer in writing</li>
                  <li>Create detailed inventory lists with photos, receipts, and estimated values</li>
                  <li>Get independent estimates for repairs/rebuilding</li>
                  <li>Don't rush to accept the first settlement offer</li>
                  <li>Consider hiring a public adjuster for complex claims</li>
                  <li>Be aware of deadlines for supplemental claims</li>
                </ol>
                
                <div className="warning-box">
                  <h4>Important Warning</h4>
                  <p>Insurance companies often pressure victims to settle quickly. Don't sign releases or accept settlements until you fully understand the extent of your damages and coverage. Once you accept a settlement, you may be unable to claim additional damages later.</p>
                </div>
              </div>
              
              <div className="resource-download">
                <h3>Free Download: Insurance Claim Tracker</h3>
                <p>Our comprehensive spreadsheet helps you document all aspects of your insurance claim process.</p>
                <a href="/downloads/insurance-claim-tracker.xlsx" className="btn btn-outline">Download Claim Tracker</a>
              </div>
            </div>
            
            <div className="resource-cta">
              <p>Having trouble with your insurance claim?</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check your eligibility here →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call our specialists now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section" id="mental-health">
        <div className="container">
          <div className="resource-content">
            <div className="resource-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h2>Mental Health & Emotional Support</h2>
            <p className="resource-description">The emotional impact of wildfire loss can be as devastating as the physical damage. Here are resources to support your mental wellbeing.</p>
            
            <div className="resource-details">
              <div className="support-content">
                <h3>Common Emotional Responses</h3>
                <p>It's normal to experience a range of emotions after a wildfire disaster:</p>
                <ul>
                  <li>Shock, disbelief, and numbness</li>
                  <li>Anxiety, fear, and hypervigilance</li>
                  <li>Grief over lost homes, possessions, and community</li>
                  <li>Anger, irritability, and frustration</li>
                  <li>Difficulty concentrating and making decisions</li>
                  <li>Sleep disturbances and fatigue</li>
                  <li>Feelings of helplessness or hopelessness</li>
                </ul>
                
                <h3>Mental Health Resources</h3>
                <div className="support-resources">
                  <div className="support-resource">
                    <h4>Disaster Distress Helpline</h4>
                    <p>24/7 crisis counseling and support for emotional distress related to disasters.</p>
                    <p><strong>Call/Text:</strong> 1-800-985-5990</p>
                  </div>
                  
                  <div className="support-resource">
                    <h4>California HOPE Crisis Counseling</h4>
                    <p>Free outreach and support services for California disaster survivors.</p>
                    <p><strong>Website:</strong> <a href="https://www.calhopeconnect.org" target="_blank" rel="noopener noreferrer">CalHopeConnect.org</a></p>
                  </div>
                  
                  <div className="support-resource">
                    <h4>National Alliance on Mental Illness (NAMI)</h4>
                    <p>Support groups, education, and resources for individuals and families.</p>
                    <p><strong>Helpline:</strong> 1-800-950-NAMI (6264)</p>
                  </div>
                </div>
                
                <h3>Self-Care Strategies</h3>
                <ul>
                  <li>Acknowledge your feelings and allow yourself to grieve</li>
                  <li>Connect with supportive friends, family, and community</li>
                  <li>Establish routines to create a sense of normalcy</li>
                  <li>Take breaks from media coverage of the wildfires</li>
                  <li>Practice stress-reduction techniques like deep breathing and meditation</li>
                  <li>Focus on what you can control in your recovery process</li>
                  <li>Seek professional help if emotional distress persists</li>
                </ul>
              </div>
              
              <div className="quote-box">
                <blockquote>
                  "Recovery is not just about rebuilding structures, but also rebuilding lives. Taking care of your mental health is an essential part of the healing process."
                </blockquote>
                <cite>— Dr. Sarah Johnson, Trauma Specialist</cite>
              </div>
            </div>
            
            <div className="resource-cta">
              <p>Need support with the emotional impact of your wildfire experience?</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check your eligibility here →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call our specialists now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section" id="faq">
        <div className="container">
          <div className="resource-content">
            <div className="resource-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <h2>Wildfire Claims FAQ</h2>
            <p className="resource-description">Answers to common questions about legal rights, compensation eligibility, and the claims process for 2025 California wildfire victims.</p>
            
            <div className="resource-details">
              <div className="faq-list">
                <div className="faq-item">
                  <h3>What compensation can I recover for wildfire losses?</h3>
                  <div className="faq-answer">
                    <p>Depending on your situation, you may be eligible to recover compensation for:</p>
                    <ul>
                      <li>Property damage and destruction</li>
                      <li>Personal belongings and contents</li>
                      <li>Temporary housing and additional living expenses</li>
                      <li>Lost income and business interruption</li>
                      <li>Medical expenses for fire-related injuries</li>
                      <li>Emotional distress and psychological trauma</li>
                      <li>Landscaping and land remediation costs</li>
                      <li>Evacuation expenses</li>
                    </ul>
                  </div>
                </div>
                
                <div className="faq-item">
                  <h3>How long do I have to file a wildfire claim?</h3>
                  <div className="faq-answer">
                    <p>Time limits (statutes of limitations) vary depending on the type of claim:</p>
                    <ul>
                      <li><strong>Insurance claims:</strong> Most policies require notification "as soon as possible" and have specific deadlines for submitting proof of loss (typically 60-180 days)</li>
                      <li><strong>Utility company claims:</strong> Generally 2-3 years from the date of the fire</li>
                      <li><strong>Government entity claims:</strong> As short as 6 months from the date of loss</li>
                    </ul>
                    <p>Because these deadlines can be complex and vary by situation, we strongly recommend consulting with an attorney as soon as possible after a wildfire loss.</p>
                  </div>
                </div>
                
                <div className="faq-item">
                  <h3>What if my insurance doesn't cover all my losses?</h3>
                  <div className="faq-answer">
                    <p>If your insurance is insufficient to cover your losses, you may have additional options:</p>
                    <ul>
                      <li>Claims against utility companies if they caused or contributed to the fire</li>
                      <li>FEMA assistance programs for uninsured losses</li>
                      <li>SBA disaster loans for homeowners and businesses</li>
                      <li>State disaster relief programs</li>
                      <li>Tax deductions for casualty losses</li>
                    </ul>
                    <p>Our attorneys can help identify all potential sources of recovery beyond your insurance.</p>
                  </div>
                </div>
                
                <div className="faq-item">
                  <h3>How does the wildfire claim process work with your firm?</h3>
                  <div className="faq-answer">
                    <ol>
                      <li><strong>Initial Consultation:</strong> We evaluate your case through our eligibility form or phone consultation at no cost</li>
                      <li><strong>Case Investigation:</strong> We gather evidence, document damages, and identify liable parties</li>
                      <li><strong>Claims Filing:</strong> We prepare and submit all necessary claims and documentation</li>
                      <li><strong>Negotiation:</strong> We negotiate with insurance companies and other responsible parties</li>
                      <li><strong>Resolution:</strong> We work to secure fair settlement or proceed to litigation if necessary</li>
                    </ol>
                    <p>Throughout this process, we handle all legal aspects while keeping you informed and involved in key decisions.</p>
                  </div>
                </div>
                
                <div className="faq-item">
                  <h3>What does it cost to hire your firm?</h3>
                  <div className="faq-answer">
                    <p>We work on a contingency fee basis, which means:</p>
                    <ul>
                      <li>No upfront costs or hourly fees</li>
                      <li>We only get paid if we recover compensation for you</li>
                      <li>Our fee is a percentage of the recovery, typically 25-40% depending on case complexity</li>
                      <li>Initial consultations are always free</li>
                    </ul>
                    <p>This fee structure allows fire victims to access quality legal representation regardless of their financial situation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="resource-cta">
              <p>Have more questions about your wildfire claim?</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check your eligibility here →</Link>
              <a href="tel:8005551234" className="btn btn-secondary">📞 Call our specialists now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <h2>Ready to Take the Next Step in Your Recovery?</h2>
          <p>While these resources provide general guidance, every wildfire victim's situation is unique. Our experienced team is ready to provide personalized support tailored to your specific circumstances.</p>
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

export default ResourcesPage; 