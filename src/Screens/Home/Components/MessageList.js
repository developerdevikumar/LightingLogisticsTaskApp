import React from 'react'

function MessageList() {
    return (
        <div class="wrapper bgded overlay" >
        <section class="hoc container clear">
          <div class="center btmspace-80">
            <h6 class="heading underline font-x2">Integer sodales ultrices</h6>
          </div>
          <ul id="testimonials" class="nospace group btmspace-80">
            <li class="one_half first">
              <blockquote>Feugiat ligula augue tempor orci ullamcorper mattis erat pede at magna praesent non justo praesent vitae magna at metus pulvinar aliquam nulla dictum vestibulum lorem nam at elit vel erat eleifend.</blockquote>
              <figure class="clear"><img class="circle" src="../demo/60x60.png" alt="" />
                <figcaption>
                  <h6 class="heading">A. Doe</h6>
                  <em>CEO / Quis velit neque</em></figcaption>
              </figure>
            </li>
            <li class="one_half">
              <blockquote>Nec nisi id odio ultricies fermentum integer dolor nisi bibendum a faucibus nec ultricies at arcu aliquam nec eros quis est placerat vehicula in hac habitasse platea dictumst aliquam erat volutpat.</blockquote>
              <figure class="clear"><img class="circle" src="../demo/60x60.png" alt="" />
                <figcaption>
                  <h6 class="heading">B. Doe</h6>
                  <em>Director / Euismod tincidunt</em></figcaption>
              </figure>
            </li>
          </ul>
          <footer class="center"><a class="btn" href="#">Phasellus pede mauris</a></footer>
        </section>
      </div>
    )
}

export default MessageList
