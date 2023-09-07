const { useStore } = require("vuex")


const useAuth = () =>{

    const store = useStore()

    const createUser = async ( user) => {
       
        const resp = await store.dispatch('auth/createUser', user)
        console.log('2', resp)
        return resp
        
    }
    return{
        createUser
    }
}

export default useAuth
