import { Headings } from "../../components";
import { data } from "../../constants";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

import "./Programs.css";
import useCustomNavigate from "../../Hooks/useCustomNavigate";

interface Props {
  hideHeader?: boolean;
}

const Services = ({ hideHeader }: Props) => {
  const { goToCourses } = useCustomNavigate();

  return (
    <div id="services" className="d-block pt-md-4">
      {!hideHeader && (
        <Headings
          title="Our Program"
          text="At HMYC church, our Generational Empowerment Program (GEP) nurtures spiritual growth and empowers individuals across all ages through a range of engaging and supportive activities."
        />
      )}
      <div className="row">
        {data.ServicesData.map(
          ({ titleone, titletwo, itemclass, imgURL }, index) => (
            <div className="col-lg-6 col-12" key={index}>
              <div className={`row ${itemclass}`}>
                <div className="col-md-6 box">
                  <div>
                    {" "}
                    <span>{titleone} </span>
                    <span>{titletwo}</span>
                  </div>
                  <div className="readmore" onClick={goToCourses}>
                    {" "}
                    <BsFillArrowUpRightCircleFill /> Learn more{" "}
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <img src={imgURL} className="img-fluid img-services" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Services;
