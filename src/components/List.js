import React from 'react'

const List = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <div className = 'wineWrap'>

            <div className='wineList'>

                <div className='bottlePic'>
                  <img src={item.image} alt={item.name}/>
                </div>

                <div className='bottleInfo'>
                  <a href={item.link}> {item.name} </a>
                  <p> Country: {item.region} </p>
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
