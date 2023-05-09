const user = {
    name: 'Katherinee',
    imageUrl: 'https://i.imgur.com/MK3eW3Am.jpg',
    imageSize: 150
}

// named export
export function Profile() {
    // Capitalize component names
    // returning more then one line of JSX code, wrap them inside () braces.
    // you can return a single element directly using return.
    // while using attribute names like class for use className
    // escape the JSX syntax and write javascript code using {}
    // applying a style which is placed inside {}, use {{}}
    // use the export keyword to export a function or component, so that they can be imported in another module.

    // default export tells that this is the main component.
    // import <<anyname>> from "./App.js"
    // import <<anyname>> from "./App"
    // index.js file : import Profile from './App';
    // index.js file : import UserProfile from './App'
    // only one default export in a file.
    // public class Profile (Profile.java). class Photo, class Person

    // named exports ?
    // export function Photo() {} - this is a named export.
    // export function Person() {} - this is a named export.
    // index.js : import {Photo,Person} from "./App";

    return (
        <>
            <h1>{user.name}</h1>
            <img className="circle" src={user.imageUrl} alt={'Photo : ' + user.name}
                 style={{width: user.imageSize, height: user.imageSize}}
            />
        </>
    )
}


// const tasks = [
//     {title: 'Create default component', id: 1},
//     {title: 'Create named component', id: 2},
//     {title: 'Import default component', id: 3},
//     {title: 'Export default component', id: 4},
// ]

const tasks = [
    {title: 'Create default component', id: 1, isComplete: true},
    {title: 'Create named component', id: 2, isComplete: true},
    {title: 'Import default component', id: 3, isComplete: false},
    {title: 'Export default component', id: 4, isComplete: false},
]

// // default export
// Functional Component
export default function TaskList() {
    //Step 1 : Performs logic, necassirily on data
    // Returns the elements of an array that meet the condition specified in a callback function
    // const listTasks = tasks.map((task) => {
    //     return (
    //     <li key={task.id}>
    //         {task.title}
    //     </li>);
    // });

    const listTasks = tasks.map(task =>
            <li key={task.id} style={{color:task.isComplete?'green':'red'}}>
                {task.title}
            </li>
    );
    // map(arrowFunction)
    // Step 2 : Generates JSX as the output
    return <>
        <h1>Task List!</h1>
        <ul>{listTasks}</ul>
    </>
}

// syntax snippet
// (fat) arrow functions
// (task)=> {
//     <li key={task.id}>
//         {task.title}
//     </li>
// }