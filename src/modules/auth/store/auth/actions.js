
// export const myAction = async ({ commit }) => {

import authApi from "../../../../api/authApi"

// }



export const createUser = async ({ commit }, user) => {

    const {email, password } = user
    console.log(user)
    try {
        const {data} = await authApi.post(':signUp', {email, password, returnSecureToken: true})
        console.log(data, user.email)
        commit('addUser', {user, idToken: data.idToken, refreshToken: data.refreshToken})
        return {ok: true}

    } catch (error) {
        
        return {ok: false, message: error.response.data.error.message}
    }


}   
