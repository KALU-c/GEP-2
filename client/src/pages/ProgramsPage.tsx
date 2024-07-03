import { Menu } from "../components"
import { Cta, Footer, Programs } from "../container"

const ProgramsPage = () => {

  return (
    <div>
      <Menu />
      <Cta className="custom-container"/>
      <Programs hideHeader={true}/>
      <Footer />
    </div>
  )
}
export default ProgramsPage