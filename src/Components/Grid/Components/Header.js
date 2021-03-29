import React from 'react'

function Header() {
    return (
        <div class="wrapper bgded overlay" style={{ backgroundImage: `url("https://www.nicesnippets.com/image/imgpsh_fullsize.png")`}}>
        <div id="breadcrumb" class="hoc clear">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Ipsum</a></li>
            <li><a href="#">Dolor</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Header
