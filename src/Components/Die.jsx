export default function Die(props) {
    return (
        props.isHeld === true
      ? <button onClick={props.hold} style={{ backgroundColor: "#59E391" }}>{props.value}</button>
      :  <button onClick={props.hold} >{props.value}</button>
    )
}