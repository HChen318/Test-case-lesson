// mock的demo.js替换根目录的demo.js

export const fetchData = () => {
  return new Promise((resolved, reject) => {
    resolved("(function(){return '123'})()")
  })
}
