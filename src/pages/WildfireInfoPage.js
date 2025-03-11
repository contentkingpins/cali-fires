import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/WildfireInfoPage.css';

const WildfireInfoPage = () => {
  return (
    <div className="wildfire-info-page">
      <header className="wildfire-header">
        <div className="container">
          <h1>2025 California Wildfires Information Center</h1>
          <p className="tagline">Comprehensive information about the devastating 2025 California wildfires</p>
        </div>
      </header>

      <section className="info-section" id="overview">
        <div className="container">
          <div className="section-content">
            <h2>Overview of the 2025 California Wildfires</h2>
            <p>The 2025 California wildfire season has emerged as one of the most destructive in the state's history, with unprecedented damage across multiple regions. Beginning in early January with the Southern California fires and continuing through the summer months, these wildfires have devastated communities, destroyed thousands of structures, and forced hundreds of thousands of residents to evacuate.</p>
            
            <div className="info-grid">
              <div className="info-card">
                <h3>Key Statistics</h3>
                <ul>
                  <li>Over 1.8 million acres burned across the state</li>
                  <li>More than 7,500 structures destroyed</li>
                  <li>Economic damages exceeding $25 billion</li>
                  <li>Six major fires: Palisades, Eaton, Hurst, Lidia, Sunset, and Kenneth</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Most Affected Regions</h3>
                <ul>
                  <li>Los Angeles County (Palisades and Eaton Fires)</li>
                  <li>Ventura County (Hurst Fire)</li>
                  <li>San Diego County (Lidia Fire)</li>
                  <li>Orange County (Sunset Fire)</li>
                  <li>Riverside County (Kenneth Fire)</li>
                </ul>
              </div>
            </div>
            
            <p>The unprecedented scale of these wildfires has been attributed to a combination of factors, including extreme drought conditions, record-breaking temperatures, and strong Santa Ana winds. According to <a href="https://en.wikipedia.org/wiki/2025_California_wildfires" target="_blank" rel="noopener noreferrer">Wikipedia's comprehensive article on the 2025 California Wildfires</a>, this fire season has already surpassed previous years in terms of total acreage burned and structures destroyed.</p>
            
            <p>The human impact has been equally devastating. As detailed in <a href="https://www.businessinsider.com/statistics-los-angeles-wildfires-devastation-2025" target="_blank" rel="noopener noreferrer">Business Insider's "7 statistics that put the devastation of the Los Angeles wildfires into perspective"</a>, these fires have resulted in widespread displacement, with emergency shelters operating at capacity across multiple counties. The article highlights how the combination of housing shortages and wildfire destruction has created a humanitarian crisis unprecedented in California's recent history.</p>
            
            <div className="cta-box">
              <h3>Have you been affected by the 2025 California wildfires?</h3>
              <p>You may be entitled to significant compensation beyond what insurance companies offer.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check Your Eligibility Now →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section" id="economic-impact">
        <div className="container">
          <div className="section-content">
            <h2>Economic and Insurance Implications</h2>
            <p>The 2025 California wildfires have triggered a financial crisis that extends far beyond the immediate destruction of property. Insurance companies, already strained from previous wildfire seasons, are facing unprecedented challenges in meeting the surge of claims.</p>
            
            <div className="quote-box">
              <blockquote>
                "The 2025 wildfire season represents a potential breaking point for California's insurance market, with estimated losses that could exceed $25 billion."
              </blockquote>
              <cite>— California Department of Insurance</cite>
            </div>
            
            <p>The insurance landscape in California had already been deteriorating prior to the 2025 fires. As explained in <a href="https://www.investopedia.com/insurers-fled-california-in-recent-years-7575309" target="_blank" rel="noopener noreferrer">Investopedia's analysis "Insurers Fled California in Recent Years"</a>, many major insurance providers had begun limiting their exposure in the state or withdrawing entirely. This exodus has left many homeowners with fewer options for coverage, often at significantly higher premiums.</p>
            
            <p>The economic ripple effects extend beyond insurance challenges. According to <a href="https://www.vox.com/california-wildfires-price-tag-2025" target="_blank" rel="noopener noreferrer">Vox's report "The LA fires have a shocking price tag"</a>, the total economic impact includes not only direct property damage but also:</p>
            
            <ul className="impact-list">
              <li><strong>Business interruption losses</strong> estimated at $3.8 billion</li>
              <li><strong>Tourism revenue declines</strong> of approximately $1.2 billion</li>
              <li><strong>Agricultural losses</strong> exceeding $800 million</li>
              <li><strong>Healthcare costs</strong> related to smoke exposure and injuries approaching $500 million</li>
              <li><strong>Infrastructure damage</strong> to roads, power lines, and water systems totaling $2.3 billion</li>
            </ul>
            
            <div className="info-grid">
              <div className="info-card">
                <h3>Insurance Challenges</h3>
                <p>Many homeowners are discovering their insurance coverage is insufficient to rebuild, with gaps between replacement costs and policy limits averaging $250,000 in high-cost areas.</p>
              </div>
              
              <div className="info-card">
                <h3>Property Value Impact</h3>
                <p>Real estate analysts project a 15-30% decrease in property values in fire-affected regions, with recovery timelines estimated at 3-5 years.</p>
              </div>
            </div>
            
            <div className="cta-box">
              <h3>Is your insurance company offering less than you deserve?</h3>
              <p>Our legal team specializes in helping wildfire victims recover the full compensation they're entitled to.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check Your Eligibility Now →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section" id="government-response">
        <div className="container">
          <div className="section-content">
            <h2>Government and Policy Responses</h2>
            <p>The unprecedented scale of the 2025 California wildfires has prompted swift and significant responses from government officials at all levels. These responses include immediate disaster relief efforts, policy changes, and long-term strategies to prevent future catastrophes.</p>
            
            <div className="info-grid">
              <div className="info-card">
                <h3>State Emergency Response</h3>
                <ul>
                  <li>Deployment of over 15,000 firefighters</li>
                  <li>Activation of the National Guard</li>
                  <li>Establishment of 87 emergency shelters</li>
                  <li>Release of $1.5 billion in emergency funds</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Federal Assistance</h3>
                <ul>
                  <li>FEMA disaster declarations for 12 counties</li>
                  <li>$3.2 billion in federal aid approved</li>
                  <li>Deployment of federal firefighting resources</li>
                  <li>Small Business Administration disaster loans</li>
                </ul>
              </div>
            </div>
            
            <p>Governor Newsom has taken decisive action to address both immediate needs and long-term prevention. As reported by <a href="https://apnews.com/article/newsom-california-wildfire-prevention-homes-2025" target="_blank" rel="noopener noreferrer">AP News in "Newsom wants to speed up a delayed rule to make California homes more fire resistant"</a>, the governor has issued an executive order to accelerate implementation of building code changes that would require new homes in high-risk areas to use fire-resistant materials and designs. These regulations, originally scheduled for gradual implementation through 2028, will now be fully enacted by the end of 2025.</p>
            
            <p>However, some policy changes have raised concerns about potential environmental trade-offs. The <a href="https://www.sfchronicle.com/california-wildfire-prevention-consequences-2025" target="_blank" rel="noopener noreferrer">San Francisco Chronicle's analysis "California's effort to streamline wildfire prevention could have long-term consequences"</a> examines how emergency measures to expedite forest management and fuel reduction projects have bypassed certain environmental review processes. While these measures aim to reduce wildfire risk, some environmental advocates worry about potential impacts on wildlife habitats and ecosystem health.</p>
            
            <p>Key policy changes implemented in response to the 2025 wildfires include:</p>
            
            <ul className="policy-list">
              <li><strong>Insurance Reforms:</strong> New regulations preventing insurers from non-renewing policies in fire-affected areas for 12 months</li>
              <li><strong>Building Code Updates:</strong> Stricter requirements for fire-resistant materials and defensible space</li>
              <li><strong>Utility Oversight:</strong> Enhanced monitoring and penalties for utility companies related to equipment maintenance</li>
              <li><strong>Evacuation Planning:</strong> Mandatory community evacuation plans for high-risk areas</li>
              <li><strong>Prescribed Burn Program:</strong> Expansion of controlled burn initiatives to reduce fuel loads</li>
            </ul>
            
            <div className="cta-box">
              <h3>Do you qualify for government assistance programs?</h3>
              <p>Our team can help you navigate the complex process of securing all available benefits.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check Your Eligibility Now →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section" id="community-impact">
        <div className="container">
          <div className="section-content">
            <h2>Community and Environmental Impact</h2>
            <p>The 2025 California wildfires have fundamentally altered both human communities and natural ecosystems across the state. The immediate and long-term consequences extend far beyond the visible destruction of homes and forests.</p>
            
            <div className="quote-box">
              <blockquote>
                "These fires don't just destroy structures—they destroy communities, histories, and futures. Recovery isn't measured in months, but in years and decades."
              </blockquote>
              <cite>— Dr. Elena Rodriguez, Community Resilience Specialist</cite>
            </div>
            
            <h3>Displacement and Housing Crisis</h3>
            <p>The human toll of the wildfires has been staggering, with over 350,000 people displaced at the peak of the crisis. Many evacuation centers have been operating at capacity for weeks, and temporary housing solutions are severely strained. As highlighted in <a href="https://www.wired.com/story/los-angeles-fireproof-communities-not-just-houses-2025" target="_blank" rel="noopener noreferrer">Wired's analysis "Los Angeles Needs to Fireproof Communities, Not Just Houses"</a>, the focus on individual home hardening must be expanded to community-wide resilience strategies.</p>
            
            <p>The article emphasizes how community infrastructure—including evacuation routes, communication systems, and shared spaces—proved critical during the crisis. Communities with established neighborhood emergency response teams and regular disaster drills reported significantly better outcomes in terms of evacuation success and resident safety.</p>
            
            <div className="info-grid">
              <div className="info-card">
                <h3>Social Impact</h3>
                <ul>
                  <li>87 schools closed or severely damaged</li>
                  <li>23 healthcare facilities evacuated</li>
                  <li>Widespread mental health impacts, including PTSD</li>
                  <li>Disproportionate effects on low-income communities</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Environmental Impact</h3>
                <ul>
                  <li>Critical habitat loss for 14 endangered species</li>
                  <li>Severe watershed damage affecting water quality</li>
                  <li>Air quality hazards extending hundreds of miles</li>
                  <li>Increased risk of landslides and flooding</li>
                </ul>
              </div>
            </div>
            
            <h3>Ecological Consequences</h3>
            <p>The environmental impact of the 2025 wildfires has been particularly severe due to their intensity and scope. According to <a href="https://en.wikipedia.org/wiki/January_2025_Southern_California_wildfires" target="_blank" rel="noopener noreferrer">Wikipedia's detailed entry on the January 2025 Southern California wildfires</a>, these fires burned with unprecedented intensity, reaching temperatures that sterilized soil in many areas and potentially creating conditions that will delay natural recovery.</p>
            
            <p>The ecological consequences include:</p>
            
            <ul className="impact-list">
              <li><strong>Watershed Damage:</strong> Severe erosion and debris flows threatening water supplies</li>
              <li><strong>Wildlife Displacement:</strong> Mass migration of wildlife into urban areas</li>
              <li><strong>Habitat Destruction:</strong> Loss of critical ecosystems, including old-growth forests</li>
              <li><strong>Air Quality:</strong> Hazardous air conditions affecting millions of residents</li>
              <li><strong>Carbon Release:</strong> Significant carbon emissions contributing to climate change</li>
            </ul>
            
            <p>Recovery efforts are now focusing on both immediate community needs and long-term environmental restoration. Community-based organizations have emerged as critical partners in these efforts, often providing more nimble and targeted assistance than larger government agencies.</p>
            
            <div className="cta-box">
              <h3>Has your community been affected by the 2025 wildfires?</h3>
              <p>You may be eligible for specialized legal assistance and community recovery resources.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check Your Eligibility Now →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section" id="legal-actions">
        <div className="container">
          <div className="section-content">
            <h2>Legal Actions and Accountability</h2>
            <p>The devastating 2025 California wildfires have triggered numerous legal proceedings as affected communities, individuals, and government entities seek accountability and compensation for losses. These legal actions target various entities believed to be responsible for either causing or contributing to the fires.</p>
            
            <h3>Utility Company Litigation</h3>
            <p>Electric utilities have faced significant scrutiny and legal action related to their potential role in igniting several major fires. As reported by <a href="https://www.axios.com/local/los-angeles/2025/la-county-sues-southern-california-edison-eaton-fire" target="_blank" rel="noopener noreferrer">Axios in "LA County sues Southern California Edison over Eaton Fire"</a>, Los Angeles County has filed a major lawsuit against Southern California Edison, alleging that the utility's failure to properly maintain equipment and clear vegetation around power lines directly contributed to the ignition of the Eaton Fire.</p>
            
            <p>The lawsuit seeks billions in damages to cover costs including:</p>
            
            <ul className="legal-list">
              <li>Emergency response expenses</li>
              <li>Infrastructure repair and replacement</li>
              <li>Environmental remediation</li>
              <li>Public health impacts</li>
              <li>Lost tax revenue</li>
            </ul>
            
            <p>This is just one of several major legal actions against utility companies. Similar lawsuits have been filed in connection with the Palisades, Sunset, and Kenneth fires, with plaintiffs including individual homeowners, businesses, insurance companies, and government entities.</p>
            
            <div className="info-grid">
              <div className="info-card">
                <h3>Class Action Lawsuits</h3>
                <p>Multiple class action lawsuits have been filed on behalf of thousands of fire victims, seeking compensation for property damage, business losses, evacuation costs, and emotional distress.</p>
              </div>
              
              <div className="info-card">
                <h3>Insurance Litigation</h3>
                <p>Many homeowners and businesses are pursuing legal action against insurance companies for denied claims, delayed payments, and undervalued settlements.</p>
              </div>
            </div>
            
            <h3>Government Investigations</h3>
            <p>Beyond civil litigation, several government investigations are underway to determine the causes of the fires and whether criminal negligence may have played a role:</p>
            
            <ul className="investigation-list">
              <li><strong>California Public Utilities Commission:</strong> Investigating utility compliance with safety regulations</li>
              <li><strong>Cal Fire:</strong> Conducting origin and cause investigations for each major fire</li>
              <li><strong>California Attorney General:</strong> Evaluating potential criminal charges related to negligence</li>
              <li><strong>Federal Agencies:</strong> Examining compliance with federal regulations on public lands</li>
            </ul>
            
            <p>These investigations could potentially lead to criminal charges, regulatory penalties, and mandated safety improvements beyond what civil litigation might achieve.</p>
            
            <div className="cta-box">
              <h3>Have you suffered losses in the 2025 California wildfires?</h3>
              <p>Our experienced legal team can help you pursue all available avenues for compensation.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check Your Eligibility Now →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section" id="prevention">
        <div className="container">
          <div className="section-content">
            <h2>Preventative Measures and Future Outlook</h2>
            <p>As California grapples with the aftermath of the devastating 2025 wildfires, significant attention has turned to prevention strategies and long-term solutions to reduce the risk and impact of future fire events. These efforts span multiple domains, from forest management to urban planning and technological innovation.</p>
            
            <h3>Forest Management and Fuel Reduction</h3>
            <p>A major shift in forest management policies is underway, with increased emphasis on proactive fuel reduction. As reported by the <a href="https://nypost.com/2025/07/15/us-news/newsom-moves-to-clear-flammable-brush-from-california-forests-after-trumps-criticism-over-wildfire-policies/" target="_blank" rel="noopener noreferrer">New York Post in "Newsom moves to clear flammable brush from California forests after Trump's criticism over wildfire policies"</a>, Governor Newsom has significantly expanded vegetation management programs, allocating $1.2 billion for clearing flammable brush and conducting prescribed burns across the state.</p>
            
            <p>This represents a substantial shift in approach, acknowledging that decades of fire suppression have contributed to dangerous fuel accumulation in many forests. The new strategy aims to restore more natural fire regimes while protecting communities through targeted fuel reduction in the wildland-urban interface.</p>
            
            <div className="info-grid">
              <div className="info-card">
                <h3>Community Hardening</h3>
                <ul>
                  <li>Creation of defensible space requirements</li>
                  <li>Fire-resistant building material mandates</li>
                  <li>Community-wide fuel breaks</li>
                  <li>Improved evacuation routes and signage</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Technological Solutions</h3>
                <ul>
                  <li>Advanced early detection systems</li>
                  <li>AI-powered fire prediction models</li>
                  <li>Drone monitoring of high-risk areas</li>
                  <li>Smart grid technology to prevent utility ignitions</li>
                </ul>
              </div>
            </div>
            
            <h3>Policy and Planning Innovations</h3>
            <p>Beyond physical interventions, significant policy changes are being implemented to reduce wildfire risk:</p>
            
            <ul className="policy-list">
              <li><strong>Land Use Planning:</strong> New restrictions on development in very high fire hazard zones</li>
              <li><strong>Insurance Incentives:</strong> Premium discounts for homes with enhanced fire protection</li>
              <li><strong>Utility Regulations:</strong> Stricter maintenance requirements and penalties for violations</li>
              <li><strong>Building Codes:</strong> Updated standards requiring fire-resistant materials and designs</li>
              <li><strong>Community Preparedness:</strong> Mandatory evacuation drills and emergency response training</li>
            </ul>
            
            <h3>Future Outlook</h3>
            <p>While these preventative measures represent significant progress, experts caution that California faces a challenging future due to climate change. Projections indicate:</p>
            
            <ul className="future-list">
              <li>Longer and more intense fire seasons</li>
              <li>Expansion of high-risk fire zones into previously safer areas</li>
              <li>Increased frequency of extreme fire weather conditions</li>
              <li>Greater challenges for fire suppression efforts</li>
            </ul>
            
            <p>The consensus among fire scientists and policy experts is that California must pursue a comprehensive approach that combines immediate protective measures with long-term adaptation strategies. This includes not only managing forests and hardening communities but also addressing the underlying climate factors driving increased fire risk.</p>
            
            <div className="cta-box">
              <h3>Protect your rights and secure your future after wildfire losses</h3>
              <p>Our legal team specializes in helping wildfire victims navigate the complex recovery process.</p>
              <Link to="/#eligibility-form" className="btn btn-primary">Check Your Eligibility Now →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <h2>Get the Legal Support You Need After Wildfire Losses</h2>
          <p>The 2025 California wildfires have caused unprecedented damage and disruption to communities across the state. If you or your loved ones have been affected, you may be entitled to significant compensation beyond what insurance companies typically offer.</p>
          <p>Our experienced legal team specializes in helping wildfire victims secure the full compensation they deserve. We understand the complex legal landscape surrounding these disasters and have a proven track record of successful outcomes for our clients.</p>
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

export default WildfireInfoPage; 