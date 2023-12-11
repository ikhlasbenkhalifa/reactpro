import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function PlayerList(props) {
  return (
    <div>
      <div class="card" style={{width: "18rem"}}>
  <img src={props.joueurImage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.joueurName}</h5>
 
    
  </div>
</div>
    </div>
  )
}
