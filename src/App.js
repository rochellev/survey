import React, {useState} from 'react';
import Survey from './components/Survey';

const App = () => {
  return(
    <div className="ui container comments">
      <h1 className="ui header">Sir Survey</h1>
      <Survey />
    </div>
  )
}

export default App;