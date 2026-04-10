import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Anchor, BarChart3, Package, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search size={32} />,
      title: 'Product Sourcing',
      desc: 'Find reliable factories on Alibaba/1688, compare prices, and verify supplier credentials with our local staff.',
      points: ['Factory Audits', 'Sample Inspection', 'Price Negotiation']
    },
    {
      icon: <FileText size={32} />,
      title: 'Customs Clearance',
      desc: 'End-to-end documentation, duty handling, and port clearance in Pakistan and Afghanistan.',
      points: ['Port Clearance', 'Tax Documentation', 'Inland Delivery']
    },
    {
      icon: <Anchor size={32} />,
      title: 'Global Logistics',
      desc: 'Sea and Air freight coordination from all major Chinese ports to your warehouse door.',
      points: ['FCL/LCL Shipping', 'Air Freight', 'Warehouse Storage']
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Import Consulting',
      desc: 'Expert advice on landed costs, customs laws, and trade regulations to optimize your margins.',
      points: ['Landed Cost Analysis', 'Customs Law', 'Trade Documentation']
    }
  ];

  return (
    <section id="services" style={{ padding: 'var(--section-padding)', background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="section-header">
          <span className="tag">Our Expertise</span>
          <h2>Comprehensive Supply Chain Solutions</h2>
          <p>We handle everything from the factory floor in China to your warehouse doorstep.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px',
          marginTop: '50px' 
        }}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="glass"
              style={{ 
                padding: '40px', 
                borderRadius: '20px', 
                backgroundColor: 'white',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>{service.icon}</div>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '25px', fontSize: '0.95rem' }}>{service.desc}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {service.points.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', fontWeight: '500' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
