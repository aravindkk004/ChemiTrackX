const container = document.querySelector('.image_slider');
const btns = document.querySelectorAll('.btn')
const imgList = ["capacity","impandexp","marketsize","statistics"]

let index=0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index = imgList.length-1;
            }
            container.style.backgroundImage = `url("../images/${imgList[index]}.png")`;
            container.style.backgroundPosition = 'center center'
            container.style.backgroundSize = 'contain'
            container.style.backgroundRepeat = 'no-repeat'
        }
        else{
            index++;
            if(index===imgList.length){
                index = 0;
            }
            container.style.backgroundImage = `url("../images/${imgList[index]}.png")`;
            container.style.backgroundPosition = 'center center'
            container.style.backgroundSize = 'contain'
            container.style.backgroundRepeat = 'no-repeat'
        }
    })
})

// automatic image slider
let slider = document.querySelector('.gallery')
const imagelist = ["1","2","3","4","5"]
let indexes=0;
function imgslider(){
    setTimeout(imgslider,2000);
    indexes--;
    if(indexes<0){
        indexes = imagelist.length-1;
    }
    slider.style.backgroundImage = `url("../images/industry/${imagelist[indexes]}.png")`;
    slider.style.backgroundPosition = 'center center'
    slider.style.backgroundSize = 'contain'
    slider.style.backgroundRepeat = 'no-repeat'
}

imgslider()

//toggle profile
let profile = document.querySelector('.profiledetail')
let click = document.getElementById('profile')
click.addEventListener('click',()=>{
    if(profile.style.display === 'none'){
        profile.style.display = 'inline-block'
    } 
    else{
        profile.style.display = 'none'
    }
})