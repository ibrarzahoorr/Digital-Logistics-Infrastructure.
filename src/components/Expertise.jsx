import React from 'react';
import { Settings, Utensils, Zap, Construction } from 'lucide-react';
import machineryImg from '../assets/industrial_machinery_high_tech_1775725929639.png';

const Expertise = () => {
  const niches = [
    { title: 'Industrial Machinery', icon: <Settings />, desc: 'CNC machines, assembly lines, and heavy equipment sourcing.' },
    { title: 'Food Ingredients', icon: <Utensils />, desc: 'Bulk supply of fruit pulps, syrups, and specialized additives.' },
    { title: 'Energy & Solar', icon: <Zap />, desc: 'Lithium batteries, inverters, and complete solar solutions.' },
    { title: 'Construction', icon: <Construction />, desc: 'Steel structures, heavy machinery parts, and raw materials.' },
  ];

  return (
    <section id="expertise" style={{ padding: 'var(--section-padding)', background: 'var(--primary)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
          <div style={{ flex: '1', minWidth: '350px' }}>
            <img 
              src={machineryImg} 
              alt="Industrial Machinery" 
              style={{ borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }} 
            />
          </div>
          
          <div style={{ flex: '1.2', minWidth: '350px' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>Our High-Value Niche</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Specialized Product Expertise</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '40px' }}>
              While we source across all categories, we have deep technical knowledge in industrial machinery and food processing sectors.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              {niches.map((niche, i) => (
                <div key={i} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--accent)' }}>
                    {niche.icon}
                    <h4 style={{ color: 'white' }}>{niche.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{niche.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
