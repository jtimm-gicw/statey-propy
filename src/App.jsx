import { useState } from "react";
import Parent from "./Parent";
import "./App.css";

/**
 * 🧠 APP (ROOT / ENTRY POINT)
 * ------------------------------------
 * This is where our application starts.
 * We render the Parent component here.
 *
 * Go to Parent.jsx ---->
 */

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">React Component Flow Demo</h1>
      <p className="flow-note">
        App → Parent → Child → Grandchild (props + state flow)
      </p>

      <Parent />
    </div>
  );
}

export default App;