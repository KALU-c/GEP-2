import { Headings } from '../../components';
import { data } from '../../constants';
import { BsTelegram } from 'react-icons/bs';
import './Team.css';

const Team = () => {
  return (
    <div className="section-padding">
      <Headings title="Team" text="Discover the transformative impact of our Generational Empowerment Program at HMYC church" />


      <div className="row">
        {data.Team.map(({ name, position, info, foto, linkedin }, index) => (
          <div className="col-lg-4 col-md-6 col-12" key={index}>
            <div className="card-team" key={index}>
              <div className="card-team-header"> <img src={foto} alt={name} />
                <p> <span>{name}</span>
                  {position}</p>
                <a href={linkedin}><BsTelegram /></a>
              </div>
              <p>{info}</p>
            </div>
          </div>
        ))}

      </div>
      <div className="d-flex mt-2 justify-content-md-end justify-content-center">
      <button className="btn-main">See all team</button>
      </div>
    </div>
  )
}

export default Team