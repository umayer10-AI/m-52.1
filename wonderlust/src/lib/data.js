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
    
    if(data.insertedId){
        redirect("/destination")
    }
    return data
}

export const updateUSer = async (id,editUser) => {
    // const res = await fetch(`http://localhost:5000/destination/${id}`,{
    //     method: "PATCH",
    //     headers: {
    //         "content-type":"application/json"
    //     },
    //     body: JSON.stringify(editUser)
    // })
    // const data = await res.json()
    console.log(editUser)
    // return data
}

export const deleteUser = async (id) => {
    const res = await fetch(`http://localhost:5000/destination/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    if(data.deletedCount > 0){
        redirect("/destination")
    }
    return data
}

export const getUserId = async (id) => {
    const res = await fetch(`http://localhost:5000/destination/${id}`)
    return res.json()
}