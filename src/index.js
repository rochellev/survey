// // Import the React and ReactDOM libraries
// import React from 'react';
// import ReactDOM from 'react-dom';
// import faker from 'faker';

// // Create a react component
// const App = () => {
//   const buttonText = { text: 'Click me' };
//   const labelText = 'Enter name:';

//   return (
//     <div className="ui container comments">
//       <label className="label" htmlFor="name">
//         {labelText} {faker.commerce.color()}
//       </label>
//       <input id="name" type="text" />
//       <button style={{ backgroundColor: 'blue', color: 'white' }}>
//         {buttonText.text}
//       </button>
//       <div class="ui small image">
//       <image src="https://fakeimg.pl/300/" />
//       </div>
//     </div>
//   );
// };

// // Take the react component and show it on the screen
// ReactDOM.render(<App />, document.querySelector('#root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));