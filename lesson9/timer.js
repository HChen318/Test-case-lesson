export default (fn) => {
  setTimeout(() => {
    fn()
  }, 3000)
}
