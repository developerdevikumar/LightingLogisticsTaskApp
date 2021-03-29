import React from 'react'
import BoxItem from './BoxItem'

function BoxList() {
    return (
        <div>
<div class="wrapper row2">
      <div class="center btmspace-80">
      <h6 class="heading underline font-x2">Eros cum sociis natoque</h6>
    </div>
    <ul class="nospace group">
    <li class="one_quarter">

     <BoxItem tittle="kumar" />
</li>

     <li class="one_quarter">
        <BoxItem tittle="prasad" />
      </li>
      <li class="one_quarter">
        <BoxItem tittle="Devu" />
      </li>

    </ul>

</div>
        </div>
    )
}

export default BoxList
