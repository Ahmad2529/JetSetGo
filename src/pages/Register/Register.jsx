import React from 'react';
import './style.css';
import { AuthService } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const submit = (e) => {
    e.preventDefault()
    console.log(form);
    if (form.password !== form.confirmPassword) {
      alert("Password mismatches");
      return;
    }

    delete form.confirmPassword;
    AuthService.signup(form).then(() => {
      alert('User registration successful');
      navigate('/')
    }).catch(err => {
      alert('Unable to sign up. Please try again!')
    });
  }

  const saveChanges = (name, value) => {
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <main className="register-hld">
      <div className="container form-signin w-100 m-auto">
        <form onSubmit={submit}>
          {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
          <h1 className="h3 mb-3 fw-normal">Sign up</h1>

          <div className="form-floating">
            <input required type="text" onChange={(e) => saveChanges('name', e.target.value)} className="form-control" id="floatingName" placeholder="John Doe" />
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating mt-1">
            <input required type="email" onChange={(e) => saveChanges('email', e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-1">
            <input required type="password" onChange={(e) => saveChanges('password', e.target.value)} className="form-control " id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mt-1">
            <input required type="password" onChange={(e) => saveChanges('confirmPassword', e.target.value)} className="form-control " id="floatingConfirmPassword" placeholder="Confirm password" />
            <label htmlFor="floatingConfirmPassword">Confirm password</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
          <p className="mt-5 mb-3 text-center text-body-secondary">&copy; Copywrite 2023</p>
        </form>
      </div>
    </main>
  );
}

export default Register;
