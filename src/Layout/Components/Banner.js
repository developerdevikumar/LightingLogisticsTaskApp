import React from 'react'

function Banner() {
    return (
        <div>

<div className="wrapper bgded overlay"  style={{
         backgroundImage: `url("https://www.nicesnippets.com/image/imgpsh_fullsize.png")`, width:'1550px',height:'650px',color:'white',
      }}>
  <div id="pageintro" className="hoc clear">
    <article>
      <h3 className="heading">Pellentesque risus nulla</h3>
      <p>Fringilla sed posuere et dignissim non ipsum cras euismod urna non neque auctor dignissim nulla mattis purus donec sed lorem eget nibh sagittis</p>
      <footer>
        <ul className="nospace inline pushright">
          <li><a className="btn" href="#">Dictum aenean</a></li>
          <li><a className="btn inverse" href="#">Nunc molestie</a></li>
        </ul>
      </footer>
    </article>
  </div>
</div>



        </div>
    )
}

export default Banner
