import {useState} from "react";

export function EventHandleButton(){

    // const [counterData, mutateCounter]        =  useState(100);
    const [something, setSomething]  =  useState(100);
    // counter = counter + 1;
    function eventHandler(){
        setSomething(something +1);
        // alert("event handled!")
    }
    return (
        <button onClick={eventHandler}>
            Handled Click Event {something} times.
        </button>
    )
}