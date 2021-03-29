import React from 'react'
import Item from './Item'

function ItemList() {
    return (
<>
<div class="wrapper row3">
  <main class="hoc container clear">

    <div class="center btmspace-80">
      <h6 class="heading underline font-x2">Products \ View </h6>
    </div>
    <ul class="nospace group overview btmspace-80">

<Item iconclass="fas fa-motorcycle" tittle="p1" description="p1descri" />
<Item iconclass="fas fa-newspaper" tittle="p2" description="p2descri" />
<Item iconclass="fas fa-motorcycle" tittle="p3" description="p3descri" />
<Item iconclass="fas fa-motorcycle" tittle="p4" description="p4descri" />
<Item iconclass="fas fa-motorcycle" tittle="p5" description="p5descri" />
<Item iconclass="fas fa-motorcycle" tittle="p6" description="p6descri" />

</ul>
    <footer class="center"><a class="btn" href="#">Text button </a></footer>

    <div class="clear"></div>
  </main>
</div>




</>

    )
}

export default ItemList
