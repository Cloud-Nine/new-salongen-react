import React, { Component} from 'react';

// Styling
import './presentationPage.css';

class PresentationPage extends Component {

  render () {
    return (
      <main className="presentation-page">
      <div className="wrapper">
        <h1>Arbetsprov</h1>
          <p><strong>Val av ramverk</strong> föll initalt på <i>Angular 5</i> men jag blev med projektets gång allt mer intresserad av att testa <i>React</i> – så det fick bli en sådan version också. </p>

          <p><strong>Länkar</strong> till github och demosajter finns här nedan, Angular-versionen ligger ännu inte uppe men siktar på att få upp den live i helgen.</p>

          <i>Joel Sjöström</i>

          <section >
              <h4>React</h4>
              <ul>
                  <li>
                      <a href="https://github.com/beelio/new-salongen-react">Github</a>
                  </li>
                  <li>
                      <a href="http://joelsjostrom.me/salonger">Demo</a>
                  </li>
              </ul>

              <h4>Angular 5</h4>
              <ul>
                  <li>
                      <a href="https://github.com/beelio/salongen">Github</a>
                  </li>
                  <li>
                      <a  href="">Demo</a> (Kommer snart)
                  </li>
              </ul>
              <h4>Salong-api</h4>
              <ul>
                  <li>
                      <a href="https://github.com/beelio/salongapi">Github</a>
                  </li>
              </ul>
          </section>
      </div>
  </main>

    );
  }
}

export default PresentationPage;
