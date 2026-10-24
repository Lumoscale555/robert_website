"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  FileCheck2,
  HeartHandshake,
  Lock,
  Menu,
  Phone,
  RotateCcw,
  Shield,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users2,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const bookingUrl = "https://billionairecoachbobmiller.net/calendar";

const processSteps = [
  {
    number: "01",
    phaseTag: "Step 01 / Phase I • Diagnostic & Foundation",
    title: "Coach Overview & Purpose Alignment",
    tagline: "Discover Your God-Given Purpose & Strategic Path",
    summary:
      "Begin with Bob's foundational book and an extensive diagnostic assessment to uncover your baseline, pinpoint high-level blindspots, and architect your direct path to millionaire/billionaire status.",
    items: [
      "Millionaire/Billionaire Coaching Assessment (MBCA)",
      "Private 1-on-1 Comprehensive Coaching Diagnostic Session",
      "The Seven (7) Tangible Benefits of Elite Coaching, Consulting & Advising",
      "The Complete Bob Miller 4-Step Mental Operating Architecture",
    ],
    note: "STEP 1 is included complimentary with the purchase of Step 3.",
    quote:
      "“The purpose of my book is to assist clients in discovering their purpose in GOD & to accomplish everything GOD created them to do.”",
    image: "/images/bob_miller_book_luxury.jpg",
    badgeColor: "#315741",
  },
  {
    number: "02",
    phaseTag: "Step 02 / Phase II • Habit & Strategy Audit",
    title: "CHPC Client Analysis & Habit Audit",
    tagline: "Empirical Auditing of Focus, Habits & Vitality",
    summary:
      "A rigorous analysis using Certified High Performance Coaching protocols to evaluate habits, executive energy, and strategic blindspots prior to accelerated scaling.",
    items: [
      "Whole Life Comprehensive Assessment Protocol",
      "High Performance Habits Diagnostic (CHPC Benchmark)",
      "High Performance Strategic Alignment Session",
      "‘Six Secrets of the World's Highest Performing Achievers’",
      "Deep Study: ‘How I Became a Millionaire (and you can too!)’",
    ],
    note: "STEP 2 is included complimentary with the purchase of Step 3.",
    image: "/images/chpc_audit_suite.jpg",
    badgeColor: "#2b4c39",
  },
  {
    number: "03",
    phaseTag: "Step 03 / Phase III • The Core Engine",
    title: "CHPC Become — Purpose & Operating Mastery",
    tagline: "12 Certified One-on-One High Performance Sessions",
    summary:
      "The flagship transformation. Twelve private sessions embedding the proven Standard Mental Operating System (MOS) that enables continuous expansion of both wealth and vital well-being.",
    items: [
      "12 Certified High Performance Coaching Sessions",
      "Millionaire & Billionaire Coaching Track Level I Mastery",
      "Installation of the Personal Standard Mental Operating System (MOS)",
      "Executive decision-making resilience & stamina protocols",
    ],
    note: "The primary engine included in all core program agreements.",
    image: "/images/luxury_wealth_currency.jpg",
    badgeColor: "#1f3b2b",
  },
  {
    number: "04",
    phaseTag: "Step 04 / Phase IV • Legacy & Expansion",
    title: "Be, Retire & Accomplish",
    tagline: "Levels I through V Master Progression",
    summary:
      "Advanced multi-tiered advisory designed for multi-generational wealth stewardship, peace of mind, strategic acquisitions, and fulfilling retirement without regret.",
    items: [
      "Millionaire/Billionaire Coaching Level I",
      "Millionaire/Billionaire Coaching Level II",
      "Millionaire/Billionaire Coaching Level III",
      "Millionaire/Billionaire Coaching Level IV",
      "Millionaire/Billionaire Coaching Level V (Retire & Accomplish)",
    ],
    note: "Available through extended 6, 9, and 12-month program agreements.",
    image: "/images/private_advisory_suite.jpg",
    badgeColor: "#172a20",
  },
];

