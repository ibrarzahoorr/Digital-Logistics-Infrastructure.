import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe, Truck } from 'lucide-react';
import heroBg from '../assets/chinese_warehouse_logistics_1775725631633.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 5%',
      overflow: 'hidden',
      background: '#f8f9fa'
    }}>
      {/* Background Graphic Element */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '55%',
        height: '100%',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1,
        maskImage: 'linear-gradient(to left, black 60%, transparent)',
        WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '650px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="tag" style={{ 
              color: 'var(--accent-dark)', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              marginBottom: '20px',
              display: 'block'
            }}>
              Your Bridge to Global Trade
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              color: 'var(--primary)', 
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              Complete Import Solution — From Supplier to Final Delivery
            </h1>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-muted)', 
              marginBottom: '40px',
              maxWidth: '550px'
            }}>
              Specialized sourcing, logistics, and supply chain management connecting Pakistan & Africa with reliable manufacturers in China. 8+ years of excellence.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                Get a Quote <ArrowRight size={20} />
              </a>
              <a href="#services" className="btn btn-outline">
                Our Services
              </a>
            </div>

            <div style={{ 
              marginTop: '60px', 
              display: 'flex', 
              gap: '40px',
              borderTop: '1px solid var(--border-light)',
              paddingTop: '30px'
            }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck className="color-primary" style={{ color: 'var(--primary)' }} />
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Verified Suppliers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe className="color-primary" style={{ color: 'var(--primary)' }} />
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Local China Presence</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Truck className="color-primary" style={{ color: 'var(--primary)' }} />
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>DDP Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shapes / Decor */}
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'rgba(137, 207, 240, 0.1)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }} />
    </section>
  );
};

export default Hero;
