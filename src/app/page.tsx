import Header from '@/components/layout/Header';
import { 
  Hero, 
  Mission, 
  HowItWorks, 
  WhyVeSustain, 
  VechainFuture,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <HowItWorks />
      <WhyVeSustain />
      <VechainFuture />
    </main>
  );
}
