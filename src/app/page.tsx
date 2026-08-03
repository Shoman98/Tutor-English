import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import AboutEka from '@/components/AboutEka';
import Interactive from '@/components/Interactive';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <AboutEka />
        <Interactive />
      </main>
      <Footer />
    </>
  );
}
