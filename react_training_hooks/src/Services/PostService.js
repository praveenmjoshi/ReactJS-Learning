import HttpService from "./HttpService"

export default{
    getAllPosts : async ()=>{
       try{
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await HttpService.get(url);
            return response.data
       }catch(error){
           throw error.response.status
       }
    }
}