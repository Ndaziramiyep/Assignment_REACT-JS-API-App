
const fetchData = async ()=>{
try{
    const response =await axios.get('https://api.example.com/data',{
        headers:{
            Authorisation: `Bearer ${token}`,
        },
    });
}
catch(error){
    console.log('Error fetching data: ',error);
}
}

export default fetchData;