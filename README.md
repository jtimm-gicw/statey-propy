# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🧠 React State & Props Demo Guide

## Passing Functions Between Components (Parent → Child → Grandchild)

------------------------------------------------------------------------

## 🎯 What You Are Learning

In this demo, you will learn one of the most important ideas in React:

> **How components communicate using props and functions**

This includes: - What **state** is - What **props** are - How data flows
in React - How a **child component can trigger changes in a parent
component**

------------------------------------------------------------------------

## 🌊 Big Idea: React is One-Way Data Flow

React works like a **waterfall**:

Parent → Child → Grandchild

-   Data flows **DOWN**
-   Components do NOT directly send data back up

But we still need a way for children to change things in the parent.

👉 That is where **functions as props** come in.

------------------------------------------------------------------------

## 🧠 Key Terms (Simple Definitions)

### 🟢 State

State is **data that a component owns and controls**.

``` js
const [count, setCount] = useState(0);
```

-   count = current value
-   setCount = function to change the value

Only the component that owns state can change it.

------------------------------------------------------------------------

### 🔵 Props

Props are how we **send data from parent to child**.

``` jsx
<Child count={count} />
```

Props are read-only in the child.

------------------------------------------------------------------------

### 🟡 Functions as Props

We can also pass functions down as props.

``` jsx
<Child increaseCount={increaseCount} />
```

This allows a child to "ask the parent to do something".

------------------------------------------------------------------------

## 🧭 How This Demo Works

### 1. App.jsx

-   Starts the app
-   Renders Parent

### 2. Parent.jsx (STATE OWNER)

-   Creates state
-   Creates update function
-   Passes both down

``` js
const [count, setCount] = useState(0);

function increaseCount() {
  setCount(count + 1);
}
```

``` jsx
<Child count={count} increaseCount={increaseCount} />
```

------------------------------------------------------------------------

### 3. Child.jsx (PASS-THROUGH)

-   Receives props
-   Passes props down

``` jsx
<Grandchild count={props.count} increaseCount={props.increaseCount} />
```

------------------------------------------------------------------------

### 4. Grandchild.jsx (USER ACTION)

``` jsx
<button onClick={props.increaseCount}>
  Increase Count
</button>
```

------------------------------------------------------------------------

## 🔁 Full Flow

1.  Parent creates state
2.  Parent passes data + function down
3.  Child passes props down
4.  Grandchild clicks button
5.  Function runs in Parent
6.  Parent updates state
7.  UI re-renders

------------------------------------------------------------------------

## 🎯 Key Takeaway

State always lives in the Parent.\
Children do NOT change state --- they request changes using functions
passed as props.


### Repo link
Feel free to clone this down using the SSH.
[Statey Propy Repo](https://github.com/jtimm-gicw/statey-propy)

**SSH:** *git@github.com:jtimm-gicw/statey-propy.git*