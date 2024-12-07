The solution involves ensuring that `useParams` is called within a component that's a child of a route component.

```javascript
// Correct usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const params = useParams();
  console.log(params); // params will contain route parameters
  // ...
}

function MyRoute(){
    return (
        <Route path="/my-route/:id" element={<MyComponent/>}/>
    )
}
```

By nesting `MyComponent` inside of a route, the `params` object will correctly contain the parameters from the URL path.