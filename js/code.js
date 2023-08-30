

// this function will change the h3 text to random text in array

const changeH3 = () =>{
    
    const head = document.getElementsByClassName('text-container')[0].getElementsByTagName('h3')[0];

    let words = ['creator', 'designer','talanted','self learner', 'master', 'palestinian', 'young']

    let newWord = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1, word.length);
    }
    );

    head.addEventListener('click', function (e){
        head.innerHTML = `i'm a <span>${newWord[Math.floor(Math.random()*newWord.length)]}</span> developer`;
        head.setAttribute('title', 'about the developer');
        head.style.transition = 'all 0.4s';
        head.style.left = '3.5rem';
        head.style.position = 'relative';
        head.style.scale = '1.4';
        head.style.left = '3.5rem';
    });
}


// change the main image to random image

const changeMainImage = () =>{
    const img = document.getElementById('main-image');
    let imgSecList = ['logo\\programmer-slide.png','logo\\programmer2.png','logo\\programmer3.png','logo\\programmer5.png','logo\\programmer6.png','logo\\programmer7.png','logo\\programmer8.png']
    img.src = imgSecList[Math.floor(Math.random()*imgSecList.length)]
}



const img = document.getElementById('main-image');
img.addEventListener('click', changeMainImage);


changeH3();