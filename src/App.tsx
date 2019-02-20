import * as React from 'react';
import './App.css';
import store from './store'
import {Provider} from "react-redux";
import {createMuiTheme,MuiThemeProvider} from "@material-ui/core/styles/index";
import blue from "@material-ui/core/colors/blue";
import ListView from './components/ListView'
import AddToDo from './components/AddToDo'

// import logo from './logo.svg';

const theme:any = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends React.Component {

  public render() {
    return (
        <Provider store={store}>
          {/*<div className="App">*/}
            {/*<header className="App-header">*/}
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              {/*<h1 className="App-title">Welcome to React</h1>*/}
            {/*</header>*/}
            {/*<p className="App-intro">*/}
              {/*To get started, edit <code>src/App.tsx</code> and save to reload.*/}
            {/*</p>*/}
          {/*</div>*/}
          <MuiThemeProvider theme={theme}>
            <div>
              <AddToDo/>
              <ListView/>
            </div>
          </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;
