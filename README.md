# caarlosdamian-hooks

Empower your React applications with caarlosdamian-hooks a versatile collection of meticulously crafted hooks, enhancing productivity, simplifying state management, and seamlessly integrating APIs for a streamlined development experience.


### Features

-  **useToggle**: Effortlessly manage boolean state with a toggle function.
-  **useScreenDetails**: Simplifies the retrieval of screen dimensions within your React components.
-  **useScroll**: Simplifies the management of scroll-related events within your React components. Provides information about the scroll direction and allows you to define callbacks for various scroll scenarios.

### Install

    npm install caarlosdamian-hooks 

or

    yarn add caarlosdamian-hooks

## Usage

### `useToggle`

The `useToggle` hook simplifies the management of boolean state within your React components. Here's a brief example of how to use it:

```jsx
import { useToggle } from 'caarlosdamian-hooks';

function App() {
  // Destructure the hook return values
  const [isToggled, toggle] = useToggle();

  return (
    <>
      {/* Button to toggle the state */}
      <button onClick={toggle}>
        {isToggled ? 'It Works!' : 'Doesn\'t Work!'}
      </button>
    </>
  );
}

export default App;
```

### `useScreenDetails`

The `useScreenDetails` hook simplifies the retrieval of screen dimensions within your React components. Here's a brief example of how to use it:

```jsx
import React from 'react';
import { useScreenDetails } from './useScreenDetails';

const ScreenDetailsComponent: React.FC = () => {
  const { width, height } = useScreenDetails();

  return (
    <div>
      <h2>Screen Details</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default ScreenDetailsComponent;
```

### `useScroll`

The `useScroll` hook is a React custom hook designed to simplify the management of scroll-related events within your components. It provides information about the scroll direction and allows you to define callbacks for various scroll scenarios.

```jsx
import React from 'react';
import { useScroll } from './useScroll';

const ScrollComponent: React.FC = () => {
  const handleScrollUp = () => {
    console.log('Scrolling Up!');
    // Add your custom logic for scrolling up
  };

  const handleScrollDown = () => {
    console.log('Scrolling Down!');
    // Add your custom logic for scrolling down
  };

  const handleScroll = () => {
    console.log('Scrolling...');
    // Add your custom logic for general scrolling
  };

  const { scrollDirection } = useScroll({
    callbackUp: handleScrollUp,
    callbackDown: handleScrollDown,
    callbackOnScroll: handleScroll,
  });

  return (
    <div>
      <h2>Scroll Information</h2>
      <p>Scroll Direction: {scrollDirection}</p>
      {/* Add additional components or UI elements based on scroll information */}
    </div>
  );
};

export default ScrollComponent;
```
