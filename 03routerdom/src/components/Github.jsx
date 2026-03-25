import { useLoaderData } from "react-router-dom";

export async function Gitloader() {
    const res = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return res.json();
}

function Github(){
    const data= useLoaderData();
    return (
        <div>FOLLOWERS : {data.followers} </div>
    )
}
export default Github