import './Footer.css';
import { images, data } from '../../constants';
import { BsFacebook, BsTelegram, BsTiktok } from 'react-icons/bs'

const Footer = () => {
  // const year = ;
  return (
    <footer>
      <div className="row align-items-center">
        <div className="col-md-2 col-12">
          <img src={images.gepLogoWhite} width="120px" alt="logo" className="img-fluid" />
        </div>
        <div className="col-md-8 col-12 ">
          <ul className="navbar-footer">
            {data.Menu.slice(0, -1).map((item, index) => (
              <li key={index}> <a href="#" >{item.text}</a></li>
            ))}
          </ul>
        </div>
        <div className="col-md-2 col-12 text-center text-md-end fs-4"><BsFacebook /> <BsTelegram /> <BsTiktok /></div>
      </div>
      <div className="row">

        <div className="col-md-4 col-12">
          <ul className="info-contact">
            <li> <span>Contact us:</span></li>
            <li>Email: hmyc@gmail.com</li>
            <li>Phone: +251-900-000-000</li>
            <li>Address: Hossana, Ethiopia</li>
          </ul>
        </div>
        <div className="col-md-8 col-12">

          <form className="row form-news">
            <div className="col-lg-6 col-12">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="col-lg-6 col-12 mt-3 mt-lg-0">
              <button type="submit" className="btn-main w-100">Subscribe to news</button>
            </div>
          </form>

        </div>

        <div className="rights">
          <p>© {new Date().getFullYear()} HMYC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer