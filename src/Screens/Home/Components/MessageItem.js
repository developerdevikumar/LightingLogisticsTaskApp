import React from 'react'

function MessageItem({tittle,heading,quate}) {
    return (

<li class="one_half first">

<blockquote>{tittle}</blockquote>
              <figure class="clear"><img class="circle" src="../demo/60x60.png" alt="" />
                <figcaption>
                  <h6 class="heading">{heading}</h6>
                  <em>{quate}</em></figcaption>
              </figure>
</li>
    )
}

export default MessageItem
