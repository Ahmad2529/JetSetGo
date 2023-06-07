import './style.css';

function Register() {
  return (
    <main className="register-hld">
      <div className="container form-signin w-100 m-auto">
        <form>
          <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Sign up</h1>

          <div className="form-floating">
            <input type="text" className="form-control" id="floatingName" placeholder="John Doe" />
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating mt-1">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-1">
            <input type="password" className="form-control " id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mt-1">
            <input type="password" className="form-control " id="floatingConfirmPassword" placeholder="Confirm password" />
            <label htmlFor="floatingConfirmPassword">Confirm password</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
          <p className="mt-5 mb-3 text-center text-body-secondary">&copy; 2017–2023</p>
        </form>
      </div>
    </main>
  );
}

export default Register;
