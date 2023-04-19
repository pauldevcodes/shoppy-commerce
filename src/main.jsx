import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

// routes
import Home, { homeLoader } from './routes/Home'
import Products, { productLoader } from './routes/Products'
import ProductCategory, { categoryLoader } from './routes/ProductCategory'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <Home />
      },
      {
        path: "all-products",
        loader: productLoader,
        id:'product-id',
        element: <Products />,
        children: [
          {
            path: ":category",
            element: <ProductCategory />,
            loader: categoryLoader
          }
        ]
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
