import {registerSchema} from "../utils/formValidation.js";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Home() {
  const postData = async (username, email, password) => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           username, 
           email, 
           password 
          }),
      });
      if (response.ok) {
        alert("User registered successfully!");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }
  
  return (
    <>
    
    <div className="forms-login">
    <h2>Register Here!</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          console.log(values);
          postData(values.username, values.email, values.password);
        }}
      >
        
        <Form>
          <div>
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" type="text" />
          <ErrorMessage name="username" component={"div"} style={{ color: "red" }}/>
          </div>

          <div>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component={"div"} style={{ color: "red" }}/>
          </div>

          <div>
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" component={"div"} style={{ color: "red" }}/>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </>
  );
}

export default Home;