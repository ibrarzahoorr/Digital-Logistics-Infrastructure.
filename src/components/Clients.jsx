import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    'CHINA GEZHOUBA', 'MUX FOODS', 'WD FOODS', 'KK FOODS', 
    'PAK KASHMIR', 'VISION & SUPREME', 'KC ENERGY', 'WAH KIT', 
    'HISOA', 'AZEEM FOODS', 'MIMI FOODS', 'GTX GERMAN', 
    'CENTURY STEEL', 'WE DRINK', 'PELICANA', 'LUCKY SNACKS'
  ];

  return (
    <section style={{ padding: '40px 0', background: 'white', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container" style={{ overflow: 'hidden' }}>
        <p style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '30px' }}>
          Trusted by Industry Leaders
        </p>
        <div style={{ display: 'flex', gap: '50px', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <motion.div 
            style={{ display: 'flex', gap: '50px', alignItems: 'center' }}
            animate={{ x: [0, -2000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {/* Double the list for seamless loop */}
            {[...clients, ...clients].map((client, i) => (
              <span key={i} style={{ 
                fontSize: '1.2rem', 
                fontWeight: '900', 
                color: 'var(--primary)', 
                opacity: 0.3,
                letterSpacing: '1px'
              }}>
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
