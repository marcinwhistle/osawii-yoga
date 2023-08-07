import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    return (
    <div className='App'>
      <header>
        <h1>Moja Strona</h1>
      </header>
      <main>
        <p>Witaj na mojej stronie!</p>
      </main>
      <footer>
        <p>Stopka strony</p>
      </footer>
    </div>
  </Provider>
);

export default App;
