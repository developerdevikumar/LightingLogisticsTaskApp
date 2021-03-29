import React from 'react'

function CardItem({imageclass, text, details}) {
    return (
        <div>


        <article><a href="#"><i class={`""${imageclass}`}></i></a>
          <h6 class="heading underline">{text}</h6>
          <p>{details}</p>
        </article>

        </div>
    )
}

export default CardItem
