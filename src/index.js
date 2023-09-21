import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import AdminDashboard from './features/AdminDashboard';
import Home from './features/Home';
import AddHospital from './features/AddHospital';
import AddBed from './features/AddBed';
const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/admindashboard',
        element:<AdminDashboard/>,
        children:[
          {
            path:'/admindashboard/addhospital',
            element:<AddHospital/>
          },
          {
            path:'/admindashboard/addbed',
            element:<AddBed/>
          }
        ]
      },
      {
        path:'',
        element:<Home/>
      }
    ]
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
