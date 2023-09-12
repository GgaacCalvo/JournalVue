import store from '@/store'



const isAuthenticatedGuard = async (to, from, next) => {
    const {ok} = await store.dispatch('auth/checkAuthentication')
    console.log('asd', store)

    if (ok) {
      console.log(to, from)
      next({name: 'no-entry'})
  } else {
    next({ name: "login" });
  }
};

export default isAuthenticatedGuard
