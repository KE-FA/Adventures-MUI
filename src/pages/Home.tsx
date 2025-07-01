import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedDestinations from '../components/FeaturedDest';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedDestinations />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;
