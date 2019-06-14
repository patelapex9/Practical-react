// import external modules
import React from "react";
import { Route } from "react-router-dom";
// import internal(own) modules
import UserLayout from "../designs/userLayout";



const UserRoute = ({ render, ...rest }) => {
   return (
      <Route
         {...rest}
         render={matchProps => {
            let mode ='';
            if(matchProps.match.params.mode){
               mode = matchProps.match.params.mode
            }else{
               mode = matchProps.match.url.slice(1);
            }
            
            return (
            
            <UserLayout mode={mode}>
               {render(matchProps)}               
            </UserLayout>
            
         )}}
      />
   );
};


export default UserRoute;