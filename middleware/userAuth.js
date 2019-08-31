export default ({store, route, redirect}) => {
  if (store.state.needAuthList.indexOf(route.path) !== -1) {
    if (!store.state.token) {
      return redirect('/login');
    }
  }
}
