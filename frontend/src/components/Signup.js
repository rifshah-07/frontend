import {Formik} from 'formik'
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const Signup = () => {

    // step-1 : create function for submission

    const userSubmit = async (formdata, { resetForm, setSubmitting}) => {
        setSubmitting(true);

        //setTimeout(() => {
            console.log(formdata);

            //for sending request to backend

            //1. url
            //2. request method
            //3. data
            //4.data format-json
            const response=await fetch('http://localhost:5000/user/add',{
                method:'POST', 
                body: JSON.stringify(formdata),//to convert to json
                headers:{
                    'Content-Type': 'application/json'
                }

            });

            console.log(response.status);

            if(response.status===200){
                Swal.fire({
                    icon: 'success',
                    title: 'registered',
                    text: 'User Registered Successfully'
                })
                
            }
            setSubmitting(false);
        resetForm();

       // }, 1000);// for delay
        
    }

     const myValidation=Yup.object().shape({
        username: Yup.string().min(3, 'Too short').max(10, 'too long').required('username Required')
     })
  return (

    <div className='col-md-6 mx-auto'>
        <div className="card">
            <div className="card-body">
            <h3 className='text-center'> Signup Here</h3>

            <Formik
                initialValues={{ username : '', email : '', password: ''}}
                onSubmit={userSubmit}
                validationSchema={myValidation}// to link validaton to formik

         >
            { ({values, handleChange,handleSubmit, isSubmitting, errors}) => (
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" className='form-control ' name='username' value={values.username} onChange={handleChange} />
                    <p className='mb-3 message'>{errors.username}</p>

                    <label>Email</label>
                    <input type="text" className='form-control ' name='email' value={values.email} onChange={handleChange} />

                    <label>Password</label>
                    <input type="password" className='form-control '  name='password' value={values.password} onChange={handleChange}/>

                    <button disabled={isSubmitting}type='submit' className='btn btn-primary'>Submit
                    {
                         isSubmitting ?
                         <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                         :
                         ""

                    }
                      &nbsp;
                      </button>
                       
                    

                </form>
            )}

            </Formik>
        </div>
    </div>
</div>
  )
}

export default Signup;