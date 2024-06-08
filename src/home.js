import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Home = () => {


  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <Link to='/login'><button className='inputButton'>&nbsp;&nbsp;Login&nbsp;&nbsp;</button></Link>
        <div>OR</div>
        <Link to='/signup'><button className='inputButton'>Sign Up</button></Link>
      </div>
     
    </div>
  )
}

export default Home