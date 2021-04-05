import React from 'react'
import logo  from "./logo.png";

function PeopleItem({text,tittle}) {
    return (
<>
<figure>
              <header className="heading">{tittle}</header>
     <ul classname="nospace clear">
  <li className="one_quarter first"><a href="#"><img src={logo}alt /></a></li>
  <li className="one_quarter"><a href="#"><img src={logo} alt /></a></li> <li className="one_quarter"><a href="#"><img src={logo} alt /></a></li> <li className="one_quarter"><a href="#"><img src={logo} alt /></a></li>

</ul>

              <figcaption>{text}</figcaption>
            </figure>
</>

    )
}

export default PeopleItem
