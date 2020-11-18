import React from 'react';
import './Home.scss';
const Home = () => {
  let user = localStorage.getItem('currentUser');
  if (user) {
    user = JSON.parse(user);
  }
  return (
    <>
      {user && <div className='login profile p-30 shadow-1 br-10'>
        <div>Name: </div><div> {user.name}</div>
        <div>Age: </div><div> {user.age}</div>
        <div>Company: </div><div> {user.companyName}</div>
        <div>Location: </div><div> {user.location}</div>
      </div>}
    </>
  );
}

export default Home;