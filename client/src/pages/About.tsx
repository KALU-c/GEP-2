import { Menu } from "../components"
import { Cta, Footer, Process, Team } from "../container"

const About = () => {
  return (
    <div>
      <Menu />
      <Cta className="custom-container"/>
      <Process />
      <Team />
      <Footer />
    </div>
  )
}
export default About