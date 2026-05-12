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
    const res = await fetch(`http://localhost:5000/destination/${id}`,{
        method: "PUT",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(editUser)
    })
    const data = await res.json()
    if(data.modifiedCount > 0){
        redirect(`/destination/${id}`)
    }
    return data
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

export const bookingCreate = async (userData) => {
    const res = await fetch(`http://localhost:5000/booking`,{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(userData)
    })
    const data = await res.json()
    console.log(data)
    return data
}

export const bookingData = async () => {
    const res = await fetch(`http://localhost:5000/booking`)
    return res.json()
}

export const deleteBooking = async(id) => {
    const res = await fetch(`http://localhost:5000/booking/${id}`,{
        method: "DELETE"
    })
    const data = res.json()
    console.log(id)
    return data
}