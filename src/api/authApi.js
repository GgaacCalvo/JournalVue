import axios from "axios";


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: 'AIzaSyCauPXzIW3lWNGvsjA3aZiER_ctxoiOJew'
    }
})

export default authApi