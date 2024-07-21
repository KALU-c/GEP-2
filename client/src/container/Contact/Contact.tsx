import { FormEvent, useState } from "react";
import { Headings } from "../../components";
import "./Contact.css";
import axios from "axios";

interface Props {
  hideHeader?: boolean;
  className?: string;
}

const Contact = ({ hideHeader, className }: Props) => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    education: "",
    prevAttendance: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  axios.defaults.withCredentials = true;

  function handleChange(event) {
    setValues({
      ...values,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function validatePhoneNumber(phone: string) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  function validateAge(age: string) {
    const ageRegex = /^\d{2}$/;
    return ageRegex.test(age);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validatePhoneNumber(values.phone)) {
      setMessage("Invalid phone number");
      event.preventDefault();
      return;
    }
    if (!validateAge(values.age)) {
      setMessage(`Age can not be ${values.age.length} character(s)`);
      event.preventDefault();
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("https://gep-api.vercel.app/register", {
        values,
      });
      setLoading(false);
      setMessage(response.data.message);
      setValues({
        name: "",
        phone: "",
        email: "",
        age: "",
        education: "",
        prevAttendance: "",
      });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data.message) {
        setMessage(err.response.data.message);
        event.preventDefault();
      } else {
        console.log(err);
      }
    }
  }

  return (
    <div className={`${className}`}>
      {!hideHeader && (
        <Headings
          title="Contact Us"
          text="Connect with Us: Let's Explore How Our Generational Empowerment Program Can Support You"
        />
      )}
      <div className="contact" id="quote">
        <div className="row">
          <div className="col-md-6 col-12">
            {loading && (
              <div className="loading">
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="sr-only"></span>
                </div>
                <p>Registering...</p>
              </div>
            )}

            {message === "User registered successfully" ? (
              <p className="text-success font-weight-bold">{message}</p>
            ) : (
              <p className="text-danger font-weight-bold">{message}</p>
            )}
            <form onSubmit={(event) => handleSubmit(event)}>
              {hideHeader ? (
                <div>
                  <label
                    htmlFor=""
                    className="form-label"
                    style={{ marginRight: "20px" }}
                  >
                    Did you attend GEP previously?
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="prevAttendance"
                      id="inlineRadio1"
                      value="yes"
                      onClick={(event) => handleChange(event)}
                      required
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="prevAttendance"
                      id="inlineRadio2"
                      value="no"
                      onClick={(event) => handleChange(event)}
                      required
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
              ) : (
                <h3>Send us a message:</h3>
              )}

              <div className="form-group">
                <label>Full Name*</label>
                <input
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  value={values.name}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number*</label>
                <input
                  name="phone"
                  className="form-control"
                  type="number"
                  placeholder="Phone Number"
                  value={values.phone}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input
                  name="email"
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  value={values.phone}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              {hideHeader ? (
                <div className="mini-input">
                  <div className=" mini-input-item">
                    <label>Age*</label>
                    <input
                      name="age"
                      className="form-control"
                      type="number"
                      placeholder="Age"
                      value={values.age}
                      onChange={(event) => handleChange(event)}
                      required
                    />
                  </div>
                  <div className=" mini-input-item">
                    <label>Education Level*</label>
                    <select
                      name="education"
                      className="form-select"
                      onClick={(event) => handleChange(event)}
                      required
                    >
                      <option selected></option>
                      <option value="high-school">HighSchool</option>
                      <option value="bachelor">Bachelor's degree</option>
                      <option value="masters">Master's degree</option>
                      <option value="not-in-school">
                        Not currently in school{" "}
                      </option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <label>Message*</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    required
                  ></textarea>
                </div>
              )}
              <button type="submit" className="btn-main w-100">
                {!hideHeader ? "Submit" : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
