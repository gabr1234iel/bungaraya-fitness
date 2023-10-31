import ContactForm from './home/ContactForm';
import Hero from './home/Hero';
import Pricing from './home/Pricing';
import Gallery from './home/Gallery';
import MapComponent from './home/MapComponent';

export default function Home() {
    return (
      <>
        <Hero />
        <Gallery />
        <Pricing />
        <MapComponent isContactPage={true} />
        <ContactForm />
      </>
    );
  }