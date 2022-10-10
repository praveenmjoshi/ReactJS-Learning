
const axios = require('axios');

export const get = async(url) =>{
    try{
        const response = await axios.get(url)
        return response;
    }catch(error){
        throw error
    }
}