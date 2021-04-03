import React from 'react'
import MessageList from './MessageList'

function MessageItem() {
    return (
        <div class="wrapper bgded overlay" >
        <section class="hoc container clear">
          <div class="center btmspace-80">
          <h6 class="heading underline font-x2">Integer sodales ultrices</h6>
          </div>    <ul id="testimonials" class="nospace group btmspace-80">
            <li class="one_half first">
          <MessageList tittle="ndjnjdnjd" heading="bdbjhnedhgbdbh" quate="ojdoijduiuifj" />
                </li>
                <li class="one_half">
            <MessageList tittle="ndjnjdnjd" heading="bdbjhnedhgbdbh" quate="ojdoijduiuifj" />
            </li>
                </ul>



          <footer class="center"><a class="btn" href="#">Phasellus pede mauris</a></footer>
        </section>
      </div>

    )
}

export default MessageItem
