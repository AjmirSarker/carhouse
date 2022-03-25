import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-dark fixed-top">
        <div className="container-fluid ">
          <a className="navbar-brand mx-auto text-white fw-bold fs-1 d-flex d-flex justify-content-center align-items-center " href="/Cars">
            {/* <img src="./one.jpg" alt="" width="100%" height="24" className='d-inline-block align-text-top '/> */}
            Car Haat
          </a>
        </div>
      </nav>
    );
};

export default Header;