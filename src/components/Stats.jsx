import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: 'Years Experience', value: '8+' },
    { label: 'Happy Clients', value: '500+' },
    { label: 'Total Shipments', value: '200+' },
    { label: 'China Staff', value: '7' },
  ];

  return (
    <section style={{ padding: '60px 5%', background: 'var(--primary)', color: 'white' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '3rem', marginBottom: '5px', color: 'var(--accent)' }}>{stat.value}</h3>
            <p style={{ fontSize: '1rem', opacity: 1, fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
