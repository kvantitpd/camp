async function getData() {
    const data = await fetch('http://192.168.10.86:8080/info').then(res => res.json())//.then(console.log)
    return data;
}


setInterval(async () => {
    const value = await getData();
    setOpacity();
    if (value) {

    }

}, 1000);

function setOpacity() {
    const backGround = document.querySelector(".light");
    backGround.style.opacity = 1;
}




