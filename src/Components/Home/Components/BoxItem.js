import React from 'react'

function BoxItem({ tittle }) {
    return (

<li class="one_quarter first">
        <figure class="fixwidth"><a class="imgover btmspace-30" href="#"><img src="../demo/348x261.png" alt="" /></a>
          <figcaption class="bold uppercase center">{tittle}</figcaption>
        </figure>
      </li>
    )
}

export default BoxItem
