import axios from "axios";


const journalApi = axios.create({
    baseURL: 'https://vue-demos-c9ceb-default-rtdb.firebaseio.com'
})

export default journalApi