import React from "react";
import ReactDOM  from "react-dom/client";
import logo from './images/logo.jpg'
import user from './images/user.jpg' 
import './app.css'
const Header = () => {

    return(
    
    <>
<header className="header" >
    <div className="logo">
        
    <img src = {logo} alt = "Logo of our company" />
    </div>


    <div className="search-bar" >
       <input type="text" placeholder="Search anything you want..."/>
          <button type="submit">
            {/* <i class="fa fa-search"></i> */}SUBMIT
          </button>
    </div>



    <div className="user-icon">
   <img src = {user} alt = "Logo of our company"/>
    </div>
</header>
   </>
    )


}


root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);





// import React from 'react';
// import ReactDOM  from "react-dom/client";
// import logo from './images/logo.jpg'
// import user from './images/user.jpg' 
// import './app.css'
// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img src= {logo} alt="Logo" />
//       </div>
//       <div className="search-bar">
//         <input type="text" placeholder="Search" />
//         <button>Search</button>
//       </div>
//       <div className="user-icon">
//         <img src= {user} alt="User Icon" />
//       </div>
//     </header>
//   );
// };

// root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header/>);




