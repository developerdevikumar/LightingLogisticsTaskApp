import React from 'react'
import  MessageItem from "./MessageItem";
function MessageList() {
    return (

<div className="wrapper bgded overlay" style={{backgroundImage: 'url("../demo/backgrounds/01.png")'}}>
  <section className="hoc container clear">
    {/* ################################################################################################ */}
    <div className="center btmspace-80">
      <h6 className="heading underline font-x2">Integer sodales ultrices</h6>
    </div>
    <ul id="testimonials" className="nospace group btmspace-80">


<MessageItem tittle="jhdc" heading="djjd" quate="hdbchd" />
<MessageItem tittle="jhdtghhc" heading="djjhgjhgd" quate="hhghjdbchd" />


    </ul>
    <footer className="center"><a className="btn" href="#">Phasellus pede mauris</a></footer>
    {/* ################################################################################################ */}
  </section>
</div>





    )
}

export default MessageList
