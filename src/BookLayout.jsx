import { Link, Outlet, useSearchParams } from "react-router-dom"

export function BookLayout() {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
    const number = searchParams.get('n')
    return (
      <>
      <h1>Book</h1>
      <Link to='/books/1'>Book 1</Link>
      <br/>
      <Link to='/books/2'>Book 2</Link>
      <br/>
      <Link to={`/books/${number}`}>Book {number}</Link>
      <Link to='/books/new'>New Book</Link>
      <Outlet context={{hello: 'World'}}/>
      <input
       type="number"
       value={number}
       onChange={e => setSearchParams({ n: e.target.value})}
      />
      </>  
    )
}