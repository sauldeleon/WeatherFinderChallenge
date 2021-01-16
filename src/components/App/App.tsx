import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { FormContainer } from '../FormContainer'
import { TitleContainer } from '../TitleContainer'

export const App: React.FC = () => (
  <div>
    <div className="wrapper">
      <div className="main">
        <div className="container-fluid">
          <div className="row">
            <TitleContainer className="col-5" />
            <FormContainer className="col-7" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
