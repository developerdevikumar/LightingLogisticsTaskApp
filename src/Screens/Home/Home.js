import React from 'react'
import Banner from '../../Layout/Components/Banner';
import CardList from './Components/CardList';
import ItemList from './Components/ItemList';
import BoxList from './Components/BoxList';
import MessageItem from './Components/MessageItem';
import PortifiloItem from './Components/PortifiloItem';

function Home() {
    return (
        <div>
<Banner />
<CardList />
<ItemList />
<BoxList />
<MessageItem />
<PortifiloItem/>
        </div>
    )
}

export default Home
