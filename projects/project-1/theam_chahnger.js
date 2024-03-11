const box = document.querySelectorAll('.box')
const body = document.querySelector('body');
box.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        switch(e.target.id){
            case 'gray':
                body.style.backgroundColor='gray'
                break
            case 'red':
                body.style.backgroundColor='red'
                break
            case 'blue':
                body.style.backgroundColor='blue'
                break
            case 'green':
                body.style.backgroundColor='green'
                break
            case 'yellow':
                body.style.backgroundColor='yellow'
                break
        }
    });
});