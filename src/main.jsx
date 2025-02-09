import { lazy } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import Booklist from './components/Booklist.jsx';
import BookDetails from './components/BookDetails.jsx';
import Demo from './components/Demo.jsx';

// Creating Routing Configration

const About = lazy(() => import("./components/About.jsx"));

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path:"/",
          element: <Booklist />
        },
        {
          path: "/about",
          element: <About />
        },
    
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/book/:id",
          element: <BookDetails />
        },
        {
          path: "/Demo",
          element: <Demo />
        }
      ],
      errorElement: <Error />
    },

  ]
)

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={appRouter} />
)
