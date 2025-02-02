import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
    </main>
  );
}
