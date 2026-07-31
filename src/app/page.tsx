import Header from '../components/Header';
import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import SpeakersSection from '../components/SpeakersSection';
import ScheduleSection from '../components/ScheduleSection';
import Pillars from '../components/Pillars';
import AudienceSection from '../components/AudienceSection';
import ExperienceSection from '../components/ExperienceSection';
import InvestmentSection from '../components/InvestmentSection';
import TicketsSection from '../components/TicketsSection';
import FAQSection from '../components/FAQSection';
import OrganizerSection from '../components/OrganizerSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import StickyMobileCTA from '../components/StickyMobileCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <SpeakersSection />
        <ScheduleSection />
        <Pillars />
        <AudienceSection />
        <ExperienceSection />
        <InvestmentSection />
        <TicketsSection />
        <FAQSection />
        <OrganizerSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
