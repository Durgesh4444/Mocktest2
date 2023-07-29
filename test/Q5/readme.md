A higher-order component (HOC) is a function that takes another component as its input and returns a new component as its output. HOCs are often used to add functionality to existing components without having to rewrite them.

For example, let's say you have a component called `App` that renders a list of items. You could create a HOC called `withAuth` that takes an authentication function as its input and returns a new component that wraps the `App` component. The `withAuth` component would then use the authentication function to check if the user is logged in before rendering the `App` component.

Here is an example of how you could use the `withAuth` HOC:

```javascript 
const App = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
​
const withAuth = (authFn) => (Component) => {
  return (
    <Component
      authFn={authFn}
    />
  );
};
​
const AppWithAuth = withAuth(checkAuth)(App);
​
export default AppWithAuth;
```
When the `AppWithAuth` component is rendered, the `withAuth` HOC will first check if the user is logged in. If the user is not logged in, the `withAuth` HOC will render a login form. If the user is logged in, the `withAuth` HOC will render the `App` component.

HOCs are a powerful tool for reusing code and adding functionality to existing components. They can be used to create complex components with a lot of functionality without having to write a lot of code.
