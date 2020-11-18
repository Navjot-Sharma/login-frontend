import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {

  return (
    <div className='header'>
      <div className='header-inner'>
        <h3>DEMO</h3>
        <div className='flex-h-center'>
          {props.currentUser && <Link to='/profile' className='cp'>Home</Link>}
          {props.currentUser && <Link to='/sample' className='cp ml-10'>Sample</Link>}
          {!props.currentUser && <Link to='/' className='ml-10 cp'>Login</Link>}
        </div>
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    ...state.auth,
  };
}
export default connect(mapStateToProps, null)(Header);