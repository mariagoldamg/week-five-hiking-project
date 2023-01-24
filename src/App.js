import React from 'react';
import { useState } from 'react';
import { data } from './data';
import { dataOne } from './dataOne';
import './App.css';

function App() {

  const [items, setItems] = useState(data);

  const [hike, setHike] = useState (0);
  const {id,title,image,description} = dataOne[hike];

  const [showMore, setShowMore] = useState(false);

  const removeItem = (id)=>{
    let newItem = items.filter(item=>item.id !==id);
    setItems (newItem)
  }

const previousHike = () => {
setHike ((hike =>{
  hike--;
  if (hike<0){
    return dataOne.length-1
  }
  return hike;
}))
}
const nextHike = () => {
  setHike ((hike => {
    hike++;
    if (hike>dataOne.length-1){
      hike=0
    }
    return hike;
  }))
}

  return (
    <div >
    <div className='container'>
      <h1> Going for a Hike? We'll help you!</h1>
      </div>
      <div className='container'>
      <h2>{items.length} Things to pack for a hike</h2>
    </div>
<div className='arrayContainer'>
  {items.map((thing)=>{
    const {id, item, image} = thing

    return (
      <div key={id}>
<div  className='arrayContainer'>
  <img src={image} width= "200px" height="130px" alt="pic"/>
</div>
<div className='arrayContainer'>
  <p>{item}</p>
</div>
<div className='arrayContainer'>
<button className='removeBtn' onClick = {()=>removeItem (id)}>Remove</button>
</div>

      </div>
    )

  })}
</div>
<div className='container'>
<button className='deleteBtn' onClick = {()=> { setItems ([])}}>Delete All</button>
</div>

<div className='container'>
<h2>Best Hikes in Armenia</h2>
</div>
<div className='container'>
<h2>{id} - {title}</h2>
</div>
<div className='container'>
<img src={image} width="300px" alt="hikes"/>
</div>
<div className='container'>
<p>{showMore ? description : description.substring(0,100) + "..."} 
<button className='textBtn' onClick ={()=> setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button></p>
</div>

<div className='btn container'>
  <button className='slideBtn' onClick={previousHike} >Previous</button>
  <button className='slideBtn' onClick = {nextHike}>Next</button>
</div>
    </div>
  );
}

export default App;
