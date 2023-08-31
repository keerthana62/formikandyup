import { Form,ErrorMessage,Formik,Field } from 'formik'
import React from 'react'
import * as yup from'yup'

function Formik1() {
 let initialValues={
  username:'',
  email:'',
  password:''
 }

let validationSchema=
 yup.object().shape({
  username:yup.string().required("Username is required").min(6,'Minimum it should have 6 characters').test('','Name should contain only alphabet',(value)=>{ return /^[a-zA-Z]+$/.test(value);
 }),
  email:yup.string().required("Email is required").email("Email is not in proper format"),
  password:yup.string().required("Password is required").min(5)
 })

 let onSubmit=(users,onSubmitProps)=>{
  console.log(users)
  onSubmitProps.resetForm()
 }

  return (
   <div className="container">
   <Formik initialValues={initialValues}validationSchema={validationSchema} onSubmit={onSubmit}>
    <Form>
     <h1>User Registration Form</h1>
     <div className="ui divider"></div>
     <div className="ui form">
       <div className="field">
         <label>Username</label>
         <Field
           type="text"
           name="username"
           placeholder="Username"
           />
           <ErrorMessage name='username'/>
       </div>
       <div className="field">
         <label>Email</label>
         <Field
           type="text"
           name="email"
           placeholder="Email"
         />
         <ErrorMessage name='email'/>
       </div>
       <div className="field">
         <label>Password</label>
         <Field
           type="password"
           name="password"
           placeholder="Password"
         />
         <ErrorMessage name='password'/>
       </div>
       <button className="fluid ui button blue" type='submit'>Submit</button>
     </div>
     </Form>
     </Formik>
 </div>
);
}

export default Formik1