import React from 'react';

const Header = ({title, logo, isLoading}) => {
  console.log("Header render");
  return (
    <div>
      <img src={logo} />
      <h1>{title}</h1>
      {isLoading ?
        <div id="loading">
          <div className="text">{"Loading..."}</div>
        </div> : null}
    </div>
  );
};
export default Header;
