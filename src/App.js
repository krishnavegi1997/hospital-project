import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
     <Header/> 
     <Outlet/>
    </Provider>
  );
}

export default App;
