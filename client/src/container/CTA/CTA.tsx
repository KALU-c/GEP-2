import "./CTA.css";
import { images } from "../../constants";
import useCustomNavigate from "../../Hooks/useCustomNavigate";

interface Props {
  className?: string;
}

const Cta = ({ className }: Props) => {
  const { goToRegister } = useCustomNavigate();
  return (
    <div className="section-padding">
      <div className={className + " row cta"}>
        <div className="col-lg-8 col-12">
          <h3>Join Us for Spiritual Growth</h3>

          <p className="pt-2 pb-4">
            Contact us today to learn more about how our Generational
            Empowerment Program (GEP) can nurture your spiritual development and
            empower your life.
          </p>
          <button className="btn-main" onClick={goToRegister}>
            Get Involved
          </button>
        </div>
        <div className="col-lg-4 d-lg-flex d-none">
          <img src={images.thingshappen} alt="thingshappen" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
