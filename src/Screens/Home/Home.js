import React from 'react'
import Banner from '../../Layout/Components/Banner';
import CardList from './Components/CardList';
import ItemList from './Components/ItemList';
import BoxList from './Components/BoxList';
import MessageList from './Components/MessageList';
import PortifiloList from './Components/PortifiloList';

function Home() {
    return (
        <div>
<Banner />
<CardList />
<ItemList />
<BoxList />
<MessageList />
<PortifiloList />
        </div>
    )
}

export default Home
