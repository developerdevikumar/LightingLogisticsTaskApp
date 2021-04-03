import React from 'react'
function Item({description, iconclass, tittle}) {
    return (
        <React.Fragment>

      <li class="one_third">
        <article>
      <div class="clear"><a href="#"><i class={`"fas fa-motorcycle"${iconclass}`}></i></a>
            <h6 class="heading">{tittle}</h6>
          </div>
          <p>{description}</p>
        </article>
      </li>


        </React.Fragment>


          )
}

export default Item
