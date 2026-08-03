import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import AboutEka from '@/components/AboutEka';
import Journey from '@/components/Journey';
import Interactive from '@/components/Interactive';
import StudentStories from '@/components/StudentStories';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <AboutEka />
        <Journey />
        <Interactive />
        <StudentStories />
      </main>
      <Footer />
    </>
  );
}
