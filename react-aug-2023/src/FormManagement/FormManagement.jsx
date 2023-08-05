import { useState } from "react";
import FormManagementCSS from "./FormManagement.css";
import ListPage from "./ListPage";
const FormManagement = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "male",
    subscribe: false,
    message: "",
    interests: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [employees, setEmployees] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    if (type === "checkbox") {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: [...prevData[name], value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: inputValue,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      let newEmployees = [...employees, { ...formData }];
      setEmployees(newEmployees);
      handleReset();
    } else {
      setFormErrors(errors);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setFormErrors({});
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.firstName) {
      errors.firstName = "First name is required";
    }
    if (!data.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email format";
    }
    return errors;
  };

  return (
    <>
      <div className="row">
        <div className="col-3">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={formErrors.firstName ? "error" : ""}
                required
              />
              {formErrors.firstName && (
                <span className="error-message">{formErrors.firstName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={formErrors.lastName ? "error" : ""}
                required
              />
              {formErrors.lastName && (
                <span className="error-message">{formErrors.lastName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={formErrors.email ? "error" : ""}
                required
              />
              {formErrors.email && (
                <span className="error-message">{formErrors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Interests</label>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="interests"
                    value="reading"
                    checked={formData.interests.includes("reading")}
                    onChange={handleInputChange}
                  />
                  Reading
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interests"
                    value="sports"
                    checked={formData.interests.includes("sports")}
                    onChange={handleInputChange}
                  />
                  Sports
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interests"
                    value="music"
                    checked={formData.interests.includes("music")}
                    onChange={handleInputChange}
                  />
                  Music
                </label>
                {/* Add more checkboxes as needed */}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="submit-button">
                Submit
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="col09">
          {employees.map((e) => {
            return (
              <ListPage
                formData={e}
                setFormData={setFormData}
                initialFormData={initialFormData}
              ></ListPage>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FormManagement;
