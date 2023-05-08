```js
east = {title:' X', price:10},
let
titles = books.map ( east => east.title
// ES5 equivalent:
var
titles = books.map function (item)
return
item.title
});
```
let
books = [
{title:' X', price:10},
{title:' Y', price: 20 },
];
:bulb: Arrow functions from traditional functions

```js
// traditional
function (item) {
    reutrn item.title;
}

books.map();

function (item) {
    return item.title;
}
// short hand and concise synatx of using functions
// anonymous functions
item => item.title
(item) => {return item.title}
(item, item1) => {
    const val = item + ' ' , item1;
    return val;
}
```

```js
var titles = books.map(item=> item.title)
```


