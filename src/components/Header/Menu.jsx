import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    const [state, setState] = React.useState(0)
  return (
    
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="*">404</Link></li>
    </ul>
  )
}

export default Menu