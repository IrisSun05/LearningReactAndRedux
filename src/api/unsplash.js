import Axios from 'axios';

export default Axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID 84953db0873769a0981efd6efb16ef0437eea272042930c55cfef9fa7a9dbadd'
    }
});