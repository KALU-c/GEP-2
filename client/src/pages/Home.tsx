import { 
  Testimonials, 
  CaseStudies, 
  // Contact, 
  Footer, 
  Hero, 
  Process, 
  Programs, 
  Team , 
  Cta
} from '../container/index.ts';
import { Menu } from '../components';

const Home = () => {

  return (
    <div className="container">
    <Menu />
    <Hero />
    <Programs />
    <Cta />
    <CaseStudies />
    <Process />
    <Team />
    <Testimonials />
    {/* <Contact className='section-padding'/> */}
    <Footer />
  </div>
  )
};

export default Home;