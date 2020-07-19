import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <nav className="navbar" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <span className="is-size-4 has-text-light">Logo</span>
            </a>

            <span href="/" role="button" className="navbar-burger burger has-text-light">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a href="/" className="button is-text">
                    Link
                  </a>
                  <a href="/" className="button is-text">
                    Link
                  </a>
                  <a href="/" className="button is-text">
                    Link
                  </a>
                  <a href="/" className="button is-info">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero is-medium py-6 px-6">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half-desktop is-full-mobile is-full-tablet hero-text">
                <h1 className="title is-title is-size-1 has-text-weight-bold has-text-light">Analytics made easy.</h1>

                <p className="subtitle has-text-light mb-6 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>

                <div className="field has-addons">
                  <div className="control">
                    <input className="input is-medium" type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="control">
                    <button type="submit" className="button is-info is-medium">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              <div className="column is-half-desktop is-hidden-mobile is-hidden-tablet-only">
                <img src="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png" alt="Graph" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-cards pb-6 px-6">
        <div className="container">
          <div className="columns is-multiline is-centered">
            {[1, 2, 3, 4, 5, 6].map(() => (
              <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
                <Card />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer class="footer py-4">
        <div class="container">
          <p>© 2020 Copyright Text</p>
        </div>
      </footer>
    </>
  );
}

export default App;
