import React from 'react'
import CardItem from './CardItem'
function CardList() {
    return (
        // <div className="wrapper row2">
        // <section id="introblocks" className="hoc container clear">
        //   <ul className="nospace group">
        //     <li className="one_third first">

        //     <CardItem imageclassName="fas fa-hand-peace" text="hi" details ="fdbg" />
        //     <CardItem imageclassName="fas fa-hand-peace" text="hi" details ="fdbg" />
        //     </li>
        //     </ul>
        //     </section>

        // </div>
        <div className="wrapper row2">
  <section id="introblocks" className="hoc container clear">

    <ul className="nospace group">
      <li className="one_third first">

       <CardItem className="fas fa-hand-peace" text="Hi Learn with Manoj" details ="React" />

      </li>
      <li className="one_third">
     <CardItem imageclassName="fas fa-microphone" text="Hi Learn with Kumar" details ="Angular" />

      </li>
      <li className="one_third">
      <CardItem imageclassName="fas fa-moon" text="Hi Learn with Team" details ="Vue" />

      </li>
    </ul>
  </section>
</div>
    )
}

export default CardList
