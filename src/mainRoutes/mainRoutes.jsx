import Home from '../Components/Home/Home.jsx';
import Blogs from '../Components/Routes/Blogs/Blogs.jsx';
import BookMarks from '../Components/Routes/BookMakrks/BookMarks.jsx';
import HomePage from '../Components/Home/HomePage.jsx';
import Blog from '../Components/Blog/Blog.jsx';
// import Author from './Components/Author/Author.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Content from '../Components/Content/Content.jsx';
import Author from '../Components/Author/Author.jsx';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'Blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=30&top=7')
      },
      {
        path: '/blog/:id',
        element: <Blog></Blog>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
            {
                index: true,
                element: <Content></Content>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            },
            {
                path: 'author',
                element: <Author></Author>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            }
        ]
      },
      {
        path: 'BookMarks',
        element: <BookMarks></BookMarks>
      }
    ]
  },
]);