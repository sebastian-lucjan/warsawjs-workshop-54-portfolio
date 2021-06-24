import './css/style.css'

const a = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("Promise test.")
  }, 2000)
});
a.then(data => console.log(data));