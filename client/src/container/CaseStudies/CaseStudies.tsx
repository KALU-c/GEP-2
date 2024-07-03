import { Headings, IconScroll } from '../../components';
import { data } from '../../constants';
import './CaseStudies.css';
import { FiArrowUpRight } from 'react-icons/fi'


const CaseStudies = () => {
  return (
    <div className="section-padding" id="use-cases">

<Headings title="Stories of Change" text="See how our Generational Empowerment Program (GEP) has made a difference in people's lives through our stories." />


        <div className="case-studies">

          {data.CaseStudies.map(({ text, link }, index) => (
            <div key={index} className="case-studies-item">
              <p>{text}</p>
              <a href={link} >Learn more <FiArrowUpRight /></a>
            </div>
          ))}
        </div>
        
    <IconScroll />
   
      </div>

  )
}

export default CaseStudies