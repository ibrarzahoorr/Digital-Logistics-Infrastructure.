import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/Light.svg';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: 'var(--section-padding)', background: '#111', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1.2', minWidth: '350px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Let's Start Your <span style={{ color: 'var(--accent)' }}>Import Journey</span></h2>
            <p style={{ opacity: 0.7, marginBottom: '40px' }}>
              Whether you are a factory owner needing machinery or a retailer looking for reliable suppliers, we are here to help.
            </p>

            <form style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <input type="text" placeholder="Full Name" style={{ flex: 1, padding: '15px', borderRadius: '8px', border: 'none', background: '#222', color: 'white' }} />
                <input type="email" placeholder="Email Address" style={{ flex: 1, padding: '15px', borderRadius: '8px', border: 'none', background: '#222', color: 'white' }} />
              </div>
              <input type="text" placeholder="Subject / Service Needed" style={{ padding: '15px', borderRadius: '8px', border: 'none', background: '#222', color: 'white' }} />
              <textarea placeholder="Tell us about your requirements..." rows="5" style={{ padding: '15px', borderRadius: '8px', border: 'none', background: '#222', color: 'white' }}></textarea>
              <button className="btn btn-primary" style={{ background: 'var(--accent)', color: 'var(--primary)', width: 'fit-content' }}>Send Inquiry</button>
            </form>
          </div>

          <div style={{ flex: '0.8', minWidth: '300px' }}>
            <div style={{ background: '#222', padding: '40px', borderRadius: '20px' }}>
              <h3 style={{ marginBottom: '30px' }}>Contact Details</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <li style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent)' }}><Mail /></div>
                  <div>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6, display: 'block' }}>Email Us</span>
                    <strong>info@bridgeinitiative.co</strong>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent)' }}><Phone /></div>
                  <div>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6, display: 'block' }}>Call / WhatsApp</span>
                    <strong>+92 332 5888888</strong>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent)' }}><MessageSquare /></div>
                  <div>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6, display: 'block' }}>WeChat ID</span>
                    <strong>13059187843</strong>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent)' }}><MapPin /></div>
                  <div>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6, display: 'block' }}>Pakistan HQ</span>
                    <strong>149-E Valencia Town, Lahore</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/923325888888" 
        target="_blank" 
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: '#25D366',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          zIndex: 100,
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageSquare size={32} />
      </a>

      <footer style={{ marginTop: '100px', borderTop: '1px solid #333', paddingTop: '50px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
          <div>
            <img src={logo} alt="Bridge Initiative" style={{ height: '40px', marginBottom: '20px' }} />
            <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>© {new Date().getFullYear()} Bridge Initiative Pvt Ltd. All Rights Reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ opacity: 0.6 }}><Facebook /></a>
            <a href="#" style={{ opacity: 0.6 }}><Twitter /></a>
            <a href="#" style={{ opacity: 0.6 }}><Instagram /></a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
