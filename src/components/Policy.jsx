import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiShieldCheck, HiEye, HiLockClosed, HiDocumentText } from 'react-icons/hi';
import './Policy.css';

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        {/* Header */}
        <header className="privacy-header">
          <Link to="/" className="back-link">
            <HiArrowLeft /> Back to Quotify
          </Link>
          <div className="privacy-title">
            <HiDocumentText className="privacy-icon" />
            <h1>Privacy Policy</h1>
          </div>
          <p className="privacy-subtitle">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </header>

        {/* Main Content */}
        <main className="privacy-content">
          <section className="policy-section">
            <h2><HiShieldCheck /> Introduction</h2>
            <p>
              Welcome to Quotify ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and mobile application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Quotify.
            </p>
            <p>
              By using Quotify, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
            </p>
          </section>

          <section className="policy-section">
            <h2><HiEye /> Information We Collect</h2>
            
            <p><strong>Currently, Quotify does not collect any personal information from users or devices.</strong></p>
            
            <p>As of now, our service operates without collecting:</p>
            <ul>
              <li>Personal information (names, email addresses, etc.)</li>
              <li>Device information (device type, operating system, browser type)</li>
              <li>Usage patterns or analytics data</li>
              <li>IP addresses or location information</li>
              <li>Quote generation preferences or interactions</li>
            </ul>

            <p>All quote generation and customization happens locally in your browser, and no data is transmitted to our servers or stored by us.</p>

            <h3>Future Data Collection</h3>
            <p>If we decide to implement data collection features in the future (such as user accounts, analytics, or personalized experiences), we will:</p>
            <ul>
              <li>Update this Privacy Policy with detailed information about what we collect</li>
              <li>Provide clear opt-in mechanisms for users</li>
              <li>Explain how the data will be used and protected</li>
              <li>Give users control over their data</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2><HiLockClosed /> How We Use Your Information</h2>
            <p><strong>Currently, Quotify does not collect or use any personal information from users.</strong></p>
            
            <p>Since we don't collect any data, there is no information to use, store, or process. All quote generation and customization features work entirely within your browser without any data transmission to our servers.</p>

            <h3>Future Data Usage</h3>
            <p>If we implement data collection in the future, we may use the information for:</p>
            <ul>
              <li><strong>Service Provision:</strong> To provide and maintain Quotify's functionality</li>
              <li><strong>Personalization:</strong> To customize your experience and suggest relevant quotes</li>
              <li><strong>Improvement:</strong> To analyze usage patterns and improve our service</li>
              <li><strong>Communication:</strong> To respond to your inquiries and provide support</li>
              <li><strong>Security:</strong> To protect against fraud and ensure service security</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Information Sharing and Disclosure</h2>
            <p><strong>Currently, Quotify does not collect any personal information, so there is no information to share or disclose.</strong></p>
            
            <p>Since all quote generation and customization happens locally in your browser without any data collection, we cannot and do not share any user information with third parties.</p>

            <h3>Future Information Sharing</h3>
            <p>If we implement data collection in the future, we will not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our service</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user information may be transferred</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Data Security</h2>
            <p><strong>Currently, Quotify does not collect or store any personal information, so there is no data to secure.</strong></p>
            
            <p>Since all quote generation and customization happens locally in your browser without any data transmission to our servers, your privacy is inherently protected. No personal information is stored on our servers or transmitted over the internet.</p>

            <h3>Future Data Security</h3>
            <p>If we implement data collection in the future, we will implement appropriate security measures to protect your personal information:</p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure hosting and infrastructure</li>
            </ul>
            <p>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="policy-section">
            <h2>Your Rights and Choices</h2>
            <p><strong>Currently, Quotify does not collect any personal information, so there are no data rights to exercise.</strong></p>
            
            <p>Since we don't collect or store any personal information, you don't need to worry about data access, correction, deletion, or portability rights. Your privacy is protected by default.</p>

            <h3>Future Rights and Choices</h3>
            <p>If we implement data collection in the future, you will have certain rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of certain data collection and use</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided below.</p>
          </section>

          <section className="policy-section">
            <h2>Cookies and Tracking Technologies</h2>
            <p><strong>Currently, Quotify does not use cookies or any tracking technologies.</strong></p>
            
            <p>Since we don't collect any user data or analytics, we don't need to use cookies or tracking technologies. Your browsing experience is completely private and untracked.</p>

            <h3>Future Cookie Usage</h3>
            <p>If we implement data collection in the future, we may use cookies and similar tracking technologies to enhance your experience:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how you use our service</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p>You can control cookie settings through your browser preferences.</p>
          </section>

          <section className="policy-section">
            <h2>Third-Party Services</h2>
            <p><strong>Currently, Quotify does not integrate with any third-party services that collect user data.</strong></p>
            
            <p>Since we don't collect any personal information or use analytics, we don't need to integrate with third-party services for data collection purposes.</p>

            <h3>Future Third-Party Integrations</h3>
            <p>If we implement data collection in the future, Quotify may integrate with third-party services for:</p>
            <ul>
              <li>Analytics and performance monitoring</li>
              <li>Social media sharing features</li>
              <li>Payment processing (if applicable)</li>
            </ul>
            <p>These services would have their own privacy policies, and we would encourage you to review them.</p>
          </section>

          <section className="policy-section">
            <h2>Children's Privacy</h2>
            <p><strong>Currently, Quotify does not collect any personal information from users of any age, including children.</strong></p>
            
            <p>Since we don't collect any personal information, there are no special concerns regarding children's privacy. However, Quotify is intended for general audiences and may not be suitable for very young children due to the nature of the content.</p>

            <h3>Future Children's Privacy</h3>
            <p>If we implement data collection in the future, Quotify will not be intended for children under 13 years of age. We will not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>
          </section>

          <section className="policy-section">
            <h2>International Data Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.</p>
          </section>

          <section className="policy-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
            <ul>
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the "Last updated" date</li>
              <li>Sending you an email notification for significant changes</li>
            </ul>
            <p>We encourage you to review this Privacy Policy periodically.</p>
          </section>

          <section className="policy-section">
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:me@dhruvchheda.com">me@dhruvchheda.com</a></p>
              <p><strong>Website:</strong> <a href="https://quotify.dhruvchheda.com" target="_blank" rel="noopener noreferrer">https://quotify.dhruvchheda.com</a></p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="privacy-footer">
          <p>&copy; {currentYear} Quotify. All rights reserved.</p>
          <p>This Privacy Policy is effective as of the date listed above.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 