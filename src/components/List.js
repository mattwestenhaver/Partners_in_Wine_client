import React from 'react'

const List = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <div className = 'wineWrap'>

            <div className='wineList'>

                <div className='bottlePic'>
                  <img src={item.image} alt=''/>
                </div>

                <div className='bottleInfo'>
                  <a href={item.link}> {item.name} </a>
                  <p> {item.region.slice(0, (item.region.indexOf('>')))} </p>
                  <p> Price: ${item.price} </p>
                </div>

            </div>

            <br />
            <hr />

          </div>
        )
      })}
    </ul>
  )
}

export default List
