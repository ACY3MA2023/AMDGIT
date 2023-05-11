import {useState} from "react";
//
// Parent
export default function ShareDataAndUpdateTogether(){
    const [something, setSomething]  =  useState(100);
    function handleSomethingProperty(){
        setSomething(something +1);
        // alert("event handled!")
    }
// How are the components tied up? where is the parent child relationship?
    return (
        <div>
            <h1>Update components together</h1>
            <EventHandleButtonUseStateLiftedUp someProperty={something} someChangeHandler={handleSomethingProperty}/>
            <EventHandleButtonUseStateLiftedUp someProperty={something} someChangeHandler={handleSomethingProperty}/>
        </div>
    )
}
// Child component
// LIFTING STATE UP : & SHARED BETWEEN COMPONENTS.
export function EventHandleButtonUseStateLiftedUp({someProperty,someChangeHandler}){
    // const [counterData, mutateCounter]        =  useState(100);
    // MOVE THE STATE UP
    // const [something, setSomething]  =  useState(100);
    // counter = counter + 1;
    return (
        <button onClick={someChangeHandler}>
            Handled Click Event {someProperty} times.
        </button>
    )
}