const transformationOutcomes = [
  {
    id: "01",
    tag: "Clarity",
    title: "Absolute Certainty on Bold Dreams",
    text: "You will never again wonder what it really takes to succeed when starting a new project at work, launching a venture, or pursuing a bold new dream.",
  },
  {
    id: "02",
    tag: "Habits",
    title: "Reliable, Science-Backed Habits",
    text: "Empowered with a set of reliable habits that research has proven to work across a broad range of personalities to produce extraordinary long-term results.",
  },
  {
    id: "03",
    tag: "Stamina",
    title: "Renewed Vital Energy & Direction",
    text: "Feel a renewed sense of vital energy and confidence knowing precisely where to focus your attention, energy, and service for maximum leverage.",
  },
  {
    id: "04",
    tag: "Growth",
    title: "Sustained Growth After Initial Success",
    text: "Understand how to keep expanding after you have already enjoyed initial financial success, avoiding stagnation and complacency.",
  },
  {
    id: "05",
    tag: "Mindset",
    title: "Elite High-Stakes Mental Acuity",
    text: "When competing and operating with others at the highest levels of achievement, you will know exactly how to think and what to execute.",
  },
  {
    id: "06",
    tag: "Consistency",
    title: "Consistently at Your Peak",
    text: "Step forward knowing: 'I finally know how to consistently be at my best across all domains of my life.'",
  },
  {
    id: "07",
    tag: "Resilience",
    title: "Unshakable Problem-Solving",
    text: "Unwavering confidence in your ability to figure things out and overcome any adversity on the path of success for the rest of your life.",
  },
  {
    id: "08",
    tag: "Operating System",
    title: "Standard Mental Operating System",
    text: "Armed with a standardized cognitive framework that reliably produces long-term success across multiple business and personal situations.",
  },
  {
    id: "09",
    tag: "Track Record",
    title: "Proven Across Fellow Millionaires",
    text: "Habits proven in the real world to elevate peers from fellow millionaires and potential millionaires to billionaire-level operators.",
  },
  {
    id: "10",
    tag: "Fulfillment",
    title: "Full Potential with Deep Fulfillment",
    text: "Live with your full capability engaged, vital well-being, ability to lead others to excellence, and profound inner satisfaction.",
  },
  {
    id: "11",
    tag: "Transformation",
    title: "Entering a Transformational Era",
    text: "Deploy high-performance habits with disciplined intention and enter a magnificent new chapter of influence and accomplishment.",
  },
];

