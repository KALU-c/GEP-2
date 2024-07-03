import { Menu } from "../components"
import { Contact, Footer } from "../container"

const Register = () => {

  return (
    <div>
      <Menu />
      <Contact hideHeader={true} className="mt-5"/>
      <Footer />
    </div>
  )
}
export default Register