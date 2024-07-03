import { Headings } from "../../components";
import { data } from "../../constants";
import Carousel from "react-bootstrap/Carousel";
import "./Testimonials.css";

interface Props {
  hideHeader?: boolean;
}

const Testimonials = ({ hideHeader }: Props) => {
  return (
    <div className="section-padding" id="testimonials">
      {!hideHeader && (
        <Headings
          title="Testimonials"
          text="Discover Stories of Transformation: Hear from Participants about Their Journey with Our Generational Empowerment Program at HMYC"
        />
      )}

      <div className="carousel-bg">
        <Carousel>
          {data.Testimonials.map((item, index) => (
            <Carousel.Item className="carousel-box" interval={6000} key={index}>
              <Carousel.Caption>
                <p className="speech-bubble"> {item.testimonial}</p>
                <div className="carousel-name">{item.name}</div>
                <div className="carousel-position">{item.position}</div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
