import React from 'react'

function MessageList({tittle,heading,quate}) {
    return (
<>
<blockquote>{tittle}</blockquote>
              <figure class="clear"><img class="circle" src="../demo/60x60.png" alt="" />
                <figcaption>
                  <h6 class="heading">{heading}</h6>
                  <em>{quate}</em></figcaption>
              </figure>


            {/* <li class="one_half">
              <blockquote>Nec nisi id odio ultricies fermentum integer dolor nisi bibendum a faucibus nec ultricies at arcu aliquam nec eros quis est placerat vehicula in hac habitasse platea dictumst aliquam erat volutpat.</blockquote>
              <figure class="clear"><img class="circle" src="../demo/60x60.png" alt="" />
                <figcaption>
                  <h6 class="heading">B. Doe</h6>
                  <em>Director / Euismod tincidunt</em></figcaption>
              </figure>
            </li> */}
</>



    )
}

export default MessageList
