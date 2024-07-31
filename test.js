const { DefaultApi } = require('sample_sdk');

const api = new DefaultApi();

const getResponse = async() => {
    try {
        
        const response = await api.usersGet()
        console.log("GET", response); 
        
        const newUser = { name: 'sdf sdfDoe', email: 'sdf@exadsfmplesdf.com' };
        const newRes = await api.usersPost(newUser)
        console.log("POST", newRes);
    } catch (error) {
        console.error("errro", error);
    }
}

getResponse()

