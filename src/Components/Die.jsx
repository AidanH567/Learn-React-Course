export default function Die(props) {
    return (
        props.isHeld === true
      ? <button style={{ backgroundColor: "#59E391" }}>{props.value}</button>
      :  <button>{props.value}</button>
    )
}