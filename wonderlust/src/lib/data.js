import { redirect } from "next/navigation"

export const getId = async (newUser) => {
    // console.log(newUser)
    const res = await fetch(`http://localhost:5000/destination`,{
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json()
    console.log(data)
    if(data.insertedId){
        redirect("/destination")
    }
    return data
}