/*
App Layout: 
  1. Head
  2. Body
    2.1 Sidebar
      2.1.1 Menu Items

    2.2 MainContainer
      2.2.1 Button List
      2.2.2 VideoContainer
      2.2.3 Video Card

*/

import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import { store } from './utils/store';

function App() {
  return (
    <Provider store = {store}>
    <div>
      <Head />
      <Body />
    </div>
    </Provider>
  );
}

export default App;
