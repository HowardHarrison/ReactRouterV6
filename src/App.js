import {Route, Routes, Link, useLocation, NavLink } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { BookLayout } from './BookLayout';
import { BookRoutes } from './BookRoutes';

function App() {
  const location = useLocation()
  return (
    <div>
     
       <nav>
      <ul>
        <li>
          <NavLink to='/' state='Hi'>Home</NavLink>
        </li>
        <li>
          <Link to='/books'>Books</Link>
        </li>
      </ul>
    </nav>
    {location.state}
    <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/books/*' element={<BookRoutes/>}/>
     <Route path='*' element={<NotFound/>}/>
     {/*<Route path='/books' element={<BookLayout/>}>
      <Route index element={<Book/>}/>
      <Route path=':id' element={<BookList/>}/>
      <Route path='new' element={<NewBook/>}/>
  </Route>*/}

     {/*<Route path='/books' element={<Book/>} />
     <Route path='/books/:id' element={<BookList/>} />
  <Route path='/books/new' element={<NewBook/>} /> */}
   
   </Routes> 
   </div>
  );
}

export default App;
