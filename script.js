const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
const swtich = document.querySelector(".swtich");
const body = document.querySelector("body")

const updateTime = () => {
  let date = new Date(),
  secToDeg = (date.getSeconds()/60) * 360,
  secToMin = (date.getMinutes()/60) * 360,
  secTohr = (date.getHours()/12) * 360;
  
  sec.style.transform = `rotate(${secToDeg}deg)`
  min.style.transform = `rotate(${secToMin}deg)`
  hour.style.transform = `rotate(${secTohr}deg)`
}

setInterval(updateTime, 1000);

updateTime();

swtich.addEventListener('click', () => {
  body.classList.toggle("dark")
  isDarkMode =  body.classList.contains("dark");
  console.log(isDarkMode);

  swtich.textContent = isDarkMode ? " Light Mode" : "Dark Mode" 
})