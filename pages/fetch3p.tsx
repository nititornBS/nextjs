import { count } from "console";
import { useEffect, useState } from "react";

const User = () => {
    type User = {
        name: { title: string; first: string; last: string },
        location: { city: string; country: string },
        picture: { large: string }
    }

    const [users, setUsers] = useState<User[]>();
    // const [showusers,setShowsers] = useState();

    useEffect(() => {
        (async () => {
            const res = await fetch("https://randomuser.me/api/?results=3")
            const user = await res.json();
            setUsers(user.results);
            /* why the results is undefined */


            // const { name, location, picture } = user.results.map ((item:User,i:number)=>{(i:number)=>{{item.name,item.location,item.picture}[i]}});
            // // setUsers({name,location, picture});
            // console.log(name, location, picture);


        })()
    }, [])
    // console.log(users);
    // console.log(users);


    const show = users?.map((item, index) => {
        // console.log(item)
        // const [name, location, picture] = users[0];
        const [name, location, picture] = [item.name, item.location, item.picture];
        // const [name] = [item.name];
        // console.log(name);
        // console.log(name.title);



        // console.log({name,location,picture});
        return (
            <div>
                {name.title} {name.first} {name.last} 
                
            </div>

        )
    })



    // const {name, location,picture} = users.results[0];

    return (
        <>
            {show}
        </>
    )
}
export default User;