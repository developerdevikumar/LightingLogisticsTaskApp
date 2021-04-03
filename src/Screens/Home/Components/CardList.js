import React from 'react'
import CardItem from './CardItem'
function CardList() {
    return (

        <div className="wrapper row2">
  <section id="introblocks" className="hoc container clear">

    <ul className="nospace group">

       <CardItem className="fas fa-hand-peace" text="Hi Learn with Manoj" details ="React" />

     <CardItem imageclassName="fas fa-microphone" text="Hi Learn with Kumar" details ="Angular" />


      <CardItem imageclassName="fas fa-moon" text="Hi Learn with Team" details ="Vue" />

    </ul>
  </section>
</div>
    )
}

export default CardList