const programs = [
  {
    name: "The Foundation",
    duration: "3 Months",
    investment: "$100,000",
    cadence: "Quarterly Foundation",
    scope: "Steps 1, 2, and 3 plus Millionaire/Billionaire Coaching I.",
    features: [
      "Millionaire/Billionaire Coaching Assessment (MBCA)",
      "Whole Life & Habit Audit Protocols",
      "12 Certified High Performance Coaching Sessions",
      "Millionaire/Billionaire Coaching Level I",
      "Direct private communication channel with Bob Miller",
      "10% Donated to Homeless Veterans of America",
    ],
    highlight: false,
  },
  {
    name: "The Momentum",
    duration: "6 Months",
    investment: "$150,000",
    cadence: "Bi-Annual Acceleration",
    scope: "Steps 1, 2, and 3 plus Millionaire/Billionaire Coaching I and II.",
    features: [
      "Everything in The Foundation",
      "Millionaire/Billionaire Coaching Level II Progression",
      "Mid-year strategic review & asset allocation audit",
      "Advanced executive habit & resilience coaching",
      "Priority advisory access and scheduling",
      "10% Donated to Homeless Veterans of America",
    ],
    highlight: false,
  },
  {
    name: "The Expansion",
    duration: "9 Months",
    investment: "$200,000",
    cadence: "Multi-Quarter Scaling",
    scope: "Steps 1, 2, and 3 plus Millionaire/Billionaire Coaching I, II, and III.",
    features: [
      "Everything in The Momentum",
      "Millionaire/Billionaire Coaching Level III Integration",
      "Wealth expansion & executive decision sparring",
      "Leadership influence & organizational peak performance",
      "Direct VIP access and advisory reviews",
      "10% Donated to Homeless Veterans of America",
    ],
    highlight: false,
  },
  {
    name: "The Full Practice",
    duration: "12 Months",
    investment: "$250,000",
    cadence: "Annual Flagship Partnership",
    scope: "Complete progression: Steps 1, 2, 3 and Coaching I through V.",
    features: [
      "Steps 1, 2, and 3 completely included",
      "Complete Progression: Coaching Levels I, II, III, IV & V",
      "The comprehensive 'Be, Retire & Accomplish' playbook",
      "Year-round confidential private advisory partnership",
      "Highest priority VIP concierge access & reviews",
      "10% Donated to Homeless Veterans of America",
    ],
    highlight: true,
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [stepDirection, setStepDirection] = useState(1);
  const [selectedPlanIdx, setSelectedPlanIdx] = useState(3);
  const [activeOutcomeFilter, setActiveOutcomeFilter] = useState("all");
  const processTrackerRef = useRef<HTMLDivElement>(null);
  const activeStepRef = useRef(0);
  const processWheelLockedRef = useRef(false);
  const processWheelReleaseTimerRef = useRef<number | null>(null);
  const { scrollY } = useScroll();
  const updateProcessStep = (nextIndex: number) => {
    const boundedIndex = Math.max(0, Math.min(processSteps.length - 1, nextIndex));
    const currentIndex = activeStepRef.current;

    if (currentIndex === boundedIndex) return;

    activeStepRef.current = boundedIndex;
    setStepDirection(boundedIndex > currentIndex ? 1 : -1);
    setActiveStepIdx(boundedIndex);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const scrollToTarget = (target: HTMLElement, duration: number) => {
      const smoothScroller = (window as unknown as {
        lenis?: { scrollTo: (element: HTMLElement, options: { offset: number; duration: number }) => void };
      }).lenis;

      if (smoothScroller) {
        smoothScroller.scrollTo(target, { offset: -92, duration });
        return;
      }

      window.scrollTo({
        top: window.scrollY + target.getBoundingClientRect().top - 92,
        behavior: "smooth",
      });
    };

    const moveToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) scrollToTarget(section, 0.55);
    };

    const handleProcessWheel = (event: WheelEvent) => {
      if (window.innerWidth <= 1080 || event.ctrlKey || event.deltaY === 0) return;

      const tracker = processTrackerRef.current;
      const stage = tracker?.querySelector<HTMLElement>(".process-scroll-stage");
      if (!tracker || !stage) return;

      const trackerBounds = tracker.getBoundingClientRect();
      const stageBounds = stage.getBoundingClientRect();
      const direction = event.deltaY > 0 ? 1 : -1;
      const currentStep = activeStepRef.current;
      const isPinned = stageBounds.top <= 96 && trackerBounds.bottom >= stageBounds.height + 92;
      const isReturningFromNextSection =
        direction < 0 &&
        currentStep > 0 &&
        trackerBounds.top < window.innerHeight &&
        trackerBounds.bottom > -stageBounds.height;

      if (!isPinned && !isReturningFromNextSection) return;

      // Keep Lenis from receiving this wheel event while a framework card is fixed.
      event.preventDefault();
      event.stopImmediatePropagation();

      if (processWheelReleaseTimerRef.current) {
        window.clearTimeout(processWheelReleaseTimerRef.current);
      }

      if (processWheelLockedRef.current) {
        processWheelReleaseTimerRef.current = window.setTimeout(() => {
          processWheelLockedRef.current = false;
        }, 220);
        return;
      }

      processWheelLockedRef.current = true;
      processWheelReleaseTimerRef.current = window.setTimeout(() => {
        processWheelLockedRef.current = false;
      }, 220);

      if (isReturningFromNextSection) {
        scrollToTarget(tracker, 0.15);
        updateProcessStep(currentStep - 1);
        return;
      }

      if (direction > 0 && currentStep === processSteps.length - 1) {
        moveToSection("outcomes");
        return;
      }

      if (direction < 0 && currentStep === 0) {
        moveToSection("approach");
        return;
      }

      updateProcessStep(currentStep + direction);
    };

    window.addEventListener("wheel", handleProcessWheel, { capture: true, passive: false });
    return () => {
      window.removeEventListener("wheel", handleProcessWheel, { capture: true });
      if (processWheelReleaseTimerRef.current) {
        window.clearTimeout(processWheelReleaseTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="site-canvas">
      {/* TOP TICKER BAR */}
      <div className="luxury-ticker">
        <div className="ticker-inner">
          <span className="ticker-live-dot" />
          <span className="ticker-bold">Confidential High-Performance Advisory</span>
          <span className="ticker-divider">•</span>
          <span>Silicon Valley &bull; Santa Clara, CA</span>
          <span className="ticker-divider">•</span>
          <span className="ticker-lime-tag">10% Donated to Homeless Veterans of America, Inc.</span>
        </div>
      </div>

      {/* FLOATING HEADER */}
      <header className={`floating-header ${scrolled ? "floating-header-scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#top" className="brand-lockup">
            <span className="brand-crest">BM</span>
            <div className="brand-text">
              <span className="brand-title">Bob Miller</span>
              <span className="brand-desc">CHPC™ • Millionaire Coach</span>
            </div>
          </a>

          <nav className="header-links">
            <a href="#approach">Philosophy</a>
            <a href="#process">The 4-Step Process</a>
            <a href="#outcomes">11 Outcomes</a>
            <a href="#programs">Agreements</a>
            <a href="#impact">Charity Impact</a>
          </nav>

          <div className="header-actions">
            <a href="tel:4087724321" className="call-pill" title="Call directly">
              <Phone size={13} />
              <span>408-772-4321</span>
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-moss"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight size={15} />
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <a onClick={() => setMenuOpen(false)} href="#approach">Philosophy</a>
            <a onClick={() => setMenuOpen(false)} href="#process">The 4-Step Process</a>
            <a onClick={() => setMenuOpen(false)} href="#outcomes">11 Outcomes</a>
            <a onClick={() => setMenuOpen(false)} href="#programs">Agreements &amp; Pricing</a>
            <a onClick={() => setMenuOpen(false)} href="#impact">Charity Impact</a>
            <a onClick={() => setMenuOpen(false)} href="#contact">Contact Bob Miller</a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-moss btn-block"
            >
              Book Private Consultation <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="top">
        {/* =========================================
            SECTION 1: HERO SECTION
           ========================================= */}
        <section className="hero-zone">
          <div className="hero-container">
            {/* Left Column: Clean Typography (No orphan letters) */}
            <div className="hero-left">
              <motion.div
                className="hero-kicker"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles size={14} className="kicker-star" />
                <span>Fellow Millionaires, Potential Millionaires &amp; Billionaires</span>
              </motion.div>

              <motion.h1
                className="hero-headline"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Become, Be &amp; Retire <br />
                As A <span className="serif-accent">Millionaire</span> Or{" "}
                <span className="serif-accent">Billionaire.</span>
              </motion.h1>

              <motion.p
                className="hero-lead-text"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
              >
                A confidential, elite high-performance advisory with{" "}
                <strong>Bob Miller, B.A., M.A.</strong>, Certified High Performance Coach™ (CHPC).
                Elevating your clarity, energy, net worth, and God-given purpose.
              </motion.p>

              {/* 3 Metrics */}
              <motion.div
                className="hero-metrics"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28 }}
              >
                <div className="metric-cell">
                  <span className="metric-val">12</span>
                  <span className="metric-tag">Certified CHPC Sessions</span>
                </div>
                <div className="metric-divider" />
                <div className="metric-cell">
                  <span className="metric-val">4-Step</span>
                  <span className="metric-tag">Proprietary Architecture</span>
                </div>
                <div className="metric-divider" />
                <div className="metric-cell">
                  <span className="metric-val">10%</span>
                  <span className="metric-tag">To Homeless Veterans</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.35 }}
              >
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-moss btn-lg"
                >
                  <span>Book Private Strategy Call</span>
                  <ArrowUpRight size={18} />
                </a>
                <a href="#process" className="btn btn-outline btn-lg">
                  <span>Explore The 4-Step Process</span>
                  <ArrowDownRight size={18} />
                </a>
              </motion.div>

              <div className="hero-cert-strip">
                <Shield size={16} className="cert-shield" />
                <span>Certified High Performance Coach™ (CHPC) &bull; Change Dial Certified</span>
              </div>
            </div>

            {/* Right Column: Clear Face Portrait of Bob Miller with Luxury Currency Backdrop */}
            <div className="hero-right">
              <motion.div
                className="hero-coach-showcase"
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Clear, Prominent Coach Portrait - Bob Miller's face clearly visible */}
                <div className="coach-portrait-box">
                  <Image
                    src="/images/bob_miller_executive.jpg"
                    alt="Bob Miller, B.A., M.A. Certified High Performance Coach"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 540px"
                    className="coach-portrait-photo"
                  />
                  <div className="portrait-lighting-overlay" />

                  {/* Luxury Floating Money Badge */}
                  <motion.div
                    className="floating-money-badge"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                  >
                    <div className="money-badge-thumb">
                      <Image
                        src="/images/luxury_wealth_currency.jpg"
                        alt="Wealth and high net worth"
                        fill
                        sizes="90px"
                        className="money-thumb-img"
                      />
                    </div>
                    <div className="money-badge-info">
                      <span className="money-badge-kicker">High-Performance Practice</span>
                      <strong>Become &bull; Be &bull; Retire</strong>
                      <span className="live-status-pill">● Accepting Private Clients</span>
                    </div>
                  </motion.div>

                  {/* Top Seal */}
                  <div className="chpc-crest-badge">
                    <Trophy size={14} />
                    <span>CHPC™ Verified</span>
                  </div>
                </div>

                {/* Portrait Sub-Bar */}
                <div className="coach-profile-footer">
                  <div>
                    <h3>Bob Miller, B.A., M.A.</h3>
                    <p>Certified High Performance Coach™ &bull; Millionaire/Billionaire Coach</p>
                  </div>
                  <a href="tel:4087724321" className="btn btn-outline-sm">
                    <Phone size={12} />
                    <span>Call Direct</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            SECTION 2: THE HIGH PERFORMANCE PHILOSOPHY
           ========================================= */}
        <section className="section-wrap" id="approach">
          <Reveal>
            <div className="section-head-balanced">
              <span className="section-eyebrow">The High Performance Philosophy</span>
              <h2 className="section-title-balanced">
                Succeed beyond standard norms, <br />
                <span className="serif-accent">consistently</span> and over the long term.
              </h2>
              <p className="section-subtext-balanced">
                High performance is not just accomplishment in one isolated profession. It is an elevated
                lifestyle: ongoing full engagement, joy, confidence, and habits that enrich the full spectrum of your life.
              </p>
            </div>
          </Reveal>

          {/* 3 Premium Balanced Visual Cards */}
          <div className="philosophy-triplet">
            {/* Card 1: What is High Performance */}
            <Reveal className="triplet-card" delay={0.1}>
              <div className="triplet-media">
                <Image
                  src="/images/high_performance_mind.jpg"
                  alt="Mindset & Human High Performance"
                  fill
                  sizes="(max-width: 800px) 100vw, 380px"
                  className="triplet-photo"
                />
                <span className="triplet-tag">Mindset &amp; Operating System</span>
              </div>
              <div className="triplet-body">
                <h3>What is a High Performer?</h3>
                <p>
                  Someone who creates ever-increasing levels of both <em>well-being</em> and{" "}
                  <em>external success</em> over the long term, breaking norms with sustainable vitality.
                </p>
                <div className="triplet-points">
                  <div className="triplet-point">
                    <Zap size={14} className="point-icon" />
                    <span>Vital physical &amp; mental energy without burnout</span>
                  </div>
                  <div className="triplet-point">
                    <Compass size={14} className="point-icon" />
                    <span>Deep spiritual purpose and strategic focus</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Bob Miller Wisdom Quote Card */}
            <Reveal className="triplet-card triplet-card-moss" delay={0.2}>
              <div className="moss-quote-content">
                <div className="moss-quote-symbol">&ldquo;</div>
                <blockquote className="moss-quote-text">
                  The goal is not to do more. It is to create a High Performance Life in which you
                  experience full engagement, joy, and the confidence of being your best self.
                </blockquote>
                <div className="moss-quote-by">
                  <strong>Bob Miller, B.A., M.A.</strong>
                  <span>Certified High Performance Coach™ &bull; Advisor</span>
                </div>

                <div className="moss-stat-trio">
                  <div className="stat-trio-box">
                    <strong>12</strong>
                    <span>Sessions</span>
                  </div>
                  <div className="stat-trio-box">
                    <strong>100%</strong>
                    <span>Empirical</span>
                  </div>
                  <div className="stat-trio-box">
                    <strong>10%</strong>
                    <span>Donated</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: The Book & Purpose */}
            <Reveal className="triplet-card" delay={0.3}>
              <div className="triplet-media">
                <Image
                  src="/images/bob_miller_book_luxury.jpg"
                  alt="How I Became a Millionaire Book by Bob Miller"
                  fill
                  sizes="(max-width: 800px) 100vw, 380px"
                  className="triplet-photo"
                />
                <span className="triplet-tag">Authored by Bob Miller</span>
              </div>
              <div className="triplet-body">
                <h3>“How I Became a Millionaire”</h3>
                <p>
                  <em>(and you can too!)</em> &mdash; Discover your purpose in God and build lasting
                  wealth so that in the end of life, you hear: <em>“Well done, my good and faithful servant!”</em>
                </p>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="triplet-link"
                >
                  <span>Explore in Step 1</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =========================================
            SECTION 3: A PROVEN ARCHITECTURE — STEP-BY-STEP PROGRESSION
           ========================================= */}
        <section className="section-wrap process-scroll-section" id="process">
          <Reveal>
            <div className="section-head-split">
              <div>
                <span className="section-eyebrow">A Proven Architecture</span>
                <h2 className="section-title-balanced" style={{ textAlign: "left", margin: 0 }}>
                  The Bob Miller <br />
                  <span className="serif-accent">Four-Step Framework.</span>
                </h2>
              </div>
              <div>
                <p className="section-subtext-balanced" style={{ textAlign: "left" }}>
                  A structured, empirical roadmap engineered specifically for high-net-worth operators.
                  Select any phase below to examine the diagnostic assessments, mental operating architecture,
                  and multi-generational wealth stewardship.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Interactive Phase Showcase */}
          <div className="process-normal-container process-scroll-tracker" ref={processTrackerRef}>
            <div className="process-scroll-stage">
              <div className="process-scroll-guidance" aria-hidden="true">
                <span>Scroll to explore</span>
                <span className="process-scroll-guidance-line" />
                <span>{String(activeStepIdx + 1).padStart(2, "0")} / 04</span>
              </div>
            {/* Executive Phase Selector Bar (4 Interactive Phases) */}
            <div className="process-phase-selector-bar">
              {processSteps.map((step, idx) => {
                const isActive = activeStepIdx === idx;
                const phaseSub = step.phaseTag.split("•")[1]?.trim() || `Phase ${step.number}`;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => updateProcessStep(idx)}
                    className={`process-phase-tab-btn ${isActive ? "active" : ""}`}
                    aria-pressed={isActive}
                  >
                    <div className="phase-tab-top">
                      <span className="phase-tab-badge">Step {step.number}</span>
                      <span className="phase-tab-tag">{phaseSub}</span>
                    </div>
                    <strong className="phase-tab-title">{step.title}</strong>
                    {isActive && (
                      <motion.div
                        layoutId="activePhaseGlowBar"
                        className="phase-tab-indicator"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mobile-step-arrow-nav" aria-label="Framework step controls">
              <button
                type="button"
                onClick={() => updateProcessStep(activeStepIdx - 1)}
                disabled={activeStepIdx === 0}
                aria-label="Previous step"
              >
                <ChevronLeft size={19} />
              </button>
              <span>Step {activeStepIdx + 1} of {processSteps.length}</span>
              <button
                type="button"
                onClick={() => updateProcessStep(activeStepIdx + 1)}
                disabled={activeStepIdx === processSteps.length - 1}
                aria-label="Next step"
              >
                <ChevronRight size={19} />
              </button>
            </div>

            {/* Active Step Showcase Card */}
            <div className="sticky-step-card-holder">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepIdx}
                  custom={stepDirection}
                  variants={{
                    enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 44 : -44, y: 10 }),
                    center: { opacity: 1, x: 0, y: 0 },
                    exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -44 : 44, y: -10 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="step-hero-card"
                  aria-live="polite"
                >
                  <div className="step-card-left">
                    <div className="step-indicator-row">
                      <span className="step-number-tag">Step {processSteps[activeStepIdx].number}</span>
                      <span className="step-phase-pill">{processSteps[activeStepIdx].phaseTag}</span>
                      <span className="step-counter-tag">Phase {activeStepIdx + 1} of 4</span>
                    </div>

                    <h3 className="step-title-big">{processSteps[activeStepIdx].title}</h3>
                    <span className="step-subtitle-tag">{processSteps[activeStepIdx].tagline}</span>
                    <p className="step-body-desc">{processSteps[activeStepIdx].summary}</p>

                    {processSteps[activeStepIdx].quote && (
                      <div className="step-mission-quote">
                        <p>{processSteps[activeStepIdx].quote}</p>
                      </div>
                    )}

                    <div className="step-deliverables-panel">
                      <span className="deliverables-heading">Deliverables &amp; Sessions Included:</span>
                      <ul className="deliverables-grid">
                        {processSteps[activeStepIdx].items.map((item) => (
                          <li key={item}>
                            <Check size={16} className="deliv-check-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="step-bottom-actions">
                      <span className="step-note-txt">{processSteps[activeStepIdx].note}</span>
                      <div className="step-direction-controls">
                        {activeStepIdx > 0 && (
                          <button
                            type="button"
                            onClick={() => updateProcessStep(activeStepIdx - 1)}
                            className="btn btn-outline-sm"
                          >
                            <ChevronLeft size={14} />
                            <span>Previous Step</span>
                          </button>
                        )}
                        {activeStepIdx < processSteps.length - 1 ? (
                          <button
                            type="button"
                            onClick={() => updateProcessStep(activeStepIdx + 1)}
                            className="btn btn-moss btn-sm"
                          >
                            <span>Next: Step 0{activeStepIdx + 2}</span>
                            <ChevronRight size={14} />
                          </button>
                        ) : (
                          <a
                            href={bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-moss btn-sm"
                          >
                            <span>Enroll In Program</span>
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="step-card-right">
                    <div className="step-artwork-box">
                      <Image
                        src={processSteps[activeStepIdx].image}
                        alt={processSteps[activeStepIdx].title}
                        fill
                        sizes="(max-width: 900px) 100vw, 480px"
                        className="step-artwork-photo"
                      />
                      <div className="step-artwork-vignette">
                        <span className="step-vignette-label">Phase {processSteps[activeStepIdx].number} &bull; Focus</span>
                        <strong className="step-vignette-title">{processSteps[activeStepIdx].title}</strong>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              </div>
          </div>
          </div>
        </section>

        {/* =========================================
            SECTION 4: TANGIBLE LIFE TRANSFORMATIONS (CLEAN EXECUTIVE SHOWCASE)
           ========================================= */}
        <section className="section-wrap" id="outcomes">
          <Reveal>
            <div className="section-head-balanced">
              <span className="section-eyebrow">Tangible Life Transformations</span>
              <h2 className="section-title-balanced">
                Empirical Long-Term <br />
                <span className="serif-accent">Results &amp; Permanent Shifts.</span>
              </h2>
              <p className="section-subtext-balanced">
                By completing the Bob Miller Four-Step Framework, you permanently install an elite mental operating
                system (MOS). Below are the 11 verified shifts experienced by high-net-worth clients across their career, wealth, and inner peace.
              </p>
            </div>
          </Reveal>

          {/* High-Clarity 3-Column Outcomes Grid */}
          <div className="trans-clear-grid">
            {transformationOutcomes.map((outcome, idx) => (
              <motion.div
                key={outcome.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                className="trans-clear-card"
              >
                    <div className="trans-card-top-row">
                      <div className="trans-num-box">{outcome.id}</div>
                      <span className="trans-pill-tag">{outcome.tag}</span>
                    </div>

                    <h3 className="trans-card-title">{outcome.title}</h3>
                    <p className="trans-card-text">{outcome.text}</p>

                    <div className="trans-card-check-row">
                      <div className="trans-check-circle">
                        <Check size={13} />
                      </div>
                      <span>Verified Long-Term Shift</span>
                    </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Executive Assurance Banner with Booking Trigger */}
          <div className="trans-bottom-assurance">
            <div className="trans-assurance-text">
              <span className="trans-assurance-kicker">The Standard Cognitive Baseline</span>
              <h4>Experience permanent cognitive transformation in your personal &amp; financial life.</h4>
              <p>
                Unlike temporary motivation, Bob Miller's certified high-performance framework builds an unshakable operating baseline.
              </p>
            </div>
            <div className="trans-assurance-action">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-moss btn-lg"
              >
                <span>Schedule Confidential Diagnostic</span>
                <ArrowUpRight size={16} />
              </a>
              <span className="trans-assurance-footnote">Strictly Confidential &bull; Private 1-on-1</span>
            </div>
          </div>
        </section>

        {/* =========================================
            SECTION 5: OPTION 1 & OPTION 2 — LUXURY PRICING & STANDALONE DIAGNOSTIC
           ========================================= */}
        <section className="section-wrap" id="programs">
          <Reveal>
            <div className="section-head-balanced">
              <span className="section-eyebrow">Option 1: Private Coaching Agreements</span>
              <h2 className="section-title-balanced">
                Select Your <span className="serif-accent">Depth Of Practice.</span>
              </h2>
              <p className="section-subtext-balanced">
                Every advisory engagement includes Steps 1, 2, and 3. The duration determines your
                mastery progression into Millionaire and Billionaire Coaching Levels I through V.
              </p>
            </div>
          </Reveal>

          {/* 4 Program Agreements */}
          <div className="programs-quad-layout">
            {programs.map((plan, index) => {
              const isSelected = selectedPlanIdx === index;
              return (
                <motion.div
                  key={plan.name}
                  onClick={() => setSelectedPlanIdx(index)}
                  className={`plan-luxury-card ${plan.highlight ? "plan-flagship-card" : ""} ${isSelected ? "plan-selected-card" : ""}`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="plan-card-top">
                    <div className="plan-cadence-row">
                      <span className="plan-cadence-tag">{plan.cadence}</span>
                      {plan.highlight && (
                        <span className="flagship-chip">
                          <Sparkles size={11} />
                          <span>Flagship Tier</span>
                        </span>
                      )}
                    </div>
                    <h3 className="plan-title">{plan.name}</h3>
                    <div className="plan-pricing-display">
                      <span className="plan-amount">{plan.investment}</span>
                      <span className="plan-time">/ {plan.duration}</span>
                    </div>
                  </div>

                  <div className="plan-scope-box">
                    <strong>Inclusions:</strong>
                    <p>{plan.scope}</p>
                  </div>

                  <div className="plan-feature-items">
                    <ul>
                      {plan.features.map((feat) => (
                        <li key={feat}>
                          <Check size={14} className="feat-check-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${plan.highlight ? "btn-lime-accent" : "btn-moss"} btn-block`}
                  >
                    <span>Enroll In {plan.name}</span>
                    <ArrowUpRight size={15} />
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* OPTION 2: STANDALONE MBCA DIAGNOSTIC */}
          <Reveal delay={0.2}>
            <div className="option2-luxury-card">
              <div className="option2-card-grid">
                <div className="option2-card-left">
                  <div className="option2-badge-row">
                    <span className="option2-tag">Option 2 • Standalone Assessment</span>
                    <span className="option2-tag-sub">Full Tuition Credit Available</span>
                  </div>
                  <h3 className="option2-heading">
                    The Millionaire &amp; Billionaire <br />
                    Coaching Assessment (MBCA)
                  </h3>
                  <p className="option2-description">
                    Complete this comprehensive 360° diagnostic outside of the Four-Step Process to rigorously
                    evaluate your blind spots, answer high-stakes strategic questions, and receive a private one-on-one
                    consultation directly with Bob Miller.
                  </p>
                  <div className="option2-credit-box">
                    <Shield size={22} className="credit-shield-icon" />
                    <div>
                      <strong>100% Investment Credited</strong>
                      <p>
                        Your full $25,000 fee is immediately credited toward any Four-Step Process agreement
                        when you choose to enroll in a multi-month advisory tier.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="option2-card-right">
                  <div className="option2-cta-box">
                    <span className="option2-price-tag">Standalone Assessment Fee</span>
                    <div className="option2-price-huge">$25,000</div>
                    <span className="option2-donation-line">
                      Includes 10% direct donation to Homeless Veterans of America, Inc.
                    </span>
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-moss btn-lg btn-block"
                    >
                      <span>Complete The MBCA Assessment</span>
                      <ArrowUpRight size={17} />
                    </a>
                    <span className="option2-guarantee-note">
                      <Lock size={12} /> Strictly Confidential &bull; Private 1-on-1 Consultation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =========================================
            SECTION 6: REAL RESULTS • REAL IMPACT & 4-STEP PROCESS (SIMPLE & ANIMATED)
           ========================================= */}
        <section className="section-wrap" id="impact">
          <Reveal>
            <div className="section-head-balanced">
              <span className="section-eyebrow">Real Results • Real Impact &amp; Free Information</span>
              <h2 className="section-title-balanced">
                10% Veteran Commitment &amp; <br />
                <span className="serif-accent">The Free 4-Step Process Series.</span>
              </h2>
              <p className="section-subtext-balanced">
                Direct charitable giving from every coaching payment, paired with complimentary foundational training directly from Bob Miller.
              </p>
            </div>
          </Reveal>

          <div className="impact-compact-grid">
            <motion.article
              className="compact-impact-card compact-giving-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="compact-card-head">
                <span><HeartHandshake size={15} /> Real Impact</span>
                <span>01</span>
              </div>

              <div className="compact-giving-main">
                <div className="compact-percent">10<span>%</span></div>
                <div>
                  <h3>Committed to America&apos;s veterans.</h3>
                  <p>Every private coaching payment and assessment includes an automatic direct donation.</p>
                </div>
              </div>

              <div className="compact-partner-card">
                <ShieldCheck size={19} />
                <div>
                  <span>Official giving partner</span>
                  <strong>Homeless Veterans of America, Inc.</strong>
                </div>
                <Award size={18} />
              </div>

              <div className="compact-card-footer">
                <span>501(c)(3) nonprofit partner</span>
                <span>100% direct support</span>
              </div>
            </motion.article>

            <motion.article
              className="compact-impact-card compact-series-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="compact-card-head compact-series-head">
                <span><Sparkles size={14} /> Free Information</span>
                <span className="delivery-dot">Instant delivery</span>
              </div>

              <div className="compact-series-main">
                <div>
                  <h3>The Bob Miller <em>4-Step Process</em></h3>
                  <p>Free foundational training delivered directly to your inbox.</p>
                </div>

                <div className="compact-series-list">
                  <span><b>01</b> Full 4-Step Architecture</span>
                  <span><b>02</b> MBCA insights</span>
                  <span><b>03</b> Book excerpts</span>
                </div>
              </div>

              <motion.a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="compact-series-cta"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Me the Free 4-Step Series</span>
                <ArrowUpRight size={17} />
              </motion.a>
              <p className="compact-series-note"><Lock size={11} /> 100% free · zero obligation · confidential</p>
            </motion.article>
          </div>        </section>

        {/* =========================================
            SECTION 8: FREE CONFIDENTIAL ENROLLMENT SESSION & CONTACT
           ========================================= */}
        <section className="section-wrap" id="contact">
          <Reveal>
            <div className="contact-advisory-card">
              <div className="contact-details-col">
                <span className="contact-pretag-pill">Complimentary Strategy Session</span>
                <h2 className="contact-main-title">
                  Schedule a Free <br />
                  <span className="serif-accent">Confidential Enrollment Session.</span>
                </h2>
                <p className="contact-lead-para">
                  Take your next chapter seriously. Connect directly with Bob Miller for a private,
                  confidential discussion regarding your income, assets, and fit for the Four-Step Process.
                </p>

                <div className="direct-channels">
                  <a href="tel:4087724321" className="channel-box">
                    <div className="channel-icon-wrap">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="channel-label">Direct Phone / Text</span>
                      <strong className="channel-value">408-772-4321</strong>
                    </div>
                  </a>

                  <a href="mailto:BobMiller022002@yahoo.com" className="channel-box">
                    <div className="channel-icon-wrap">
                      <Compass size={18} />
                    </div>
                    <div>
                      <span className="channel-label">Direct Email</span>
                      <strong className="channel-value">BobMiller022002@yahoo.com</strong>
                    </div>
                  </a>
                </div>
              </div>

              <div className="contact-calendar-col">
                <div className="calendar-booking-card">
                  <span className="calendar-live-dot">● Real-time calendar availability</span>
                  <h3>Reserve Your 1-on-1 Session</h3>
                  <p>
                    Free confidential Millionaire and Billionaire Coaching Enrollment Session with Bob.
                  </p>

                  <div className="calendar-check-list">
                    <div className="cal-check">
                      <Check size={16} />
                      <span>100% Private, Professional &amp; Confidential</span>
                    </div>
                    <div className="cal-check">
                      <Check size={16} />
                      <span>Review your current performance baseline</span>
                    </div>
                    <div className="cal-check">
                      <Check size={16} />
                      <span>Discuss Option 1 (Coaching) vs. Option 2 (MBCA)</span>
                    </div>
                  </div>

                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-moss btn-lg btn-block"
                  >
                    <span>Schedule Free Session Now</span>
                    <ArrowUpRight size={18} />
                  </a>

                  <span className="calendar-footnote">
                    Location: Santa Clara, California / Global Private Video Call
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="luxury-site-footer">
        <div className="footer-container">
          <div className="footer-top-row">
            <div className="footer-brand-info">
              <span className="brand-crest">BM</span>
              <div>
                <strong>Bob Miller, B.A., M.A.</strong>
                <p>Certified High Performance Coach™ &bull; Millionaire/Billionaire Coach</p>
              </div>
            </div>
            <div className="footer-nav-menu">
              <a href="#approach">Philosophy</a>
              <a href="#process">4-Step Process</a>
              <a href="#outcomes">11 Outcomes</a>
              <a href="#programs">Agreements</a>
              <a href="#impact">Charity Impact</a>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Calendar
              </a>
            </div>
          </div>

          <div className="footer-bottom-row">
            <p>
              &copy; {new Date().getFullYear()} Bob Miller. All rights reserved. Certified High
              Performance Coach™ is a registered mark.
            </p>
            <p className="footer-vets-badge">
              10% of all payments proudly donated to Homeless Veterans of America, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}