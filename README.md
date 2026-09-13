# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.



Project Name : Dev Stack.

Description : 
Dev Stack is a technology stack explorer where developers can
explore different database, and development tools.

Technology :
1 - React
2 - Vite
3 - JSON
4 - TypeScript
5 - Tailwind CSS
6 - DaisyUI
7 - React-Icon
8 - React-Toastify

Features:
1 - Explore different technologies.
2 - Add technologies to Your Stack
3 - Remove technologies from Your Stack



1.  What is JSX, and why is it used in React?
Answer: JSX is a syntax that lets us write HTML-like code inside JavaScript . It makes React UI easier to write and understand.

2. What is the difference between props and state?
Answer: Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?
Answer: useState is used to store and update data in a React component. I used it to store the technologies that are added to the "Your Stack".

4. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: useEffect is used to perform side effects such as fetching data. I did not use useEffect in this project because I used React's use() with a Promise to load the JSON data.

5. Why does every item in a .map() list need a unique key prop?
Answer: React uses the key to identify each item in a list. It helps React update the list efficiently when something changes.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Answer: Conditional rendering means showing different UI based on a condition. I used it in "Your Stack" to show an empty message when no technology is selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer: A parent component passes data to a child through props. A child can send information back by calling a function passed to it through props. In my project, MainCard passes the stack data and functions to YourStack.

  
  
   (Bhai/BSon: ami English Durbol Tai AI help nici.)