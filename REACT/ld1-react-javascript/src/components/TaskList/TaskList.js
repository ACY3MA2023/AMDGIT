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
export  function TaskList() {
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
