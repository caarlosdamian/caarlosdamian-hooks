# caarlosdamian-hooks

Empower your React applications with caarlosdamian-hooks—a versatile collection of meticulously crafted hooks, enhancing productivity, simplifying state management, and seamlessly integrating APIs for a streamlined development experience.


### Features

-  **useToggle**: Effortlessly manage boolean state with a toggle function.

### Install

    npm install caarlosdamian-hooks 
    
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
