import React from 'react'
import PeopleLIst from './PeopleLIst'

function PeopleItem() {
    return (
<>
<div className="wrapper row3">
      <main className="hoc container clear">
        {/* main body */}
        {/* ################################################################################################ */}
        <div className="content">
          {/* ################################################################################################ */}
          <div id="gallery">
            <figure>
              <PeopleLIst tittle="jhsdjks" text="kjj" />

            </figure>
          </div>
          {/* ################################################################################################ */}
          {/* ################################################################################################ */}
          <nav className="pagination">
            <ul>
              <li><a href="#">« Previous</a></li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><strong>…</strong></li>
              <li><a href="#">6</a></li>
              <li className="current"><strong>7</strong></li>
              <li><a href="#">8</a></li>
              <li><a href="#">9</a></li>
              <li><strong>…</strong></li>
              <li><a href="#">14</a></li>
              <li><a href="#">15</a></li>
              <li><a href="#">Next »</a></li>
            </ul>
          </nav>
          {/* ################################################################################################ */}
        </div>
        {/* ################################################################################################ */}
        {/* / main body */}
        <div className="clear" />
      </main>
    </div>
</>

    )
}

export default PeopleItem
