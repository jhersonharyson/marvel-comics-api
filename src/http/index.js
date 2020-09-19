import axios from "axios";

import { apikey, baseURL, ApiVersion, ApiDomain } from "../env.json";

const http = axios.create({
    baseURL: `${baseURL}/${ApiVersion}/${ApiDomain}`,
    timeout: false,
    params: {
        apikey
    }
})

http.interceptors.request.use((response)=>response, (error)=>{
    console.log(error.message)
    return error
})

http.interceptors.response.use((response)=>response, (error)=>{
    console.log(error.message)
    return error
})

export default http
