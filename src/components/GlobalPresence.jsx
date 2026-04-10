import React from 'react';
import { MapPin, Warehouse, Users, Building2 } from 'lucide-react';
import cargoImg from '../assets/global_shipping_cargo_1775725778815.png';

const GlobalPresence = () => {
  return (
    <section id="presence" style={{ padding: 'var(--section-padding)', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <span className="tag">Global Footprint</span>
          <h2>Our Ground Operations</h2>
          <p>We are not just brokers; we are operators with a physical presence in both China and Pakistan.</p>
        </div>

        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '350px' }}>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--primary)', padding: '10px', borderRadius: '10px', color: 'white' }}>
                  <MapPin size={24} />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>China Operations</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <Warehouse className="color-primary" style={{ color: 'var(--accent-dark)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block' }}>Guangzhou Warehouse</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Nansha District, Guangzhou - Strategic Hub for Export</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <Users className="color-primary" style={{ color: 'var(--accent-dark)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block' }}>On-Ground Team (7+)</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Sourcing Executives, Warehouse Staff, Quality Inspectors</span>
                  </div>
                </li>
              </ul>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--accent)', padding: '10px', borderRadius: '10px', color: 'var(--primary)' }}>
                  <Building2 size={24} />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>Pakistan Operations</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <MapPin className="color-primary" style={{ color: 'var(--accent-dark)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block' }}>Lahore & Islamabad Offices</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>149-E Valencia Town, Lahore | F10/4, Islamabad</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <Warehouse className="color-primary" style={{ color: 'var(--accent-dark)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block' }}>Regional Warehouses</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Lahore (Raiwind Road) | Islamabad (Kohat Road)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ flex: '1.2', position: 'relative', minWidth: '350px' }}>
             <img 
              src={cargoImg} 
              alt="Global Operations" 
              style={{ borderRadius: '30px', boxShadow: 'var(--shadow-lg)' }} 
            />
            <div className="glass" style={{
              position: 'absolute',
              bottom: '30px',
              left: '-30px',
              padding: '25px',
              borderRadius: '20px',
              maxWidth: '300px'
            }}>
              <p style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '5px' }}>"We are not brokers — we are operators inside China"</p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>- Direct Supplier Access. No Middlemen.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
