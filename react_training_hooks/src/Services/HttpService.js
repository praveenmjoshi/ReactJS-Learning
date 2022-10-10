import axios from "axios";

export default{
    get: async (url) =>{
        try{
            const response =  await axios.get(url);
            return response
        }catch(error){
            throw error
        }
    }
}