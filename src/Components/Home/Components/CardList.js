import React from 'react'
import CardItem from './CardItem'
function CardList() {
    return (
        // <div class="wrapper row2">
        // <section id="introblocks" class="hoc container clear">
        //   <ul class="nospace group">
        //     <li class="one_third first">

        //     <CardItem imageclass="fas fa-hand-peace" text="hi" details ="fdbg" />
        //     <CardItem imageclass="fas fa-hand-peace" text="hi" details ="fdbg" />
        //     </li>
        //     </ul>
        //     </section>

        // </div>
        <div class="wrapper row2">
  <section id="introblocks" class="hoc container clear">

    <ul class="nospace group">
      <li class="one_third first">
       <CardItem imageclass="fas fa-hand-peace" text="hi" details ="React" />

      </li>
      <li class="one_third">
     <CardItem imageclass="fas fa-microphone" text="vanakam" details ="Angular" />

      </li>
      <li class="one_third">
      <CardItem imageclass="fas fa-moon" text="Namasthe" details ="Vue" />

      </li>
    </ul>
  </section>
</div>
    )
}

export default CardList
