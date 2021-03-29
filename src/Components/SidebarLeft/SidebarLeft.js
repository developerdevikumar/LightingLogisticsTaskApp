import React from 'react'
import CommentList from './Components/CommentList'
import Contact from './Components/Contact'
import Header from './Components/Header'
import SidemenuList from './Components/SidemenuList'

function SidebarLeft() {
    return (
        <div>
<Header />
<SidemenuList />
<CommentList />
<Contact />

        </div>
    )
}

export default SidebarLeft
