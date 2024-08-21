# caarlosdamian-hooks

Empower your React applications with caarlosdamian-hooks, a versatile collection of meticulously crafted hooks. These hooks are designed to enhance your productivity, simplify state management, and seamlessly integrate APIs, providing a streamlined development experience. With caarlosdamian-hooks, you can leverage reusable functionalities to make your application development faster and more efficient.

### Features

- **useArray**: Manages an array state within your React components, offering a variety of methods for array manipulation.
- **useCookie**:  Simplifies the management of cookies within your React components.
- **useCursor**: Designed to track and return the cursor's position on the screen.
- **useDebounce**: Debounce function calls, delaying execution for improved performance in scenarios like search operations or other asynchronous tasks.
- **useDoubleClick**: Allows you to handle both single-click and double-click events with ease. You can use it to define custom behavior when a user clicks once or double-clicks on an element.
- **useEffectOnce**: Execute a callback only once when a component mounts.
- **useFetch**: Simplify data fetching in React components with ease.
- **useScreenDetails**: Simplifies the retrieval of screen dimensions within your React components.
- **useScroll**: Simplifies the management of scroll-related events within your React components. Provides information about the scroll direction and allows you to define callbacks for various scroll scenarios.
- **useSlider**: Easy and effective way to create slider functionality in your React applications.
- **useTimer**: Designed to simplify the management of timers and timeouts within your React components. It provides functions to set and clear timers, making it easier to perform actions after a specified delay.
- **useToggle**: Effortlessly manage boolean state with a toggle function.
- **useForm**: Simplifies form handling in React applications, providing an easy way to manage form state and handle input changes.
- **useRefState**: A hook for maintaining a mutable reference which does not trigger re-renders. Ideal for tracking values without affecting the component's output.
- **useLocaleStorage**: A hook designed for managing state in React components while persisting the state data to the browser's local storage. This hook is particularly useful for scenarios where you need to maintain state across page reloads or component unmounts.
- **useAsync**: Simplifies handling of asynchronous operations in React components by managing loading, error, and data states with ease.


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

### `useArray`

The `useArray` hook is designed to manage and manipulate array states within your React components seamlessly. It provides methods for adding, removing elements, and more, ensuring efficient state management and reactivity. Here's a simple example:

```jsx
import { useArray } from 'caarlosdamian-hooks';

function App() {
  // Initialize the hook with an initial array
  const {
    array,
    addElementAtTheEnd,
    addElementAtPosition,
    removeElement,
    removeFirstElement,
    removeLastElement,
    resetArray,
    replaceArray,
    getElementAtIndex,
  } = useArray([1, 2, 3]);

  // Example usage
  return (
    <div>
      {/* Display array */}
      <div>Array: {array.join(', ')}</div>

      {/* Add element at the end */}
      <button onClick={() => addElementAtTheEnd(4)}>Add 4 at the end</button>

      {/* Add element at position */}
      <button onClick={() => addElementAtPosition(5, 2)}>Add 5 at position 2</button>

      {/* Remove first element */}
      <button onClick={removeFirstElement}>Remove first element</button>

      {/* Remove last element */}
      <button onClick={removeLastElement}>Remove last element</button>

      {/* Reset array */}
      <button onClick={resetArray}>Reset Array</button>

      {/* Replace array */}
      <button onClick={() => replaceArray([10, 20, 30])}>Replace Array</button>

      {/* Get element at index */}
      <div>Element at index 1: {getElementAtIndex(1)}</div>
    </div>
  );
}

export default App;

```

### `useSlider`

The `useSlider` hook provides an easy and effective way to create slider functionality in your React applications. It is designed to handle the navigation through an array of items, allowing you to cycle through them either forward or backward. Here's a simple example:

