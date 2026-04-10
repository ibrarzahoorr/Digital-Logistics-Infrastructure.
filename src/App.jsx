import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, Globe, Shield, Truck, Search, 
  Settings, Users, Mail, Phone, MessageSquare,
  BarChart3, FileCheck, Layers, ChevronRight,
  Menu, X, MapPin, Zap, Target, Box
} from 'lucide-react';

// Assets
import logo from './assets/Light.svg';
import globeImg from './assets/final_globe.png';
import warehouseImg from './assets/chinese_warehouse_logistics_1775725631633.png';
import machineryImg from './assets/industrial_machinery_high_tech_1775725929639.png';
import opsHubImg from './assets/ops_hub.png';

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="home-root">
      {/* Visual Grid Lines - Pure Orbit Mode */}
      <div className="grid-line" style={{ left: '10%' }} />
      <div className="grid-line" style={{ right: '10%' }} />

      {/* --- NAVIGATION --- */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        padding: scrollY > 50 ? '16px 5%' : '32px 5%',
        background: scrollY > 50 ? 'rgba(10, 4, 26, 0.85)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(24px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid var(--glass-border)' : 'none',
        transition: 'all 0.6s var(--ease-expo)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <img src={logo} alt="Bridge Initiative" style={{ height: '28px', filter: 'brightness(1.2)' }} />
        </motion.div>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="nav-links">
           {['Service', 'Process', 'Logistics', 'Network'].map((item) => (
             <a key={item} href={`#${item}`} style={{ 
               color: 'white', textDecoration: 'none', fontSize: '0.85rem', 
               fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em',
               opacity: 0.6, transition: '0.3s' 
             }} onMouseEnter={(e) => e.target.style.opacity = '1'} onMouseLeave={(e) => e.target.style.opacity = '0.6'}>
               {item}
             </a>
           ))}
           <a href="#contact" className="btn-premium btn-accent" style={{ padding: '12px 28px', fontSize: '0.8rem' }}>
             Start Shipping <ArrowUpRight size={16} />
           </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="glow-nebula" style={{ top: '-10%', left: '-10%', background: 'radial-gradient(circle, rgba(255, 230, 0, 0.08) 0%, transparent 70%)' }} />
        <div className="glow-nebula" style={{ bottom: '10%', right: '0', background: 'radial-gradient(circle, rgba(112, 0, 255, 0.08) 0%, transparent 70%)' }} />
        
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: '60px', alignItems: 'center' }}>
          
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ 
              background: 'rgba(255, 230, 0, 0.08)', color: 'var(--accent)', 
              padding: '10px 24px', borderRadius: '100px', display: 'inline-flex', 
              alignItems: 'center', gap: '12px', fontSize: '0.75rem', fontWeight: '900', 
              marginBottom: '32px', border: '1px solid rgba(255, 230, 0, 0.15)',
              letterSpacing: '0.25em'
            }}>
              <Box size={14} fill="var(--accent)" /> CLOUD-FIRST LOGISTICS
            </div>
            
            <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7.5vw, 6.5rem)', lineHeight: '0.85', marginBottom: '40px', letterSpacing: '-0.05em' }}>
              Import <span style={{ color: 'var(--accent)' }}>Easily.</span> <br /> 
              Scale <span style={{ color: 'rgba(255,255,255,0.4)', WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>Faster.</span>
            </h1>
            
            <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', marginBottom: '48px', maxWidth: '540px', fontWeight: '500', lineHeigh: '1.4' }}>
              Enterprise-grade trade infrastructure connecting China's manufacturing hubs directly to your door.
            </p>
            
            <div style={{ display: 'flex', gap: '24px' }}>
              <button className="btn-premium btn-accent" style={{ padding: '22px 48px' }}>Build My Supply Chain</button>
              <button className="btn-premium btn-outline" style={{ padding: '22px 48px' }}>Watch Demo</button>
            </div>

            <div style={{ marginTop: '120px', display: 'flex', gap: '80px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '40px' }}>
               <div>
                  <h3 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>08<span style={{ fontSize: '1.5rem', opacity: 0.5 }}>+</span></h3>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: '900', letterSpacing: '0.2em' }}>YEARS ON GROUND</p>
               </div>
               <div>
                  <h3 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>500<span style={{ fontSize: '1.5rem', opacity: 0.5 }}>+</span></h3>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: '900', letterSpacing: '0.2em' }}>GLOBAL PARTNERS</p>
               </div>
            </div>
            
            <motion.div 
               style={{ position: 'absolute', bottom: '-80px', left: '0', display: 'flex', alignItems: 'center', gap: '20px', opacity: 0.3 }}
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
            >
               <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.5)' }} />
               <span style={{ fontSize: '0.7rem', fontWeight: '900', letterSpacing: '0.3em' }}>SCROLL</span>
            </motion.div>
          </motion.div>

          {/* STABLE GLOBE WITH MODERN TRADE ROUTES */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{ 
              width: '150%', marginLeft: '-25%', position: 'relative', 
              filter: 'drop-shadow(0 0 120px rgba(112, 0, 255, 0.4)) contrast(1.1)',
              WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
              maskImage: 'radial-gradient(circle, black 40%, transparent 75%)'
            }}>
              <img src={globeImg} alt="Global Connectivity" style={{ width: '100%', opacity: 1, mixBlendMode: 'screen' }} />
              <div className="data-node" style={{ top: '50%', left: '50%', margin: '-4px 0 0 -4px' }} />
            </div>

            <svg style={{ position: 'absolute', top: 0, left: '-25%', width: '150%', height: '100%', zIndex: 5, pointerEvents: 'none' }} viewBox="0 0 1000 1000">
               <defs>
                 <radialGradient id="data-pulse" cx="50%" cy="50%" r="50%">
                   <stop offset="0%" stopColor="var(--accent)" />
                   <stop offset="100%" stopColor="transparent" />
                 </radialGradient>
               </defs>
               
               {/* Multiple Moving Stars (Trade Routes) */}
               {[
                 { id: 'r1', d: 'M300,500 Q500,200 700,500', dur: '4s' },
                 { id: 'r2', d: 'M400,600 Q200,400 300,300', dur: '6s' },
                 { id: 'r3', d: 'M700,400 Q850,550 600,700', dur: '5s' },
                 { id: 'r4', d: 'M500,300 Q650,500 450,750', dur: '7s' },
                 { id: 'r5', d: 'M250,650 Q450,750 550,550', dur: '8s' }
               ].map((route, i) => (
                 <React.Fragment key={route.id}>
                    <motion.path 
                      id={route.id}
                      d={route.d} 
                      fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2,6" opacity="0.3"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                    />
                    <motion.circle r="3" fill="var(--accent)" filter="drop-shadow(0 0 8px var(--accent))">
                       <animateMotion dur={route.dur} repeatCount="indefinite">
                         <mpath href={`#${route.id}`} />
                       </animateMotion>
                    </motion.circle>
                 </React.Fragment>
               ))}
            </svg>

            <motion.div 
              className="glass" 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              style={{ position: 'absolute', top: '10%', right: '-80px', padding: '24px', width: '220px', zIndex: 10, borderLeft: '3px solid var(--accent)', borderRadius: '16px' }}
            >
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Zap size={12} fill="var(--accent)" color="var(--accent)" />
                  <span style={{ fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.15em', color: 'var(--accent)' }}>HIGH SPEED LANE</span>
               </div>
               <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>Direct China-Pakistan DDP clearances now under 12 days.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES (HIGH-VISIBILITY BENTO) --- */}
      <section id="Service" style={{ position: 'relative', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="data-node" style={{ top: '-4px', left: '10%', marginLeft: '-4px' }} />
        <div className="data-node" style={{ top: '-4px', right: '10%', marginRight: '-4px' }} />
        
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '100px' }}>
            <span className="section-tag">ENGINEERING TRADE</span>
            <h2 className="section-title">Digital Logistics <br /> <span style={{ color: 'var(--accent)' }}>Infrastructure.</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px' }}>
             {/* Large Card */}
             <motion.div 
               className="glass"
               style={{ 
                 gridColumn: 'span 8', padding: '80px', minHeight: '500px', 
                 display: 'flex', flexDirection: 'column', justifyContent: 'center',
                 background: 'rgba(26, 11, 61, 0.4)', position: 'relative', overflow: 'hidden',
                 border: '1px solid rgba(255, 230, 0, 0.15)',
                 boxShadow: 'inset 0 0 50px rgba(112, 0, 255, 0.05)'
               }} 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
                <div style={{ position: 'absolute', top: '-20px', right: '20px', fontSize: '12rem', fontWeight: '900', color: 'rgba(255, 255, 255, 0.02)', pointerEvents: 'none' }}>01</div>
                <div style={{ color: 'var(--accent)', marginBottom: '48px' }}>
                  <Globe size={48} />
                </div>
                <h3 style={{ fontSize: '3.5rem', marginBottom: '24px', lineHeight: '1', fontFamily: 'var(--font-heading)', color: '#FFF' }}>Direct Factory <br /> Integration</h3>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '520px', lineHeight: '1.6' }}>
                  Eliminate intermediaries with our direct-to-manufacturer verification engine. We negotiate at the source to guarantee technical fidelity.
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '15px', color: 'var(--accent)', fontWeight: '900', cursor: 'pointer', fontSize: '0.75rem', letterSpacing: '0.25em' }}>
                   EXPLORE NETWORK <ChevronRight size={18} />
                </div>
             </motion.div>

             {/* Small Card */}
             <motion.div 
               className="glass"
               style={{ 
                 gridColumn: 'span 4', padding: '60px 48px', background: 'var(--primary-light)', 
                 display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden',
                 border: '1px solid rgba(255, 255, 255, 0.1)'
               }} 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
                <div style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '8rem', fontWeight: '900', color: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none' }}>02</div>
                <div style={{ color: 'var(--accent-blue)', marginBottom: '32px' }}>
                  <Shield size={44} />
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '16px', lineHeight: '1.2', color: '#FFF' }}>Sourcing <br /> Audits</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Physical verification and financial solvency checks for every manufacturer in your stream.
                </p>
             </motion.div>

             {/* Row 2 */}
             <motion.div 
               className="glass"
               style={{ 
                 gridColumn: 'span 4', padding: '60px 48px', display: 'flex', flexDirection: 'column',
                 background: 'var(--primary-deep)', position: 'relative', overflow: 'hidden'
               }} 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
                <div style={{ position: 'absolute', bottom: '-10px', right: '10px', fontSize: '8rem', fontWeight: '900', color: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none' }}>03</div>
                <div style={{ color: 'var(--accent-purple)', marginBottom: '32px' }}>
                   <Truck size={44} />
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: '#FFF' }}>Smart <br /> Logistics</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Dynamic route optimization and duty-paid (DDP) clearance pathways for high-value SKUs.
                </p>
             </motion.div>

             <motion.div 
               className="glass"
               style={{ 
                 gridColumn: 'span 8', padding: '60px', background: 'var(--primary)',
                 display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', overflow: 'hidden',
                 border: '1px solid rgba(255, 255, 255, 0.08)'
               }} 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
                <div style={{ position: 'absolute', bottom: '-20px', right: '20px', fontSize: '10rem', fontWeight: '900', color: 'rgba(255, 255, 255, 0.02)', pointerEvents: 'none' }}>04</div>
                <div style={{ flex: 1 }}>
                   <div style={{ color: 'var(--accent)', marginBottom: '32px' }}>
                      <Layers size={44} />
                   </div>
                   <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: '#FFF' }}>Trade Console</h3>
                   <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', maxWidth: '350px' }}>
                      Our proprietary software suite for real-time inventory oversight and data-driven procurement.
                   </p>
                </div>
                <div style={{ flex: 1.2, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', opacity: 0.3 }}>
                   {[...Array(15)].map((_, i) => (
                     <div key={i} style={{ height: '30px', background: i % 3 === 0 ? 'var(--accent)' : 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
                   ))}
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIAL FOCUS --- */}
      <section id="Process" style={{ overflow: 'hidden' }}>
         <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
               <div style={{ position: 'relative' }}>
                  <img src={machineryImg} alt="Technical Sourcing" style={{ width: '100%', borderRadius: 'var(--radius-xl)', filter: 'grayscale(0.2) contrast(1.1)', mixBlendMode: 'lighten' }} />
                  <div className="glass" style={{ position: 'absolute', top: '-30px', right: '-30px', padding: '30px', width: '240px', textAlign: 'center', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
                     <h4 style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '5px' }}>20%</h4>
                     <p style={{ fontSize: '0.8rem', fontWeight: '800' }}>AVG COST SAVINGS</p>
                  </div>
               </div>
            </motion.div>
            
            <motion.div {...fadeIn}>
               <span className="section-tag">INDUSTRIAL GRADE</span>
               <h2 className="section-title">Technical Expertise. <br /> No Compromise.</h2>
               <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '48px' }}>
                 We specialize in high-value niche sourcing including CNC production lines, food processing equipment, and industrial grade machinery. 
               </p>
               
               <div style={{ display: 'grid', gap: '32px' }}>
                  {[
                    { icon: <Target />, title: "Technical Verification", desc: "Our engineers review specifications to ensure equipment meets your local standards." },
                    { icon: <Search />, title: "Supplier Audits", desc: "We physically visit factories to verify production capability and financial stability." }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '24px' }}>
                       <div style={{ color: 'var(--accent)', flexShrink: 0 }}>{item.icon}</div>
                       <div>
                          <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{item.title}</h4>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      <div className="section-separator">
         <div className="data-node" style={{ top: '-4px', left: '10%', marginLeft: '-4px' }} />
         <div className="data-node" style={{ top: '-4px', right: '10%', marginRight: '-4px' }} />
      </div>

      {/* --- OPERATIONS DASHBOARD (GROUND CONTROL) --- */}
      <section id="Logistics" style={{ background: '#05020F' }}>
         <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
               <div style={{ maxWidth: '600px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00FF00', boxShadow: '0 0 10px #00FF00' }} />
                     <span className="section-tag" style={{ margin: 0 }}>GROUND OPERATIONS: ACTIVE</span>
                  </div>
                  <h2 className="section-title">Superior Hub Control <br /> In <span style={{ color: 'var(--accent)' }}>China Mainland.</span></h2>
               </div>
               <p style={{ color: 'var(--text-muted)', maxWidth: '400px', fontSize: '1.1rem', marginBottom: '32px' }}>
                  We are not just a freight forwarder. We are an on-ground entity operating from the heart of Guangzhou's industrial core.
               </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' }}>
               {/* Primary Hub View */}
               <motion.div 
                  className="glass" 
                  style={{ 
                    position: 'relative', height: '600px', overflow: 'hidden', 
                    padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    background: `linear-gradient(to top, rgba(5, 2, 15, 1), rgba(5, 2, 15, 0.4)), url(${opsHubImg})`,
                    backgroundSize: 'cover', backgroundPosition: 'center', 
                    backgroundBlendMode: 'screen',
                    border: '1px solid rgba(255, 230, 0, 0.1)'
                  }}
                  {...fadeIn}
               >
                  <div style={{ position: 'relative', zIndex: 2 }}>
                     <div style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.2rem', color: 'var(--accent)', marginBottom: '16px' }}>GUANGZHOU HEADQUARTERS</div>
                     <h3 style={{ fontSize: '3.5rem', marginBottom: '24px', lineHeight: '1' }}>The Nansha <br /> Command Center</h3>
                     <p style={{ maxWidth: '400px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
                        Our 15,000 sqft facility handles consolidation, technical inspections, and high-speed cargo dispatch daily.
                     </p>
                  </div>
                  {/* Decorative Elements */}
                  <div style={{ position: 'absolute', top: '40px', right: '40px', textAlign: 'right' }}>
                     <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>CURRENT HUB LOAD</p>
                     <p style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>92.4%</p>
                  </div>
               </motion.div>

               <div style={{ display: 'grid', gap: '30px' }}>
                  {/* Stats Cards */}
                  <motion.div className="glass" style={{ padding: '40px', background: 'var(--primary-light)' }} {...fadeIn}>
                     <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(112, 0, 255, 0.1)', color: 'var(--accent-purple)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <Truck size={28} />
                        </div>
                        <div>
                           <h4 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>40.5<span style={{ fontSize: '1rem', opacity: 0.5 }}> TONS</span></h4>
                           <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>AVERAGE DAILY DISPATCH VOLUME</p>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div className="glass" style={{ padding: '40px' }} {...fadeIn}>
                     <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(0, 229, 255, 0.1)', color: 'var(--accent-blue)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <Globe size={28} />
                        </div>
                        <div>
                           <h4 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>12<span style={{ fontSize: '1rem', opacity: 0.5 }}> PORTS</span></h4>
                           <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>DIRECT AIR & SEA CLEARANCE LANES</p>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div className="glass" style={{ padding: '40px', background: 'var(--primary-deep)', border: '1px solid rgba(255, 230, 0, 0.2)' }} {...fadeIn}>
                     <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(255, 230, 0, 0.1)', color: 'var(--accent)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <Zap size={28} fill="var(--accent)" />
                        </div>
                        <div>
                           <h4 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>0.5H</h4>
                           <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>MAX RESPONSE TIME TO HUB INQUIRIES</p>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* --- CONTACT FOOTER --- */}
      <footer id="contact" style={{ padding: '100px 0 60px', background: 'var(--primary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '100px' }}>
              <div>
                 <h2 className="section-title" style={{ fontSize: '4rem' }}>Ready to Scale? <br /> Let's Connect.</h2>
                 <form style={{ display: 'grid', gap: '24px', marginTop: '60px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                       <input placeholder="Full Name" style={{ background: 'var(--primary-light)', border: '1px solid var(--glass-border)', padding: '24px', borderRadius: '20px', color: 'white', fontFamily: 'inherit' }} />
                       <input placeholder="Email Address" style={{ background: 'var(--primary-light)', border: '1px solid var(--glass-border)', padding: '24px', borderRadius: '20px', color: 'white', fontFamily: 'inherit' }} />
                    </div>
                    <textarea placeholder="Tell us about your sourcing needs..." rows="5" style={{ background: 'var(--primary-light)', border: '1px solid var(--glass-border)', padding: '24px', borderRadius: '20px', color: 'white', fontFamily: 'inherit' }}></textarea>
                    <button className="btn-premium btn-accent" style={{ width: 'fit-content' }}>Send Inquiry</button>
                 </form>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '60px' }}>
                 <div>
                    <p style={{ color: 'var(--accent)', fontWeight: '900', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '20px' }}>HEADQUARTERS</p>
                    <p style={{ fontSize: '1.4rem', lineHeight: '1.4' }}>Office 402, Trade Center, <br /> Islamabad, Pakistan</p>
                 </div>
                 <div>
                    <p style={{ color: 'var(--accent)', fontWeight: '900', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '20px' }}>CHINA HUB</p>
                    <p style={{ fontSize: '1.4rem', lineHeight: '1.4' }}>Nansha District, <br /> Guangzhou, China</p>
                 </div>
                 <div style={{ display: 'flex', gap: '24px' }}>
                    <a href="#" style={{ color: 'white', opacity: 0.5 }}><Phone size={24} /></a>
                    <a href="#" style={{ color: 'white', opacity: 0.5 }}><Mail size={24} /></a>
                    <a href="#" style={{ color: 'white', opacity: 0.5 }}><MessageSquare size={24} /></a>
                 </div>
              </div>
           </div>
           
           <div style={{ marginTop: '160px', paddingTop: '40px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
              <p>© 2026 BRIDGE INITIATIVE PVT LTD. REIMAGINING TRADE.</p>
              <div style={{ display: 'flex', gap: '40px' }}>
                 <a href="#" style={{ color: 'white', textDecoration: 'none' }}>PRIVACY</a>
                 <a href="#" style={{ color: 'white', textDecoration: 'none' }}>TERMS</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
