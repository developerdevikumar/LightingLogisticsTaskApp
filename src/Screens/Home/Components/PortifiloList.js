import React from 'react'
import PortifiloItem from './PortifiloItem'

function PortifiloList() {
    return (



<div class="wrapper row3">
<section class="hoc container clear">
  <div class="center btmspace-80">
    <h6 class="heading underline font-x2">Hendrerit ligula eu diam</h6>
  </div>
  <ul id="latest" class="nospace group">
    <li class="one_third first">
    <article>
<PortifiloItem tittle="hi" description="lemrmf" users="superadmin" time="sunday" />
</article>
    </li>
    <li class="one_third">
         <article>
<PortifiloItem tittle="hlo" description="ktkgrmg" users="admin" time="tuesday" />
</article>

    </li>
    <li class="one_third">
         <article>
<PortifiloItem tittle="hi" description="gbgn" users="user" time="monday "/>
</article>
</li>


  </ul>
</section>
</div>
          )
}

export default PortifiloList
