# React Router v6 useParams Hook Usage Outside Route

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6. The `useParams` hook must be used within a component that's rendered inside a route; otherwise, it returns `undefined`.

The `bug.js` file shows the incorrect implementation, resulting in the error. The `bugSolution.js` provides the correct implementation.