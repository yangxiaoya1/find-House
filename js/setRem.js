function setRem() {
    var ui_w = 375;
    var clientwidth = document.documentElement.clientWidth || document.body.clientWidth;
    var html = document.getElementsByTagName('html')[0];
    clientwidth = clientwidth < 320 ? 320 : clientwidth;
    html.style.fontSize = (clientwidth / ui_w) * 10 + 'px';
}
window.onresize = setRem;
window.onload = setRem;