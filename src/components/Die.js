function Die(props) {
    return(        
          <div className = {props.isHeld ? "dice isHeld" : "dice"} onClick={props.holdDice}><h2>{props.value}</h2></div>
    )
}

export default Die
