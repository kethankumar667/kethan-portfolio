// src/App.js
import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { SkeletonGrid } from "./components/ui/skeleton";
import "./index.css";
const Experience = React.lazy(() => import("./components/Experience"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Education = React.lazy(() => import("./components/Education"));
const Certifications = React.lazy(() => import("./components/Certifications"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>
          Kethan Kumar - Frontend Developer | React & Next.js Specialist
        </title>
        <meta
          name="description"
          content="Welcome to Kethan Kumar's portfolio website. I'm a Frontend Developer skilled in React.js, Next.js, Redux, Recoil, and accessibility (WCAG 2.1). Explore my projects, experience, and journey toward becoming a full-stack MERN Developer."
        />
        <meta
          name="keywords"
          content="Kethan Kumar, Kethan, React Developer, Frontend Developer, Next.js Developer, MERN Stack Developer, Web Developer Portfolio, Accessibility, JavaScript, TypeScript"
        />
        <meta name="author" content="Kethan Kumar" />

        {/* Open Graph (for social media) */}
        <meta
          property="og:title"
          content="Kethan Kumar - Frontend Developer Portfolio"
        />
        <meta
          property="og:description"
          content="I'm Kethan Kumar, a Frontend Developer specializing in React.js and Next.js. Check out my portfolio to explore my projects, skills, and professional experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kethankumar.in" />
        <meta
          property="og:image"
          content="https://kethankumar.in/preview.png"
        />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kethan Kumar - Frontend Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Frontend Developer skilled in React.js, Next.js, and accessibility (WCAG 2.1). Explore my work and projects."
        />
        <meta
          name="twitter:image"
          content="https://kethankumar.in/preview.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://kethankumar.in" />

        {/* Structured Data (JSON-LD Schema) */}
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kethan Kumar",
      "url": "https://kethankumar.in",
      "sameAs": [
        "https://github.com/kethankumar667",
        "https://www.linkedin.com/in/kethan-kumar-gontla/",
        "https://x.com/kethan_codes"
      ],
      "jobTitle": "Frontend Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Intuitive Surgical (Client Project Experience)"
      },
      "description": "Portfolio of Kethan Kumar, Frontend Developer skilled in React.js, Next.js, Redux, Recoil, and web accessibility (WCAG 2.1). Passionate about full-stack development with MERN.",
      "knowsAbout": ["React.js", "Next.js", "Redux", "Recoil", "MERN Stack", "Accessibility", "JavaScript", "TypeScript"]
    }
  `}</script>

        {/* Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />
      <div className="main-content">
        <About />
        <Suspense
          fallback={
            <div className="container py-16">
              <SkeletonGrid count={6} />
            </div>
          }
        >
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
