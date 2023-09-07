
// export const myAction = ( state ) => {

// }

export const addUser = (state, data) => {
    //state => entries al inicio
    const {user, idToken, refreshToken} = data
    console.log(data)
   /* state = {
        user,
        idToken,
        refreshToken,
        status: 'authenticated'
    }*/
    state.user = user
    state.idToken = idToken
    state.refreshToken = refreshToken
    state.status = 'authenticated'
   
}