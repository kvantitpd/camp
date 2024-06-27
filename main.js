const light = 100;
const signal = 0;

async function start() {
    const data = await fetch('http://192.168.10.86:8080/info').then(res => res.json()).then(console.log)
}

start()