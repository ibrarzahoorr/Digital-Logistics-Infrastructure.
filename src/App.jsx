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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Simulating a hidden background process for form submission
    // Connect your Formspree/Web3Forms/Custom API here
    console.log("Inquiry Submitted:", Object.fromEntries(formData));
    alert("Inquiry Sent Successfully. Our team will contact you shortly.");
    e.target.reset();
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
           {['Service', 'Process', 'Network', 'Team', 'Clients'].map((item) => (
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
            <span className="section-tag">CORE SERVICES</span>
            <h2 className="section-title">End-to-End <br /> <span style={{ color: 'var(--accent)' }}>Import Solutions.</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px' }}>
               From supplier discovery in China to final warehouse delivery. Bridge Initiative manages the entire supply chain so you don't have to.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px' }}>
             {/* Sourcing Card */}
             <motion.div 
               className="glass"
               style={{ 
                 gridColumn: 'span 8', padding: '60px', minHeight: '440px', 
                 display: 'flex', flexDirection: 'column', justifyContent: 'center',
                 background: 'rgba(26, 11, 61, 0.4)', position: 'relative', overflow: 'hidden',
                 border: '1px solid rgba(255, 230, 0, 0.15)'
               }} 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
                <div style={{ position: 'absolute', top: '-20px', right: '20px', fontSize: '10rem', fontWeight: '900', color: 'rgba(255, 255, 255, 0.02)', pointerEvents: 'none' }}>01</div>
                <div style={{ color: 'var(--accent)', marginBottom: '40px' }}><Search size={40} /></div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#FFF' }}>Strategic Product Sourcing</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '500px', lineHeight: '1.6' }}>
                  We map the entire Chinese manufacturing landscape—from Alibaba/1688 to direct factory floors—to find the right price-to-quality ratio for your business.
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                   {['Market Analysis', 'Supplier Comparison', 'Price Negotiation'].map(tag => (
                     <span key={tag} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.65rem', fontWeight: '800', border: '1px solid rgba(255,255,255,0.1)' }}>{tag}</span>
                   ))}
                </div>
             </motion.div>

             {/* Verification Card */}
             <motion.div 
               className="glass"
               style={{ gridColumn: 'span 4', padding: '50px', background: 'var(--primary-light)', position: 'relative', overflow: 'hidden' }} 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
                <div style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '6rem', fontWeight: '900', color: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none' }}>02</div>
                <div style={{ color: 'var(--accent-blue)', marginBottom: '32px' }}><Shield size={40} /></div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#FFF' }}>On-Ground Audits</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Our China-based staff performs physical factory audits and sample inspections before any contract is signed.
                </p>
             </motion.div>

             {/* Logistics Card */}
             <motion.div 
               className="glass"
               style={{ gridColumn: 'span 4', padding: '50px', background: 'var(--primary-deep)', borderRight: '1px solid var(--glass-border)' }} 
               initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
             >
                <div style={{ color: 'var(--accent-purple)', marginBottom: '32px' }}><Truck size={40} /></div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#FFF' }}>Customs & DDP</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Door-to-door (DDP) delivery. We handle port clearance, duties, and inland logistics across Pakistan and Middle East.
                </p>
             </motion.div>

             {/* Consultancy Card */}
             <motion.div 
               className="glass"
               style={{ gridColumn: 'span 8', padding: '50px', background: 'var(--primary)', position: 'relative', overflow: 'hidden' }} 
               initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
             >
                <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
                   <div style={{ flex: 1 }}>
                      <div style={{ color: 'var(--accent)', marginBottom: '32px' }}><FileCheck size={40} /></div>
                      <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#FFF' }}>Import Consulting</h3>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                         Landed cost consultation, duty handling, and documentation management for large-scale industrial projects.
                      </p>
                   </div>
                   <div style={{ flex: 0.8, background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '24px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                      <p style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: '900', marginBottom: '12px' }}>EXPERT SERVICES</p>
                      <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.8rem', display: 'grid', gap: '10px' }}>
                         <li>✓ Duty & Tax Analysis</li>
                         <li>✓ Trade Documentation</li>
                         <li>✓ Customs Law Specialist</li>
                      </ul>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROCESS PIPELINE (9 STEPS) --- */}
      <section id="Process" style={{ background: 'var(--primary-deep)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag">EXECUTION FRAMEWORK</span>
            <h2 className="section-title">The 9-Step <span style={{ color: 'var(--accent)' }}>Import Pipeline.</span></h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px', background: 'var(--glass-border)', borderRadius: '32px', overflow: 'hidden' }}>
             {[
               "Requirement Receipt", "Strategic China Sourcing", "Supplier Verification",
               "Cost Negotiation", "Order Confirmation", "Pre-Shipment Inspection",
               "Global Logistics", "Customs Clearance", "Final Warehouse Delivery"
             ].map((step, i) => (
               <div key={i} style={{ padding: '50px 40px', background: 'var(--primary)', position: 'relative' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '20px', right: '30px' }}>PHASE 0{i+1}</span>
                  <h4 style={{ fontSize: '1.2rem', color: i === 8 ? 'var(--accent)' : 'white' }}>{step}</h4>
                  <p style={{ fontSize: '0.85rem', opacity: 0.4, marginTop: '12px' }}>Operational excellence at every node of the supply chain.</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- NETWORK & HUB CONTROL --- */}
      <section id="Network" style={{ background: '#05020F' }}>
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center', marginBottom: '120px' }}>
               <motion.div {...fadeIn}>
                  <span className="section-tag">GLOBAL INFRASTRUCTURE</span>
                  <h2 className="section-title">Verified On-Ground <br /> <span style={{ color: 'var(--accent)' }}>Presence.</span></h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '40px' }}>
                     We are not brokers—we are operators. With a registered company and 7-person team in Guangzhou, we control the source.
                  </p>
                  
                  <div style={{ display: 'grid', gap: '24px' }}>
                     <div className="glass" style={{ padding: '30px', borderLeft: '4px solid var(--accent)' }}>
                        <h4 style={{ color: 'white', marginBottom: '10px' }}>CHINA HQ</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Guangzhou, Nan Sha District. Team: Sourcing Execs, Warehouse Staff, QC Inspectors.</p>
                     </div>
                     <div className="glass" style={{ padding: '30px', borderLeft: '4px solid var(--accent-blue)' }}>
                        <h4 style={{ color: 'white', marginBottom: '10px' }}>PAKISTAN OPERATIONS</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Lahore (Valencia Town) & Islamabad (F-10). Dedicated Warehouses in Raiwind & Islamabad.</p>
                     </div>
                  </div>
               </motion.div>

               <motion.div 
                  style={{ 
                    position: 'relative', height: '540px', borderRadius: '48px', overflow: 'hidden', 
                    padding: '60px', display: 'flex', flexDirection: 'column',
                    background: `linear-gradient(to top, rgba(5, 2, 15, 1), rgba(5, 2, 15, 0.4)), url(${opsHubImg})`,
                    backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'screen',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                  {...fadeIn}
               >
                  <div style={{ position: 'relative', zIndex: 2 }}>
                     <span style={{ fontSize: '0.7rem', fontWeight: '900', letterSpacing: '0.3em', color: 'var(--accent)' }}>OPERATIONAL COMMAND</span>
                     <h3 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Nansha Consolidation <br /> Center</h3>
                  </div>
                  <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                     <div className="glass" style={{ padding: '20px', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.5rem', fontWeight: '800' }}>8+</p>
                        <p style={{ fontSize: '0.6rem', opacity: 0.5 }}>YEARS ACTIVE</p>
                     </div>
                     <div className="glass" style={{ padding: '20px', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.5rem', fontWeight: '800' }}>500+</p>
                        <p style={{ fontSize: '0.6rem', opacity: 0.5 }}>CLIENTS SERVED</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* --- CLIENTS MARQUEE (WHITE THEME BREAKPOINT) --- */}
      <section id="Clients" style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span className="section-tag" style={{ color: 'rgba(0,0,0,0.4)', background: 'rgba(0,0,0,0.05)' }}>PORTFOLIO</span>
              <h2 className="section-title" style={{ color: '#0A041A' }}>Trusted By <span style={{ color: 'var(--accent-purple)' }}>Industry Leaders.</span></h2>
           </div>
           
           <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
              <motion.div 
                style={{ display: 'inline-flex', gap: '80px', padding: '20px 0' }}
                animate={{ x: [0, -2000] }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              >
                 {[
                   "CHINA GEZHOUBA GROUP", "MUX FOOD INDUSTRIES", "PAK KASHMIR PVT LTD", 
                   "HISOA PVT LTD", "GTX GERMAN TECHNOLOGIES", "AZEEM FOODS", "KC ENERGY",
                   "PELICANA CHICKEN", "LUCKY SNACKS", "STARDAC", "REHMAT FOODS"
                 ].map((client, i) => (
                   <span key={i} style={{ fontSize: '1.8rem', fontWeight: '900', color: 'rgba(0,0,0,0.15)', letterSpacing: '0.1em' }}>{client}</span>
                 ))}
                 {/* Double for seamless marquee */}
                 {[
                   "CHINA GEZHOUBA GROUP", "MUX FOOD INDUSTRIES", "PAK KASHMIR PVT LTD", 
                   "HISOA PVT LTD", "GTX GERMAN TECHNOLOGIES", "AZEEM FOODS", "KC ENERGY",
                   "PELICANA CHICKEN", "LUCKY SNACKS", "STARDAC", "REHMAT FOODS"
                 ].map((client, i) => (
                   <span key={i + 100} style={{ fontSize: '1.8rem', fontWeight: '900', color: 'rgba(0,0,0,0.08)', letterSpacing: '0.1em' }}>{client}</span>
                 ))}
              </motion.div>
           </div>
        </div>
      </section>

      {/* --- INDUSTRIAL MACHINERY SHOWCASE (HIGH-VALUE NICHE) --- */}
      <section style={{ background: '#080415' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'center' }}>
              <motion.div {...fadeIn}>
                 <span className="section-tag">HIGH-VALUE NICHE</span>
                 <h2 className="section-title">Industrial Machinery <br /> & <span style={{ color: 'var(--accent)' }}>Turn-Key Projects.</span></h2>
                 <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '48px' }}>
                    From CNC Processing Machines to EV Assembly Lines, we specialize in technical equipment sourcing where zero-margin-for-error is the standard.
                 </p>
                 
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.05)', paddingLeft: '30px' }}>
                       <h4 style={{ color: 'white', marginBottom: '10px' }}>Food Tech</h4>
                       <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: '2' }}>
                          <li>• Pasta Production Lines</li>
                          <li>• Wafer Making Lines</li>
                          <li>• Industrial Bakery Ovens</li>
                       </ul>
                    </div>
                    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.05)', paddingLeft: '30px' }}>
                       <h4 style={{ color: 'white', marginBottom: '10px' }}>Heavy Industry</h4>
                       <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: '2' }}>
                          <li>• Hydropower Turbines</li>
                          <li>• EV Production Lines</li>
                          <li>• Portal & Tower Cranes</li>
                       </ul>
                    </div>
                 </div>
              </motion.div>
              
              <div style={{ background: 'var(--primary-light)', borderRadius: '40px', padding: '60px', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ color: 'var(--accent)', marginBottom: '30px' }}><Settings size={60} /></div>
                 <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Technical Sourcing <br /> Specialists</h3>
                 <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
                    We provide chemical analysts, mechanical experts, and electrical engineers for installation and turn-key performance verification.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* --- PRODUCT PORTFOLIO (FOOD & MATERIALS) --- */}
      <section style={{ background: 'var(--primary)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <motion.div {...fadeIn}>
                 <span className="section-tag">GLOBAL SKU PORTFOLIO</span>
                 <h2 className="section-title">Raw Materials <br /> & <span style={{ color: 'var(--accent-blue)' }}>Ingredients.</span></h2>
                 <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px' }}>
                    Supplying the biggest FMCG names across Pakistan & Afghanistan. We source premium industrial ingredients with guaranteed purity.
                 </p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    {['Lemon/Fruit Pulps', 'Ice Cream Powders', 'Non-Dairy Creamers', 'Food Savers & Flavors'].map(item => (
                       <div key={item} style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}>
                          ✓ {item}
                       </div>
                    ))}
                 </div>
              </motion.div>
              <div className="glass" style={{ padding: '60px', borderLeft: '1px solid var(--accent-blue)' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                    <h4 style={{ color: 'white' }}>90% REPEAT RATE</h4>
                    <span style={{ color: 'var(--accent-blue)' }}>$40k AVG VALUE</span>
                 </div>
                 <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>
                    "Bridge Initiative has been our backbone for sourcing specialized dairy alternates and pulps from Guangzhou for over 5 years." — <span style={{ color: 'white' }}>MUX Food Industries</span>
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* --- EXPERT TEAM SECTION --- */}
      <section id="Team" style={{ background: 'var(--primary-deep)' }}>
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '100px', alignItems: 'center' }}>
               <div>
                  <span className="section-tag">LEADERSHIP</span>
                  <h2 className="section-title">The Brains <br /> Behind the <span style={{ color: 'var(--accent)' }}>Bridge.</span></h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                     A multi-national team of sourcing executives, customs law specialists, and installation experts managing over $40k average shipment values.
                  </p>
               </div>
               
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                  {[
                    { name: "Wilson Wu", role: "Sourcing Executive (15yr Exp)" },
                    { name: "Ms Nina", role: "Global Logistics & Freight" },
                    { name: "M. Akbar", role: "Custom Handling Expert" },
                    { name: "Mr S Amir Rasheed", role: "Customs Law Specialist" }
                  ].map((member, i) => (
                    <div key={i} className="glass" style={{ padding: '30px' }}>
                       <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{member.name}</h4>
                       <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '800', letterSpacing: '0.1em' }}>{member.role}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- CONTACT FOOTER --- */}
      <footer id="contact" style={{ padding: '100px 0 60px', background: 'var(--primary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '100px' }}>
              <div>
                 <h2 className="section-title" style={{ fontSize: '4rem' }}>Scale Your <br /> Supply Chain.</h2>
                 <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px' }}>Partner with Bridge Initiative today.</p>
                 
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
                    <div>
                       <h4 style={{ color: 'var(--accent)', marginBottom: '15px', letterSpacing: '0.1em' }}>LAHORE</h4>
                       <p style={{ fontSize: '0.9rem', opacity: 0.6, lineHeight: '1.6' }}>
                          149-E Valencia Town, Lahore<br />
                          Warehouse: 2-KM Raiwind Road
                       </p>
                    </div>
                    <div>
                       <h4 style={{ color: 'var(--accent)', marginBottom: '15px', letterSpacing: '0.1em' }}>ISLAMABAD</h4>
                       <p style={{ fontSize: '0.9rem', opacity: 0.6, lineHeight: '1.6' }}>
                          128-B, St 42, F10/4, Islamabad<br />
                          Warehouse: 3-KM Kohat Road
                       </p>
                    </div>
                 </div>
              </div>

              <div className="glass" style={{ padding: '50px' }}>
                 <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
                    {/* Hidden BCC Field for administrative routing */}
                    <input type="hidden" name="_bcc" value="primelogicx@gmail.com" />
                    
                    <div style={{ display: 'grid', gap: '8px' }}>
                       <label style={{ fontSize: '0.7rem', fontWeight: '900', opacity: 0.4 }}>INQUIRY TYPE</label>
                       <select name="inquiry_type" style={{ 
                          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
                          padding: '15px', borderRadius: '12px', color: 'white', appearance: 'none',
                          cursor: 'pointer'
                       }}>
                          <option style={{ background: '#0A041A' }}>Sourcing + DDP</option>
                          <option style={{ background: '#0A041A' }}>Logistics Only</option>
                          <option style={{ background: '#0A041A' }}>Customs Clearance</option>
                       </select>
                    </div>
                    <input name="name" type="text" placeholder="Full Name" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px', color: 'white' }} />
                    <input name="email" type="email" placeholder="Business Email" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px', color: 'white' }} />
                    <textarea name="message" placeholder="Tell us about your sourcing needs..." required rows={4} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px', color: 'white' }} />
                    <button type="submit" className="btn-premium btn-accent">Submit Inquiry</button>
                 </form>
                 
                 <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                    <div>
                       <p style={{ fontSize: '0.6rem', fontWeight: '900', opacity: 0.4, letterSpacing: '0.1em' }}>DIRECT LINE</p>
                       <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>+92 332 5888888</p>
                       <p style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '8px' }}>WhatsApp Enabled</p>
                    </div>
                    <div>
                       <p style={{ fontSize: '0.6rem', fontWeight: '900', opacity: 0.4, letterSpacing: '0.1em' }}>WECHAT ID</p>
                       <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>13059187843</p>
                       <p style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '8px' }}>China Ops Support</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div style={{ marginTop: '100px', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <p style={{ fontSize: '0.7rem', opacity: 0.3 }}>© 2026 BRIDGE INITIATIVE PVT LTD. ALL RIGHTS RESERVED. REGISTERED IN CHINA & PAKISTAN.</p>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
