import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import Booklist from './components/Booklist.jsx';
import BookDetails from './components/BookDetails.jsx';

// Creating Routing Configration

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
        }
      ],
      errorElement: <Error />
    },

  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={appRouter} />
  </StrictMode>,
)
