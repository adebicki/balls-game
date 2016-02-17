var canvas;
var ctx;
var $log;

//logAdd('START');

function init() {

    $log = $('#log');

    //logAdd('INIT');
    //return document.width || document.body.clientWidth;
    logAdd('typeof document.width: ' + typeof document.width);
    logAdd('typeof document.body.clientWidth: ' + typeof document.body.clientWidth);

    canvas = document.getElementById('mainCanvas');
    ctx = canvas.getContext('2d');

    window.addEventListener('resize', function() {
        resizeHandler();
    });
    resizeHandler();
}

function resizeHandler(){

    //logAdd('RESIZE HANDLER');

    if(typeof window.orientation !== 'undefined') {
        logAdd('resizeHndl-orient:' + getScreenOrientation());
    }
    reorient();
    repaint();
}

function reorient() {
    var angle;
    var rot;
    var translateX;
    var translateY;

    //logAdd('REORIENT');
    //if(console && console.clear) {console.clear();}

    resizeCanvas(getFullWidth(), getFullHeight());

    angle = getScreenOrientation();

    if(angle) {
        //resizeCanvas(getFullWidth(), getFullHeight());

        rot = - Math.PI * (angle / 180); // radians
        translateX = (angle === -90 ? getFullWidth() : 0); // -90 - right
        translateY = (angle === 90 ? getFullHeight() : 0); // 90 - left

        ctx.translate(translateX, translateY);
        ctx.rotate(rot);

    } else {
        // no rotation
        //resizeCanvas(getFullWidth(), getFullHeight());
    }
}

/**
 * W tej funkcji należy używać getVirtualCanvasWidth() i getVirtualCanvasHeight() zamiast canvas.width i canvas.height
 * ze względu na oreintację ekranu.
 * //todo zrobić flagę w głównych ustawieniach mówiącą, czy ekran ma się wirtualnie obracać
 */
function repaint() {

    var virtualCanvasWidth = getVirtualCanvasWidth();
    var virtualCanvasHeight = getVirtualCanvasHeight();

    // clear
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, virtualCanvasWidth, virtualCanvasHeight); // TU SIĘ KURWA KRYJE ZAGADKA - PO OBROCIE UKŁADU WSPÓŁRZĘDNYCH TO POWINNO BYĆ WIDTH

    // all
    ctx.fillStyle = '#abc';
    ctx.fillRect(0, 0, virtualCanvasWidth, virtualCanvasHeight);

    // rectangle
    ctx.fillStyle = "#69a";
    ctx.fillRect(40, 10, virtualCanvasWidth - 80, 20);

    // more rectangles
    ctx.fillStyle = "#0ba";
    for(var i = 0; i < 40; i++){
        if(i === 20) {
            ctx.fillStyle = "#96a";
        }
        ctx.fillRect(40, (i+2) * 10 * 2, virtualCanvasWidth - 80, 10);
    }

    //znacznik pionu
    ctx.fillStyle = '#aa3333';
    ctx.beginPath();
    ctx.moveTo(virtualCanvasWidth / 2 , 40);
    ctx.lineTo(virtualCanvasWidth / 2 + 20, 60);
    ctx.lineTo(virtualCanvasWidth / 2 - 20, 60);
    ctx.closePath();
    ctx.fill();
}

function resizeCanvas(width, height) {
    canvas.width = width;
    canvas.height = height;
}

function getVirtualCanvasWidth(){
    return getScreenOrientation() ? canvas.height : canvas.width;
}

function getVirtualCanvasHeight(){
    return getScreenOrientation() ? canvas.width : canvas.height;
}

function getScreenOrientation() {
    //return (window.orientation || window.screen.orientation.angle || 0);
    return (window.orientation || (typeof window.screen.orientation !== "undefined" ? window.screen.orientation.angle : 0));
}

function getFullWidth() {
    return document.width || document.body.clientWidth;
}

function getFullHeight() {
    return document.height || document.body.clientHeight;
}

function log(txt) {
    $log.html(txt);
}

function logAdd(txt) {
    $log.html($log.html() + ', ' + txt);
}

function clog(txt) {
    if(console && console.log) {
        console.log(txt)
    }
}