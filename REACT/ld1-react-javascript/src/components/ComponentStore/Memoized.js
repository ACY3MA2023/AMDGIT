// named imports.
import { memo, useState } from 'react';
// the import statement for this?
// import anythingCustomNamed from .....
export default function Memoized() {
    // destructuing es6......
    const [name, setName] = useState('Peter');
    const [address, setAddress] = useState('');
    return (
        <>
            <label>
                Name{': '}
                {/*comment-line inside jsx*/}
                {/*const arrowFunction = event => setName(event.target.value)*/}
                <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Address{': '}
                <input value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <Greeting name={name} />
            <Greeting1 name={name} />
        </>
    );
}
const Greeting = memo(function Greeting({ name }) {
    console.log('Greeting was rendered at', new Date().toLocaleTimeString());
    // state inside the child component.
    // const [greeting, setGreeting] = useState('Hello');
    return (
        <>
            <h3>Hello {name}</h3>
        </>
    );
});

const Greeting1 = function Greeting({ name }) {
    console.log('*********************** Greeting was rendered at', new Date().toLocaleTimeString());
    // state inside the child component.
    // const [greeting, setGreeting] = useState('Hello');
    return (
        <>
            <h3>Hello 1  {name}</h3>
        </>
    );
};