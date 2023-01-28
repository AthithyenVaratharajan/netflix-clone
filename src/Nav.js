import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();


  const transitionNavBar = () => {
    if(window.scrollY > 500){
      setShow(true);
    } else {
      setShow(false);
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
            <img onClick={() => history.push('/')}
            className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427' alt=''/>
            <img onClick={() => history.push('/profile')}
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
        </div>
    </div>
  )
}

export default Nav
