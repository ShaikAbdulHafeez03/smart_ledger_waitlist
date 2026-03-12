import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import ChatMockup from './components/ChatMockup';
import Timeline from './components/Timeline';
import WaitlistFooter from './components/WaitlistFooter';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <ChatMockup />
      <Timeline />
      <WaitlistFooter />
    </main>
  );
}
