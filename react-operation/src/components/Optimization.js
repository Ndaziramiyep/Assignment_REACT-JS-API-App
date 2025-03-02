import { useState } from "react";

const [cachedData, setCachedData] = useState(null);
const fetchData = async () => {
    try{
        if(cachedData){
            //use cached data if available
            return;
        }
        const response = await axios.get('https://api.example.com/data');
        setCachedData(response.data);
        //handle the response
    }
    catch(error){
        console.log('error fetching data:',error);
    }
};