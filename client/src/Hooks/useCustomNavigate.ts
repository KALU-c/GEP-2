import { useNavigate } from "react-router-dom";

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToAbout = () => navigate("/about");
  const goToPrograms = () => navigate("/programs");
  const goToTestimonial = () => navigate("/testimonial");
  const goToRegister = () => navigate("/register");
  const customNavigate = (link: string) => navigate(`/${link}`);
  const goToError500 = () => navigate("/error500");

  return {
    goToHome,
    goToAbout,
    goToPrograms,
    goToRegister,
    goToTestimonial,
    customNavigate,
    goToError500
  }
}
export default useCustomNavigate