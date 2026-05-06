import"./App.css";
/**
 * 🧠 GRANDCHILD COMPONENT
 * ------------------------------------
 * This is where the USER interacts (click event).
 *
 * IMPORTANT IDEA:
 * - Grandchild does NOT change state
 * - It CALLS a function that belongs to Parent
 *
 * NEXT STEP: Click button and watch Parent update!
 */

function Grandchild(props) {
  return (
    <div style={{ border: "4px solid red", padding: "10px", marginTop: "10px" }}>
      <h4>Grandchild Component</h4>

      <p>Count in Grandchild: {props.count}</p>

      {/*
        🖱️ USER INTERACTION
        ------------------------------------
        When button is clicked:
        → we call a function from Parent
        → Parent updates state
        → UI re-renders automatically
      */}
      <button className="glow-button" onClick={props.increaseCount}>
  Increase Count
      </button>

      {/*
        "We are NOT changing state here.
         We are ASKING Parent to change it."
      */}
    </div>
  );
}

export default Grandchild;