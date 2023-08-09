import { useNavigate } from 'react-router-dom';
import './style.css';
import React from 'react';
import { AuthService } from '../../services/auth.service';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });

  const submit = (e) => {
    e.preventDefault()
    console.log(form);
    
    AuthService.logInWithEmailAndPassword(form).then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      alert('Sign in successful');
      if (user.admin) return navigate('/admin')
      else return navigate('/')
    }).catch(err => {
      alert('Unable to sign in. Please try again!')
    });
  }

  const saveChanges = (name, value) => {
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <main className="login-hld">
      <div className="container form-signin w-100 m-auto">
        <form onSubmit={submit}>
          {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
          <h1 className="h3 mb-3 fw-normal">Sign in</h1>

          <div className="form-floating">
            <input required type="email" onChange={(e) => saveChanges('email', e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input required type="password" onChange={(e) => saveChanges('password', e.target.value)} className="form-control mt-1" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-center text-body-secondary">&copy; Copywrite 2023</p>
        </form>
      </div>
    </main>
  );
}

export default Login;
