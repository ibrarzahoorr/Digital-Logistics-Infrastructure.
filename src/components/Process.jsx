import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { title: 'Requirement', desc: 'Detail your product & specs' },
    { title: 'Sourcing', desc: 'Direct factory search in China' },
    { title: 'Verification', desc: 'Supplier audit & credentials' },
    { title: 'Quotation', desc: 'Transparent landed cost' },
    { title: 'Quality', desc: 'Pre-shipment inspection' },
    { title: 'Logistics', desc: 'Shipping via Sea or Air' },
    { title: 'Clearance', desc: 'Customs & duty handling' },
    { title: 'Delivery', desc: 'Door-to-door to warehouse' },
  ];

  return (
    <section style={{ padding: 'var(--section-padding)', background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="section-header">
          <span className="tag">The Workflow</span>
          <h2>The Bridge Journey</h2>
          <p>A transparent, step-by-step process ensuring security and efficiency.</p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          position: 'relative',
          padding: '40px 0',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          {/* Horizontal Line (hidden on mobile) */}
          <div style={{ 
            position: 'absolute', 
            top: '75px', 
            left: '5%', 
            right: '5%', 
            height: '2px', 
            background: 'var(--border-light)', 
            zIndex: 0,
            display: 'none' /* Will manage with CSS media queries if needed */
          }} />

          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              style={{ 
                flex: '1', 
                minWidth: '130px', 
                textAlign: 'center', 
                position: 'relative', 
                zIndex: 1 
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'white', 
                color: 'var(--primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 20px',
                fontWeight: '900',
                fontSize: '1.2rem',
                border: '4px solid var(--accent)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {i + 1}
              </div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1rem' }}>{step.title}</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
