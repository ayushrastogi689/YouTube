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
import store  from './utils/store';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    }
  ]
}]);



function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
