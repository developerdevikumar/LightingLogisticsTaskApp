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

<Item  tittle="MALESUADA FAMES"  class="fas fa-newspaper" description="iouiouy87truytuytytrffr5ty" >
<i></i>
</Item>

<Item className="fas fa-newspaper" tittle="ELEIFEND AUGUE" description="kbjhkjhjhyugfytvvh">
<i class="fas fa-newspaper"></i>
</Item>
<Item className="fas fa-motorcycle" tittle="CONSECTETUER EUISMOD" description="poiuytrdyfghjhytdrsetdfcgvhtcfghb" />
<Item className="fas fa-motorcycle" tittle="CONDIMENTUM VITAE" description="yughtfuy7tuyy8" />
<Item className="fas fa-motorcycle" tittle="PRAESENT ELEMENTUM" description="ycftyguygguyguuyg" />
<Item className="fas fa-motorcycle" tittle="POSUERE CURABITUR" description="hifguyftgugfgvhjgv" />

</ul>
    <footer class="center"><a class="btn" href="#">Text button </a></footer>

    <div class="clear"></div>
  </main>
</div>




</>

    )
}

export default ItemList
