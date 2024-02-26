const getData = async () =>{
    try{
        const response = await getCart();
        return response
    }catch(err){
        console.log(err);
    }
};