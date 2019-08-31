export default ({store, redirect}) => {
  if (!store.state.token) {
    return redirect('/login');
  }
}
