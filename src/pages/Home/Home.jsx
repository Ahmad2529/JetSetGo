import { useNavigate } from 'react-router-dom';
import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import './style.css';
import React from 'react';

function Home() {
  const router = useNavigate();
  const [formValues, setFormValues] = React.useState({
    destination: '',
    start: '',
    end: ''
  })

  function navigate(url) {
    router(url);
  }

  const onSubmit = () => {
    if(!formValues.start) {
      alert("Start date is required");
      return;
    }

    if(!formValues.end) {
      alert("End date is required");
      return;
    }
    console.log(new Date(formValues.start).toISOString(), formValues.to);
    navigate(`/results?location=${formValues.destination}&from=${new Date(formValues.start).toISOString()}&to=${new Date(formValues.end).toISOString()}`)
  }

  return (
    <div className=''>
      <Navbar />
      <main className='home-hld'>
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-6">

                <div className="search-form">
                <h1 className="display-9">Find great deals on hotels</h1>
                <p className="lead">Book your next adventure with JetSetGo</p>
                  <input onChange={(e) => setFormValues({
                    ...formValues,
                    destination: e.target.value
                  })} type="text" className="form-control mb-3" placeholder="Destination" />
                  <div className="row">
                    <div className="col-md-6">
                      <input onChange={(e) => setFormValues({
                    ...formValues,
                    start: new Date(e.target.value)
                  })} type="date" className="form-control" placeholder="Check-in" />
                    </div>
                    <div className="col-md-6">
                      <input onChange={(e) => setFormValues({
                    ...formValues,
                    end: new Date(e.target.value)
                  })} type="date" className="form-control" placeholder="Check-out" />
                    </div>
                  </div>
                  <button disabled={!formValues.destination} onClick={() => onSubmit()} className="btn btn-primary mt-3">Search</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
