:books: **React**  

:point_right: component?
- a button / a munu bar or an entire page.
- class components / functional components
- javascript functions which can create the UI dynamically.

:point_right: Write our first component.
```ts
App.js

export function Button() {
    return <button>A simple component in react</button>
}

// public static void main()
export default function App(){
    return (
      <div>
        <h1>Our first great app!</h1>
        <Button/>
     </div>
    )
}
```

:bell: export makes components available outside the moudle (file)
:bell: export default means the main component available outside the moudle (file)  
  
