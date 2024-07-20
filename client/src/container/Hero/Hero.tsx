import { images } from '../../constants';
// import {IconScroll} from '../../components';
import './Hero.css';
import useCustomNavigate from '../../Hooks/useCustomNavigate';

const Hero = () => {

  const { goToRegister } = useCustomNavigate();

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title"> Empowering Generations through Spiritual Growth </h1>
          <p className="py-4">Our GEP program at HMYC church nurtures spiritual development and empowers individuals across generations through engaging teachings, worship, and community support.</p>
          <button className="btn-main" onClick={goToRegister}>Join the Program</button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
      {/* <IconScroll /> */}
    </div>
    
  )
}

export default Hero