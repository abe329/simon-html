import React from 'react';
import './play.css';

export function Play() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div class="players">
        Player:
        <span class="player-name">Mystery player</span>
      </div>
      <ul class="notification">
        <li class="player-name">Tim started a new game</li>
        <li class="player-name">Ada started a new game</li>
        <li class="player-name">Tim scored 337</li>
      </ul>

      <br />

      <div>
        <label for="count">Score</label>
        <input type="text" id="count" value="--" readonly />
      </div>

      <br />

      <div>
        <button>Reset</button>
      </div>

      <br />

      <div>
        <table>
          <tr>
            <td>
              <button>
                <svg aria-hidden="true" viewBox="0 0 100 100" height="100" width="100">
                  <path d="M 95,5 95,95 5,95 Q 5,5 95,5" fill="green" />
                </svg>
              </button>
            </td>
            <td>
              <button>
                <svg aria-hidden="true" viewBox="0 0 100 100" height="100" width="100">
                  <path d="M5,5 5,95 95,95 Q 95,5 5,5" fill="red" />
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button>
                <svg aria-hidden="true" viewBox="0 0 100 100" height="100" width="100">
                  <path d="M5,5 95,5 95,95 Q 5,95 5,5" fill="blue" />
                </svg>
              </button>
            </td>
            <td>
              <button>
                <svg aria-hidden="true" viewBox="0 0 100 100" height="100" width="100">
                  <path d="M95,5 5,5 5,95 Q 95,95 95,5" fill="yellow" />
                </svg>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </main>
  );
}