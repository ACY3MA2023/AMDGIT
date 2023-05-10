import {EventHandleButton} from "./components/ComponentStore/EventHandleButtonUseState";
import {Profile} from "./components/Profile/Profile";
import {TaskList} from "./components/TaskList/TaskList";

const ProfileComponent = () => <><h1>Our Profile Component</h1><Profile/></>

const EventHandlerComponents = () => {
    return (
        <>
            <EventHandleButton/><br/><br/>
            <EventHandleButton/><br/><br/>
            <EventHandleButton/><br/><br/>
        </>
    )
}
export default function App() {
    return (
        <>
            <Profile/>
            <ProfileComponent/><br/><br/>
            <EventHandlerComponents/><br/><br/>
            <TaskList/><br/><br/>
        </>
    )
}
// syntax snippet
// (fat) arrow functions
// (task)=> {
//     <li key={task.id}>
//         {task.title}
//     </li>
// }


