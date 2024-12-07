In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered within a route.  This will lead to `undefined` values for your route parameters.

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams();
  console.log(params); // params will be undefined if not within a Route
  // ...
}
```