const sliderWrapper = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.slider-dots span');
var navdiv = document.querySelector('.navDiv')

var contactDiv = document.querySelector('.contactDiv')
let currentSlide = 0;

function setActiveDot() {
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active-dot');
        } else {
            dot.classList.remove('active-dot');
        }
    });
}

function slideTo(index) {
    currentSlide = index;
    sliderWrapper.style.left = `-${currentSlide * 100}%`;
    setActiveDot();
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideTo(index);
    });
});

prevButton.addEventListener('click', () => {
    if (currentSlide === 0) {
        slideTo(2);
    } else {
        slideTo(currentSlide - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide === 2) {
        slideTo(0);
    } else {
        slideTo(currentSlide + 1);
    }
});
window.addEventListener('scroll', function () {
    // console.log('hello', window.scrollY);
    if (window.scrollY > 500) {
        // alert('scroll reach')
        navdiv.style.height = "13.2vh"
        navdiv.style.backgroundColor = "#424147"
    } else {
        navdiv.style.height = "15vh"
        navdiv.style.backgroundColor = "#424147"


        // console.log('scroll down');
    }
})


// side bar javascript

var menudiv = document.querySelector('.MenuDiv')
var sidebar = document.querySelector('.sidebar')
var cross = document.querySelector('.cross')
var move = document.querySelectorAll('.move')



menudiv.addEventListener('click', () => {
    // console.log(menudiv , 'You Click on bars');
    sidebar.style.left = '0'
    sidebar.style.transition = 'all ease-in 1s'
    move[0].classList.add('move1')
    move[1].classList.add('move2')
    move[2].classList.add('move3')
    move[3].classList.add('move4')
    move[4].classList.add('move5')
    move[5].classList.add('move6')
    move[6].classList.add('move7')

    // for (var i = 0; i < move.length; i++) {
    //     move[i].classList.add('anyone')
    // }
    move.forEach((e) => {
        e.style.opacity = 0
    })
    move[0].classList.remove('movea')
    move[1].classList.remove('moveb')
    move[2].classList.remove('movec')
    move[3].classList.remove('moved')
    move[4].classList.remove('movee')
    move[5].classList.remove('movef')
    move[6].classList.remove('moveg')
})

cross.addEventListener('click', () => {
    // console.log(cross, 'you click on cross');
    sidebar.style.left = '-635px'


    sidebar.style.transition = 'all ease-in 1s 2.4s'
    move.forEach((e) => {
        e.style.opacity = 1
    })

    
    move[0].classList.remove('move1')
    move[1].classList.remove('move2')
    move[2].classList.remove('move3')
    move[3].classList.remove('move4')
    move[4].classList.remove('move5')
    move[5].classList.remove('move6')
    move[6].classList.remove('move7')

    // for (var i = 0; i < move.length; i++) {
    //     move[i].classList.remove('anyone')
    // }


    move[0].classList.add('movea')
    move[1].classList.add('moveb')
    move[2].classList.add('movec')
    move[3].classList.add('moved')
    move[4].classList.add('movee')
    move[5].classList.add('movef')
    move[6].classList.add('moveg')

})



