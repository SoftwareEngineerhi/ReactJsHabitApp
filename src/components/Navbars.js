import { useState } from 'react';
import { Link } from 'react-router-dom';
// Navbar component
export default function Navbar() {
  const [toggleLink, setLink] = useState(false);
  return (

    <div className="nav">
      {/* =====================
        logo and heading of App
      ======================== */}
      <div className="navLeft">
        <Link to='/'><img src='https://cdn-icons-png.flaticon.com/128/3588/3588658.png' alt='title-icon' height='50px' width='50px' /></Link>
        <Link to='/'> <span>Habit Tracker</span></Link>
      </div>

      <div className="navRight">
              {/* ==================
              Links for Home page and 
              ================= */}
              
        {/* =========================================
        Link for Add Habit and Show Detail past 7 Day
        ============================================= */}
        {toggleLink ? <Link to='/' >
          <h3 onClick={() => setLink(!toggleLink)} ><p>Go to Detail view</p></h3>
        </Link> :
          <Link to='/habitweekday'>
            <h3 onClick={() => setLink(!toggleLink)}><p>Go To Week view</p></h3>
          </Link>}
      </div>
    </div>
  );
}
