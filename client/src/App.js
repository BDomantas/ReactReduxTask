import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from './redux/store';

import FormService from './containers/FormService';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <p>
              Chained redux actions task
            </p>
          </div>
          <FormService/>
        </div>
      </Provider>
    );
  }
}

export default App;
