import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    { name: 'Wilson Wu', role: 'Sourcing Executive', exp: '15 Years Exp.' },
    { name: 'Ms Nina', role: 'Logistics Executive', exp: 'Global Shipping' },
    { name: 'Ms Xia', role: 'Warehousing Executive', exp: 'Inventory Management' },
    { name: 'Naveed Baloch', role: 'Operations Executive', exp: 'Local Operations' },
    { name: 'Syed Jabeer Qasim', role: 'Sales Executive', exp: 'Client Relations' },
    { name: 'M. Akbar', role: 'Customs Handling', exp: 'Clearance Expert' },
  ];

  return (
    <section id="team" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <div className="section-header">
          <span className="tag">Our Leadership</span>
          <h2>The Experts Behind The Bridge</h2>
          <p>A multi-disciplinary team ensuring every shipment is handled with precision.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px' 
        }}>
          {team.map((member, i) => (
            <div key={i} style={{ 
              textAlign: 'center', 
              padding: '30px', 
              borderRadius: '20px', 
              border: '1px solid var(--border-light)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                background: 'var(--bg-soft)', 
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--primary)',
                border: '2px dashed var(--accent)'
              }}>
                {member.name.charAt(0)}
              </div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>{member.name}</h4>
              <p style={{ color: 'var(--accent-dark)', fontWeight: '600', fontSize: '0.85rem', marginBottom: '10px' }}>{member.role}</p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{member.exp}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
