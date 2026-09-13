# DevStack

DevStack is a simple and interactive web application that allows users to explore different technologies and build their own technology stack. Users can select technologies, add them to their stack, remove individual items, or clear the entire stack.

## Features

* **Explore Technologies** — Browse different technologies and their details.
* **Build Your Stack** — Add your favorite technologies to create a personalized stack.
* **Manage Your Stack** — Remove individual technologies or clear the entire stack with easy-to-use actions.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Toastify
* JSON
* React Hooks (`use`, `useState`, `Suspense`)

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand because we can describe the UI directly in our code.

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component. When state changes, React updates the UI.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data inside a React component.

In this project, I used `useState` in the `Technologies` component to store the selected technologies in the stack.

```tsx
const [stack, setStack] = useState<Itechnology[]>([])
```

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data, working with APIs, or interacting with external systems.

In this project, the JSON data is loaded when the application starts.

> Note: In this project, the data fetching is handled using a Promise and React's `use()` with `Suspense`, so `useEffect` was not required for loading the JSON data.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React understand which items were added, removed, or changed and update the UI efficiently.

For example:

```tsx
technologies.map((technology) => (
    <Technology
        key={technology.id}
        technology={technology}
    />
))
```

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the stack is empty, we can show an empty-stack message:

```tsx
{stack.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    <StackItems stack={stack} />
)}
```

Here, the message is displayed only when there are no technologies in the stack.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through **props**.

For example:

```tsx
<AllTechnologies
    technologies={technologies}
    addToStack={addToStack}
    stack={stack}
/>
```

The child can send something back to the parent by calling a function that the parent passed through props.

For example, the child can call:

```tsx
addToStack(technology)
```

This allows the parent component to update its state.

---

## 👨‍💻 Project

**DevStack** — Explore technologies and build your ideal development stack.
