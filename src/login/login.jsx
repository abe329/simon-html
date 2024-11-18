import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Login() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
      <h1>Welcome to Simon</h1>
        <form method="get" action="play.html">
          <div>
            <span>@</span>
           <input type="text" placeholder="your@email.com" />
          </div>
         <div>
            <span>🔒</span>
           <input type="password" placeholder="password" />
          </div>
          <button type="submit">Login</button>
          <button type="submit">Create</button>
        </form>
      </div>
    </main>
  );
}