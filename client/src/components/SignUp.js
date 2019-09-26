import React from 'react';
import { Form, Field, withFormik } from "formik";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Gator from "../assets/gator_2.jpg";


const SignUpDiv = styled.div`
   display: flex;
   justify-content: center;
   align-content: center;
`
const SignUpWrapper1 = styled.div`
    box-shadow: 1px 1px 5px 5px;
    width: 60%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
`
const SignUpWrapper2 = styled.div`
    display: flex;
    margin: 1rem;
    margin: 10 0 0 0rem;
    margin-top: 4rem;
    height: 100%;
`

const GatorPic = styled.img`
    width: 50%;
    height: 90%;
`

const SignUp = () => {
   return (
       <SignUpDiv>
           <SignUpWrapper1>
              <SignUpWrapper2>
                <Form className="FormCon2">
                    <div className="fields">
                        <Field className="FieldCon" type="text" name="user" placeholder="Username" />
                    </div>
                    <div className="fields">
                        <Field className="FieldCon" type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="fields">
                        <Field className="FieldCon" type="password" name="password" placeholder="Password" />
                    </div>
                    <Link to='/conjugator' className="LinkStyle">Submit</Link>
                </Form>
                <GatorPic src={Gator} alt="happy gator" />
              </SignUpWrapper2>
           </SignUpWrapper1>
       </SignUpDiv>
   )
};
const FormikSignUp = withFormik({
   mapPropsToValues({user, email, password}) {
       return {
           user: user || "",
           email: email || "",
           password: password || ""
   }
 }
})(SignUp);
export default FormikSignUp