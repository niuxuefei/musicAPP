export default{
  rem(){
    let clientWidth=window.innerWidth;
    let uiwidth  = 750; // ui设计稿的宽度
    let nowRem=(clientWidth/uiwidth*100);
    document.querySelector('html').style.fontSize=parseInt(nowRem,10)+"px";
  }
}