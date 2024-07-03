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
    age: 0,
    education: "",
    prevAttendance: "",
  });

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(values);
    try {
      axios.post("http://localhost:8080/register", { values });
    } catch (err) {
      console.log(err);
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
            <form onSubmit={(event) => handleSubmit(event)}>
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
                    onClick={handleChange}
                  />
                  <label className="form-check-label">No</label>
                </div>
              </div>

              <div className="form-group">
                <label>Full Name*</label>
                <input
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Phone Number*</label>
                <input
                  name="phone"
                  className="form-control"
                  type="number"
                  placeholder="Phone Number"
                  onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" mini-input-item">
                    <label>Education Level*</label>
                    <select
                      name="education"
                      className="form-select"
                      onClick={handleChange}
                    >
                      <option></option>
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
