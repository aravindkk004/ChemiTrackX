const btn_clk = document.querySelector('#profile_btn');
const profile = document.querySelector('.profile');
btn_clk.addEventListener('click',()=>{
    if(profile.style.display === 'none'){
        profile.style.display = 'inline-block'
    }
    else{
        profile.style.display = 'none'
    }
})