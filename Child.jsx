import Grandchild from "./Grandchild";

/**
 * 🧠 CHILD COMPONENT
 * ------------------------------------
 * This component:
 * - RECEIVES props from Parent
 * - DOES NOT change state
 * - JUST PASSES props down to Grandchild
 *
 * Go to Grandchild.jsx ---->
 */

function Child(props) {
  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <h3>Child Component</h3>

      <p>Count received from Parent: {props.count}</p>

      {/*
        🔽 PASSING PROPS AGAIN (BRIDGE ROLE)
        ------------------------------------
        Child is just a messenger.
        It forwards data + function to Grandchild.

        NEXT STEP: Go to Grandchild.jsx
      */}
      <Grandchild
        count={props.count}
        increaseCount={props.increaseCount}
      />
    </div>
  );
}

export default Child;