document.getElementById('loginbtn').addEventListener('click',()=>{
    const display_detail = document.querySelector('.login_details')
    if(display_detail.style.display === 'none'){
        display_detail.style.display = 'inline-flex'
    }else{
        display_detail.style.display = 'none'
    }
})