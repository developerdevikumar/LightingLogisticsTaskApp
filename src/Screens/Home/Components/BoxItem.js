  import React from 'react'
  function BoxItem({tittle}) {
      return (
        <>
<li class="one_quarter first">
<figure classname="fixwidth"><a classname="imgover btmspace-30" href="#"><img src="../demo/348x261.png" alt /></a>
      <figcaption classname="bold uppercase center">{tittle}</figcaption>
    </figure>


</li>
<li class="one_quarter">
<figure classname="fixwidth"><a classname="imgover btmspace-30" href="#"><img src="../demo/348x261.png" alt /></a>
      <figcaption classname="bold uppercase center">{tittle}</figcaption>
    </figure>


</li>
<li class="one_quarter">
<figure classname="fixwidth"><a classname="imgover btmspace-30" href="#"><img src="../demo/348x261.png" alt /></a>
      <figcaption classname="bold uppercase center">{tittle}</figcaption>
    </figure>


</li>
<li class="one_quarter">
<figure classname="fixwidth"><a classname="imgover btmspace-30" href="#"><img src="../demo/348x261.png" alt /></a>
      <figcaption classname="bold uppercase center">{tittle}</figcaption>
    </figure>


</li>

</>


      )
  }

  export default BoxItem
