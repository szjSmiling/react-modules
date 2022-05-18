import { Navigate } from "react-router-dom";
import About from '../pages/About'
import Home from '../pages/Home'
import HomeMessage from '../pages/HomeMessage'
import HomeMessageDetail from "../pages/HomeMessageDetail";
import HomeNews from '../pages/HomeNews'

const routes = [
  { path: '/about', element: <About /> },
  { path: '/home', element: <Home />, children: [
    { path: 'message', element: <HomeMessage />, children: [
      { path: 'detail/:id/:title/:content', element: <HomeMessageDetail /> }
    ] },
    { path: 'news', element: <HomeNews /> },
  ] },
  { path: '/', element: <Navigate to='/about' /> }
]
export default routes;