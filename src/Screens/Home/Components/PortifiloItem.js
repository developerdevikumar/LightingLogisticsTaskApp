import React from 'react';
import PortifiloList from './PortifiloList'
function PortifiloItem() {
    return (
        <div class="wrapper row3">
        <section class="hoc container clear">
          <div class="center btmspace-80">
            <h6 class="heading underline font-x2">Hendrerit ligula eu diam</h6>
          </div>
          <ul id="latest" class="nospace group">
            <li class="one_third first">
            <article>
<PortifiloList tittle="gdchfjvyhughfjcifegvhcjsiufyh" description="gxdhfuyghbejkcihufckjdhifu" users="superadmin" time="sunday" />
</article>
            </li>
            <li class="one_third">
                 <article>
<PortifiloList tittle="gdchfjvyhughfjcifegvhcjsiufyh" description="gxdhfuyghbejkcihufckjdhifu" users="admin" time="tuesday" />
</article>

            </li>
            <li class="one_third">
                 <article>
<PortifiloList tittle="gdchfjvyhughfjcifegvhcjsiufyh" description="gxdhfuyghbejkcihufckjdhifu" users="user" time="monday "/>
</article>
</li>

            {/* <li class="one_third">
              <article>
                <figure><a class="imgover" href="#"><img src="../demo/348x261.png" alt="" /></a></figure>
                <div class="excerpt">
                  <h6 class="heading">Scelerisque justo lorem porta enim nec interdum quam</h6>
                  <ul class="nospace meta">
                    <li><i class="fas fa-user rgtspace-5"></i> <a href="#">Admin</a></li>
                    <li><i class="far fa-clock rgtspace-5"></i>
                      <time datetime="2045-04-05T08:15+00:00">05 Apr 2045</time>
                    </li>
                  </ul>
                  <p>Felis et libero aliquam ultrices aliquam quis purus feugiat tortor sodales vestibulum nunc sollicitudin tellus [<a href="#">&hellip;</a>]</p>
                  <footer><a class="btn" href="#">Read More</a></footer>
                </div>
              </article>
            </li> */}
            {/* <li class="one_third">
              <article>
                <figure><a class="imgover" href="#"><img src="../demo/348x261.png" alt="" /></a></figure>
                <div class="excerpt">
                  <h6 class="heading">Ultrices iaculis condimentum felis eros rutrum magna</h6>
                  <ul class="nospace meta">
                    <li><i class="fas fa-user rgtspace-5"></i> <a href="#">Admin</a></li>
                    <li><i class="far fa-clock rgtspace-5"></i>
                      <time datetime="2045-04-04T08:15+00:00">04 Apr 2045</time>
                    </li>
                  </ul>
                  <p>A blandit augue lorem ac est pellentesque et risus sed quis magna vestibulum erat nisl luctus iaculis consequat [<a href="#">&hellip;</a>]</p>
                  <footer><a class="btn" href="#">Read More</a></footer>
                </div>
              </article>
            </li> */}
          </ul>
        </section>
      </div>
    )
}

export default PortifiloItem