```jsx
import { useSlider } from 'caarlosdamian-hooks';

const ImageSlider = ({ images }) => {
  const { actualPosition, goNext, goPrevius, goToItem } = useSlider(images);

  return (
    <div>
      <button onClick={goPrevius}>Previous</button>
      <img src={images[actualPosition]} alt="Slider Image" />
      <button onClick={() => goToItem(index)}>GoToItem</button>
      <button onClick={goNext}>Next</button>
    </div>
  );
};

```

### `useForm`

The `useForm`  hook simplifies form handling in React applications, providing an easy way to manage form state and handle input changes. Here's a simple example:

```jsx
import { useForm } from 'caarlosdamian-hooks';

function FormComponent() {
  const { values, handleChange, watch } = useForm({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values); // Do something with the form values
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}


```

### `useRefState`

The `useRefState` hook provides a way to manage a reference in React that persists across re-renders but does not cause re-renders itself. It's useful for tracking values or states within a component that do not directly impact the rendering output, such as storing the previous value of a state or managing focus without triggering unnecessary updates. Here's a simple example:

```jsx
import { useRefState } from 'caarlosdamian-hooks';

function MyComponent() {
  // Initialize useRefState hook
  const { ref, setRef } = useRefState();

  // Function to update the ref's current value
  const updateRef = () => {
    setRef(Math.random()); // Example: Update the ref to a random number
    console.log(ref); // Access the updated ref value
  };

  return (
    <div>
      <p>The current ref value is: {ref.current}</p>
      <button onClick={updateRef}>Update Ref</button>
    </div>
  );
}

export default MyComponent;



```

### `useLocaleStorage`

The `useLocaleStorage` hook allows you to store and retrieve stateful data in the local storage of the browser. It takes a key to identify the stored data, a default value to be used when the data is not found in the local storage, and options for serialization and deserialization of the stored data. Here's a simple example:

```jsx
import React from 'react';
import { useLocaleStorage } from 'caarlosdamian-hooks';

function MyComponent() {
  // Example usage of useLocaleStorage hook
  const [data, setData] = useLocaleStorage('myDataKey', 'default value');

  // Modify data using setData function
  const updateData = () => {
    setData('new value');
  };

  return (
    <div>
      <p>Data stored in local storage: {data}</p>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default MyComponent;

```

### `useAsync`

The `useAsync` hook simplifies handling of asynchronous operations in React components by managing loading, error, and data states with ease. It takes no parameters and returns an object containing the current state of the asynchronous operation and a function to run asynchronous tasks. Here's a simple example:

```jsx
import React, { useState } from 'react';
import { useAsync } from 'caarlosdamian-hooks';

function MyComponent() {
  // Example usage of useAsync hook
  const { status, data, error, run } = useAsync();

  // State to store input value
  const [inputValue, setInputValue] = useState('');

  // Function to fetch data asynchronously
  const fetchData = async () => {
    // Simulating fetching data from an API
    try {
      const response = await fetch(`https://api.example.com/data?q=${inputValue}`);
      const data = await response.json();
      // Updating data state
      run(data);
    } catch (error) {
      // Handling errors
      run(error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter search query" 
      />
      <button onClick={fetchData}>Fetch Data</button>
      
      {/* Display loading state */}
      {status === 'loading' && <p>Loading...</p>}
      
      {/* Display error if any */}
      {status === 'error' && <p>Error: {error.message}</p>}
      
      {/* Display data if available */}
      {status === 'success' && (
        <div>
          <p>Data:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default MyComponent;

```

### `useCookie`

The `useCookie`  hook simplifies the management of cookies within your React components. It allows you to retrieve and update cookie values easily. Here's a brief example of how to use it:

```jsx
import React from 'react';
import { useCookie } from './useCookie';

const CookieComponent: React.FC = () => {
  const [cookieValue, setCookieValue] = useCookie('user', 'defaultUser');

  return (
    <div>
      <h2>Cookie Value</h2>
      <p>Current Cookie: {cookieValue}</p>
      <button onClick={() => setCookieValue('newUser')}>
        Update Cookie
      </button>
    </div>
  );
};

export default CookieComponent;


```
