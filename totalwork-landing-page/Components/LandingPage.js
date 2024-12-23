import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SocialProof from "./SocialProof";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";
import "./LandingPage.css";

const LandingPage = () => (
  <div>
    <Navbar />
    <Hero />
    <SocialProof />
    <Benefits />
    <Testimonials />
    <Pricing />
    <FAQ />
    <CTA />
    <Footer />
  </div>
);

export default LandingPage;
