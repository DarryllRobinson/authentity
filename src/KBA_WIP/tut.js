function requireAuth(nextState, replace) {
  if (!auth.loggedIn() || !auth.activeUser()) {  // <--- Validate active
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
