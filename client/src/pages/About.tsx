import { Menu } from "../components"
import { CaseStudies, Cta, Footer, Process } from "../container"

const About = () => {
  return (
    <div>
      <Menu />
      <Cta className="custom-container"/>
      <Process />
      <CaseStudies />
      <Footer />
    </div>
  )
}
export default About