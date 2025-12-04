export default function Die(props) {
    // Determine background colour based on held state
    const isHeld = props.isHeld;
    const backgroundStyle = isHeld 
        ? { backgroundColor: "#59E391" } 
        : {};

    // Return one button with conditional styling
    return (
        <button 
            onClick={props.hold} 
            style={backgroundStyle}
        >
            {props.value}
        </button>
    );
}
