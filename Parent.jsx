import { useState } from "react";
import Child from "./Child";

/**
 * 🧠 PARENT COMPONENT
 * ------------------------------------
 * This component:
 * 1. OWNS the state (source of truth)
 * 2. CREATES the function that updates state
 * 3. PASSES both down to Child as props
 *
 * Look at Child.jsx to see what receives props ---->
 */

function Parent() {
  // 🟢 STATE lives HERE (ONLY the parent can change this)
  const [count, setCount] = useState(0);

  /**
   * 🧠 FUNCTION THAT CHANGES STATE
   * ------------------------------------
   * This function is what we PASS to the child.
   * The child does NOT change state directly.
   */
  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>Parent Component</h2>

      {/* Display state */}
      <p>Count: {count}</p>

      {/*
        🔽 PASSING PROPS DOWN
        ------------------------------------
        We send:
        1. count (data)
        2. increaseCount (function)

        NEXT STEP: Go to Child.jsx
      */}
      <Child count={count} increaseCount={increaseCount} />
    </div>
  );
}

export default Parent;