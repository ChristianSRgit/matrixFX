const canvas = document.getElementById("matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMOPQRSTUVWXYZ"
const nums = "0123456789";
const currency = "$¥₡₱£€¢﷼¥₩₮₦₨₽₺₴﷼"

const alphabet = currency + nums;

const fontSize = 16;
const columns =(canvas.width/fontSize)* 2;

const rainDrops = [];

for(let x = 0; x< columns; x++){
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = "rgba(0,0,0, 0.05)";
    context.fillRect(0,0, canvas.width, canvas.height);


    context.fillStyle = "#CDA434";
    context.font = fontSize + "px monospace"

    for(let i = 0; i < rainDrops.length; i++){
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw,90);

