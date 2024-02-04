# caarlosdamian-hooks

Empower your React applications with caarlosdamian-hooks a versatile collection of meticulously crafted hooks, enhancing productivity, simplifying state management, and seamlessly integrating APIs for a streamlined development experience.

### Features

- **useToggle**: Effortlessly manage boolean state with a toggle function.
- **useScreenDetails**: Simplifies the retrieval of screen dimensions within your React components.
- **useScroll**: Simplifies the management of scroll-related events within your React components. Provides information about the scroll direction and allows you to define callbacks for various scroll scenarios.
- **useEffectOnce**: Execute a callback only once when a component mounts.
- **useFetch**: Simplify data fetching in React components with ease.
- **useDebounce**: Debounce function calls, delaying execution for improved performance in scenarios like search operations or other asynchronous tasks.
- **useCursor**: Designed to track and return the cursor's position on the screen.
- **useDoubleClick**: Allows you to handle both single-click and double-click events with ease. You can use it to define custom behavior when a user clicks once or double-clicks on an element.
- **useTimer**: Designed to simplify the management of timers and timeouts within your React components. It provides functions to set and clear timers, making it easier to perform actions after a specified delay..

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
        {isToggled ? 'It Works!' : "Doesn't Work!"}
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

### `useEffectOnce`

The `useEffectOnce` hook allows you to run a callback function only once when a React component mounts. Here's a brief example of how to use it:

```jsx
import { useEffectOnce } from 'caarlosdamian-hooks';

function App() {
  // This callback will be executed only once when the component mounts
  useEffectOnce(() => {
    console.log('Component has mounted!');
    // Perform any one-time initialization or side effects here
  });

  return <>{/* Your component JSX */}</>;
}
```

### `useFetch`

The `useFetch` hook streamlines data fetching in your React components. It provides an easy-to-use interface for handling asynchronous requests and managing loading, data, and error states. Here's an example of how to use it:

```jsx
import { useFetch } from 'caarlosdamian-hooks';

function App() {
  // Define the fetch parameters
  const fetchConfig = {
    url: 'https://api.example.com/data',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Destructure the hook return values
  const { isLoading, data, error, isError } = useFetch(fetchConfig);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred while fetching data.</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </>
  );
}
```

### `useDebounce`

The `useDebounce` hook allows you to debounce function calls, delaying execution for improved performance in scenarios like search operations or other asynchronous tasks. Here's a brief example of how to use it:

```jsx
import { useDebounce } from './caarlosdamian-hooks';

const DebounceExample: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce the search function
  const debouncedSearch = useDebounce(async (term: string) => {
    // Perform your asynchronous search operation here
    console.log('Searching for:', term);
  }, 300); // Debounce for 300 milliseconds

  // Handle changes in the search input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Call the debounced search function with the latest search term
    debouncedSearch(newSearchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <p>Performing a debounced search for: {searchTerm}</p>
    </div>
  );
};

export default DebounceExample;
```

### `useCursor`

The `useCursor` hook tracks the cursor's position on the screen, providing x and y coordinates in real-time. It's perfect for creating interactive UI elements or for tracking user interaction within your application. Here's a simple example:

```jsx
import React from 'react';
import { useCursor } from 'caarlosdamian-hooks';

const CursorPositionComponent: React.FC = () => {
  const { positionX, positionY } = useCursor();

  return (
    <div>
      <h2>Cursor Position</h2>
      <p>
        X: {positionX}, Y: {positionY}
      </p>
    </div>
  );
};

export default CursorPositionComponent;
```

### `useDoubleClick`

The `useDoubleClick` hook is a React hook designed to simplify handling both single-click and double-click events on elements in your application. It allows you to define custom behavior for single and double clicks with ease. Here's a simple example:

```jsx
import { useDoubleClick } from 'caarlosdamian-hooks';
import React from 'react';

function MyComponent() {
  const handleSingleClick = (event) => {
    console.log('Single click event:', event);
    // Perform actions for a single click
  };

  const handleDoubleClick = (event) => {
    console.log('Double click event:', event);
    // Perform actions for a double click
  };

  const handleClick = useDoubleClick(handleDoubleClick, handleSingleClick);

  return <button onClick={handleClick}>Click me (single or double)!</button>;
}

export default MyComponent;
```

### `useTimer`

The `useTimer` hook simplifies the handling of timers in your React components. Here's a simple example:

```jsx
import { useTimer } from 'caarlosdamian-hooks';

function TimerComponent() {
  const { setTimer, clearTimer } = useTimer();

  // Function to be executed after a delay
  const delayedFunction = () => {
    console.log('Timer callback executed!');
  };

  // Start a timer to execute the function after 2000 milliseconds (2 seconds)
  const startTimer = () => {
    setTimer(delayedFunction, 2000);
  };

  // Stop the timer if needed
  const stopTimer = () => {
    clearTimer();
  };

  return (
    <>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
}

export default TimerComponent;
```
