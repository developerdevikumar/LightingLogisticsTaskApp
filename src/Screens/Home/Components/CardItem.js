import React from 'react'

function CardItem({imageclass, text, details}) {
    return (
<li className="one_third first">

        <article><a href="#"><i class={`""${imageclass}`}></i></a>
          <h6 class="heading underline">{text}</h6>
          <p>{details}</p>
        </article>
        </li>

    )
}

export default CardItem
