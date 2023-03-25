import React from 'react'
import { useState } from 'react';
import Menu from './MenuApi.js';
import Star from './Star.js';
const Mbody = () => {
    const [menuData,setMenuData]=useState(Menu);
    const Style={margin:10,padding:5};
   const S1={margin:20};
  return (
   <>
   {
    menuData.map((curelement) => {
      return(
   <>
<div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 g-4" style={Style} >
    <div class="col">
      <div class="card" style={S1}>
        <img src={curelement.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          
          <h5 class="card-title">{curelement.title}</h5>
          <p class="card-text">{curelement.discription}</p>
          <Star/>
        </div>
      </div>
     
    </div>
    <div class="col">
      <div class="card" style={S1}>
      <img src={curelement.image1}  class="img-fluid rounded-start" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{curelement.title1}</h5>
          <p class="card-text">{curelement.discription1}</p>
          <Star/>
        </div>
      </div>
     
    </div>
    <div class="col">
      <div class="card" style={S1}>
       <img src={curelement.image2} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{curelement.title2}</h5>
          <p class="card-text">{curelement.discription2}</p>
          <Star/>
        </div>
      </div>
     
    </div>
 
  </div>
   </>


      )
    })
   }
  </>
  )}

export default Mbody