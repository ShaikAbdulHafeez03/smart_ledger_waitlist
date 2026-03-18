import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import FeaturesTabs from './components/FeaturesTabs';
import ChatMockup from './components/ChatMockup';
import Timeline from './components/Timeline';
import WaitlistFooter from './components/WaitlistFooter';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <FeaturesTabs />
      <ChatMockup />
      <Timeline />
      <WaitlistFooter />
    </main>
  );
}
