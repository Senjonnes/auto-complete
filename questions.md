## What is the difference between Component and PureComponent? give an example where it might break my app.

**React Component** is mostly utilized when dealing with small application. As opposed to PureComponent, it rerenders itself everytime the props passed to it changes. It does not actually optimize react application.

**React PureComponent:** Here, shouldComponentUpdate() LifeCycle Method is not needed as Pure Component class compares current state and props with new props and states to decide whether the component should re-render or not. It remains one of the ways to optimize React applications.


## Context + ShouldComponentUpdate might be dangerous. Can think of why is that?


## Describe 3 ways to pass information from a component to its PARENT.

**1.** By invoking a method that returns data from the CHILD component
**2.** Using global state management
**3.** Using event emmiter

## Give 2 ways to prevent components from re-rendering.
**1.** useState() can be replaced with useRef(), this way we can track changes without rerendering the component
**2.** useMemo() and useCallback() enables memorization. It would prevent the component from rerendering when there is a change in props.

## What is a fragment and why do we need it? Give an example where it might break my app.
React fragment is sometime used when you need to wrap the component in a single parent element without using the normal HTML tags. Although the job is not only limited to this as it helps the overall rendering and reduces load on the DOM, resulting in faster rendering times and dcreased memory usage.

However, if not used properly it might break styling and overall experience of the application.

## Give 3 examples of the HOC pattern.
**1.** Enhancer
**2.** Injectors
**3.** Enhance + Inject

## What's the difference in handling exceptions in promises, callbacks and async...await.
**1.** Promises exceptions are usually handled in the catch block. However you can have a predefined exception by returning it using the reject callback method.
**2.** Callback exceptions can be handled using the try catch block. However, this could be done by passing a new Error("") in the callback function.
**3.** Async await error can also be handled in the try catch block.

## How many arguments does setState take and why is it async.
**1.** 2 arguments
**2.** This is async because multiple setState can be called at a time, so the process needs to be batched before component is rerendered with the new state.

## List the steps needed to migrate a Class to Function Component.
**1.** Change the class to a function
**2.** Remove the render method
**3.** Convert all methods to functions
**4.** Remove references to this
**5.** Remove constructor
**6.** Remove event handler bindings
**7.** Replace this.setState
**8.** useEffect for state update side effects
**9.** Replace lifecycle methods with hooks

## List a few ways styles can be used with components.
**1.** Add the Global Styles
**2.** Inline Style in React Component
**3.** Importing Styling File in Components
**4.** Creating Style Objects and Bind to Components

## How to render an HTML string coming from the server.
By using dangerouslySetInnerHTML component property.