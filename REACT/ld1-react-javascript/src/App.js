// user object to hold data
const user = {
    name:'Katherine',
    imageUrl: 'https://i.imgur.com/MK3eW3Am.jpg',
    imageSize: 150
}


// default export (main component)
export default function Profile() {
    return(
        <>
            <h1>{user.name}</h1>
            <img src={user.imageUrl} alt={'Photo : ' + user.name}
            style = {{width:user.imageSize, height:user.imageSize}}
            />
        </>
    )
}