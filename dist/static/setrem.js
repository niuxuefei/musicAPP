export default{
    setrem(){
        let Winw=document.documentElement.clientWidth ||document.body.clientWidth;
        let Uiw=750;
        document.getElementsByTagName('html')[0].style.fontSize=(Winw/Uiw)*100+'px'
    }
}