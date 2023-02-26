function clickMenuShow(){
    document.querySelector('.menu').style.display = 'none'
    document.querySelector('.container').style.display = 'flex'
    document.querySelector('.container').style.flexDirection = 'column'
    document.querySelector('.container').style.marginTop = '25%'
    document.querySelector('.items').style.flexDirection = 'column'
    document.querySelector('nav').style.display = 'block'
    document.querySelector('.menu-arrow').style.display = 'block'
    document.querySelector('.btn-res').style.display = 'none'
    document.querySelector('.separator').style.display = 'none'
    document.querySelector('.block-form').style.marginTop = '45%'
    document.querySelector('.vector3').style.marginTop = '45%'

}
function clickMenuClose(){
    location.reload();
}