import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_API = 'http://localhost:8000/api';

export default {
    checkToken:async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`,{
            method: 'POST',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        })
        const json = await req.json();
        return json
    },
    messages: async (id) => {
        const req = await fetch(`${BASE_API}/user/${id}/conversations`,{
            method: 'GET',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await req.json();
        return json
    },
    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`,{
            method: 'POST',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        const json = await req.json();
        return json

    },

    getBarbers: async (let=null, lng=null, address=null) => {
        const token = await AsyncStorage.getItem('token')

        const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`)
        const json = await req.json();
        return json
    }

};