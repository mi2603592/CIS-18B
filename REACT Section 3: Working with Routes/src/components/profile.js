import React from 'react';
import { Link, Redirect } from 'react-router-dom'

const Profile =(props) => {

   const redirectUser = () => {
  //   const userRedirect = true;

  //   if(userRedirect){
  //     return (
  //       <Redirect to="/"/>
  //     )
  //   }
  // }

  props.history.push('/')
   }
  return (
    <>
    {redirectUser()} 
    {/* <Redirect to="/"/> */}
    <Link to={{
        pathname:`${props.match.url}/posts`
    }}>
    Go to Posts
    </Link>
    </>
  );
}

export default Profile;