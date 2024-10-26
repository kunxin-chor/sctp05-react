# sctp05-react

To create a new React application, open a terminal
and make sure the terminal in the project root.

```
npm create vite@latest
```

## How to run your React application
1. Open the terminal at the React application
2. Run `npm install` once per project
3. If `npm install` has been ran before (or just after you ran it), execute `npm run dev`


## How to remove the existing css
1. Delete the content in `src/index.css`
2. Delete the content in `src/App.css`
3. Delete the content in `src/App.jsx` and replace with:
```
import React from 'react'

export default function App() {
  return (<>
    <h1>Hello World</h1>
  </>)
};
```
