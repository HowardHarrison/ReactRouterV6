import { Route, Routes } from 'react-router-dom'
import { BookList } from './pages/BookList'
import { Book } from './pages/Book'
import { NewBook } from './pages/NewBook'
import { BookLayout } from './BookLayout'

export function BookRoutes() {
    return (
     <>
      <BookLayout/>
      <Routes>
       <Route index element={<Book/>}/>
       <Route path=':id' element={<BookList/>}/>
       <Route path='new' element={<NewBook/>}/>
     </Routes>
     </>   
    )
}