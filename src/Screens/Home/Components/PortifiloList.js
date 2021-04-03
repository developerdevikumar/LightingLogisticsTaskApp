import React from 'react'

function PortifiloList({tittle,description,users, time}) {
    return (


                <div class="excerpt">
                  <h6 class="heading">{tittle}</h6>
                  <figure><a class="imgover" href="#"><img src="../demo/348x261.png" alt="" /></a></figure>

                  <ul class="nospace meta">

                    <li><i class="fas fa-user rgtspace-5"></i> <a href="#">{users}</a></li>
                    <li><i class="far fa-clock rgtspace-5"></i>
                      <time datetime="2045-04-06T08:15+00:00">{time}</time>
                    </li>
                  </ul>
                  <p>{description} [<a href="#">&hellip;</a>]</p>
                  <footer><a class="btn" href="#">Read More</a></footer>
                </div>


          )
}

export default PortifiloList
