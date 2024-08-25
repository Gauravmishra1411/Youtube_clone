
import './App.css';
import Head from './component/Head';
import Body from './component/Body';
import store from "./until/Store"
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from "./component/MainContainer"
import WatchPage from './component/WatchPage';

const apRouter=createBrowserRouter([{
  path:"/" ,
  element:<Body/>,
children: [
  {
    path:"/",
    element:<MainContainer/>
  },
  {
    path:'watch' ,
    element:<WatchPage/>
  }
]
},
])
function App() {
   
  return (
    <Provider store={store}>
<div  >
    
    <Head/>
    <RouterProvider router={apRouter}/>
     </div>
    </Provider>
    
  );
}

export default App;
