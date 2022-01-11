import React from "react";
import { Link, BrowserRouter } from 'react-router-dom';

const Root = ({name}) => {
  return(
    <BrowserRouter>
      <header>
        <h1>{name}</h1>

        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/counting'>Counting</Link>
            </li>
            <li>
              <Link to='/lazy'>Lazy</Link>
            </li>
            <li>
              <Link to='/multiples'>Multiples</Link>
            </li>
            <li>
              <Link to='/todolist'>To Do List</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
}
export default Root;