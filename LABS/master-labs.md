:beginner: _**USER STORY 1**_  :hourglass: 30 mins

- As a user, I need a contact form for capturing the details of the interested professional.

:writing_hand: **_Requirements_**  
1. Apply different html elements
2. Use sematic tags
3. Use different types of css selectors
4. Use inline/internal/external styles.
5. [Future] Javascript for validation 


:beginner: _**USER STORY 2**_  :hourglass: 30 mins
- As a user, I need a theme changer with lights on and lights off.


:writing_hand: **_Requirements_**
  
  - The bulb is on with a dark background
  - The bulb is off with a light background
  - Clicking the bulb when is it on should make the bulb disapper.
  - Clicking the bulb when is it off should add another bulb.

:beginner: _**USER STORY 3**_  :hourglass: 30 mins
- As a user, I need data transfer functionality for the form below.
![](img/Contacts%20Form.png)  


:writing_hand: **_Requirements_**
  
  - Input Details should be transferred to the table format below:
  
| Label | Value |
|-|-|
| First Name | "Rambo" |
| Last Name | "John" |

- the table shoud be on the same html form

:bulb: transfer as it is typed, or when field loses focus or on submit.


:beginner: _**US04**_  
As a user, I need to store books in my cart as below.
![](img/bookcart.png)  

:writing_hand: **_Requirements_**
  
  - Each book be stored in a Book class
  - Store 2 or more books in booksCartArray with image
  - Render the cart dynamically on the page in a table of 2*2
  - Have a button Load Cart to perform the functionality.

:beginner: _**US05**_  
As a user, I need to access and manipulate a set. 

:writing_hand: **_Requirements_**
  
  - accept a service value from the user and print "We provide / do not provide such and such a servie"
  - add another object similar to the one added.
  - search for a location and print the service.


```ts
const services = new Set();
services.add('consulting');
services.add('iot');
services.add('monetization');
console.log(services);
services.add( {
    service : 'consulting',
    loc : 'mumbai',
    description : 'IT consulting services'
});
```

:beginner: _**US06**_  
As a developer, I need to understand the challenges with variables in javascript by implementing a calculator program.

:writing_hand: **_Requirements_**
- perform add, mul and div operations
- using classes, constructors, functions, var, let and const variables


:beginner: _**US07**_  
As a developer, I need to understand the internals of a workking program and fix issues.

:writing_hand: **_Requirements_**
- step in, step over, step out, resume operations
- use various debugging windows to track stat and values
- test var, let and const variables and check thier scopes.