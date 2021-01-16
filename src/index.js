import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { WeatherContextProvider } from './store/WeatherContext'

import { WeatherInfoContainer } from './components/WeatherInfoContainer'
import { WeatherForm } from './components/WeatherForm'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-5 title-container">
                  <div>
                    <h1 className="title-container__title">Weather Finder</h1>
                    <h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
                  </div>
                </div>
                <div className="col-7 form-container">
                  <WeatherContextProvider>
                    <WeatherForm />
                    <WeatherInfoContainer />
                  </WeatherContextProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
