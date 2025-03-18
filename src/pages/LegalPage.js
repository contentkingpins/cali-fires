import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/LegalPage.css';

const LegalPage = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Determine which section to show based on the URL path
  const getActiveSectionId = () => {
    switch (path) {
      case '/privacy':
        return 'privacy-policy';
      case '/terms':
        return 'terms-of-service';
      case '/disclaimer':
        return 'disclaimer';
      default:
        return 'privacy-policy';
    }
  };
  
  // Scroll to the appropriate section when the component mounts or path changes
  useEffect(() => {
    const sectionId = getActiveSectionId();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [path]);
  
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container">
          <h1>Legal Information</h1>
          <p className="tagline">Important information about our services and your rights</p>
        </div>
      </header>

      <section className="legal-section" id="privacy-policy">
        <div className="container">
          <div className="legal-content">
            <h2>Privacy Policy</h2>
            <div className="last-updated">Last Updated: March 2025</div>
            
            <h3>1. Introduction</h3>
            <p>California Wildfire Claims ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            
            <h3>2. Information We Collect</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Complete our eligibility form</li>
              <li>Contact us through our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
            </ul>
            <p>The personal information we collect may include:</p>
            <ul>
              <li>Name, email address, phone number, and mailing address</li>
              <li>Information about your wildfire claim</li>
              <li>Any other information you choose to provide</li>
            </ul>
            
            <h3>3. How We Use Your Information</h3>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process and evaluate your eligibility for legal representation</li>
              <li>Communicate with you about your case or inquiry</li>
              <li>Send you updates, newsletters, and marketing communications</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
            
            <h3>4. Sharing Your Information</h3>
            <p>We may share your information with:</p>
            <ul>
              <li>Our attorneys and staff who need access to provide services</li>
              <li>Third-party service providers who assist us in operating our website and conducting our business</li>
              <li>Legal and regulatory authorities, as required by applicable laws</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
            
            <h3>5. California Privacy Rights</h3>
            <p>Under the California Consumer Privacy Act (CCPA), California residents have specific rights regarding their personal information. You have the right to:</p>
            <ul>
              <li>Know what personal information we collect about you</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of the sale of your personal information</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            
            <h3>6. Contact Us</h3>
            <p>If you have questions or concerns about this Privacy Policy, please contact us through our eligibility form on the homepage.</p>
            <p>We're committed to protecting your privacy and will respond to inquiries in a timely manner.</p>
          </div>
        </div>
      </section>

      <section className="legal-section" id="terms-of-service">
        <div className="container">
          <div className="legal-content">
            <h2>Terms of Service</h2>
            <div className="last-updated">Last Updated: March 2025</div>
            
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            
            <h3>2. Use License</h3>
            <p>Permission is granted to temporarily view the materials on our website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on our website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            
            <h3>3. Disclaimer</h3>
            <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h3>4. Limitations</h3>
            <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            
            <h3>5. Revisions and Errata</h3>
            <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.</p>
            
            <h3>6. Links</h3>
            <p>We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.</p>
            
            <h3>7. Modifications</h3>
            <p>We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
          </div>
        </div>
      </section>

      <section className="legal-section" id="disclaimer">
        <div className="container">
          <div className="legal-content">
            <h2>Legal Disclaimer</h2>
            <div className="last-updated">Last Updated: March 2025</div>
            
            <h3>Attorney Advertising</h3>
            <p>This website is for informational purposes only and should not be considered legal advice. The information provided on this website is not intended to create, and receipt or viewing of this information does not constitute, an attorney-client relationship.</p>
            
            <h3>No Guarantee of Results</h3>
            <p>Every case is different, and the outcomes of previous cases do not guarantee or predict a similar result in any future case undertaken by our firm. The testimonials or endorsements on this website do not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter.</p>
            
            <h3>No Attorney-Client Relationship</h3>
            <p>Submitting information through our website, including through our eligibility form, does not create an attorney-client relationship. An attorney-client relationship is only formed after you have signed a written agreement with our firm.</p>
            
            <h3>Jurisdictional Limitations</h3>
            <p>Our attorneys are licensed to practice law in California. We do not seek to represent anyone in states where this website does not comply with applicable laws and ethical rules.</p>
            
            <h3>Accuracy of Information</h3>
            <p>While we strive to provide accurate and up-to-date information on our website, we make no representations or warranties about the accuracy or completeness of the information provided. Legal information changes rapidly, and this information may not reflect the most current legal developments.</p>
            
            <h3>External Links</h3>
            <p>Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy of information on these websites.</p>
            
            <h3>Contact Information</h3>
            <p>If you have any questions about this disclaimer, please contact us through our eligibility form on the homepage.</p>
            <p>Our team is ready to assist you with any inquiries regarding our legal policies and services.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalPage; 