import React from 'react';
import Header from './Header';
import Main from './Main';

require('../assets/styles/app.scss');

const App = props => {
  return(
    <div>
      <Header />
      <div className="bodyContainer">
        <Main {...props}/>
      </div>
    </div>
);
}

export default App;
