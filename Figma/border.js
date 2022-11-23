const entities = [
    {
        img: 'img/landing/image 2.1.png',
        city: 'Rostov-on-Don LCD admiral',
        apartament: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request'
    },
    {
        img: 'img/landing/image 2.2.png',
        city: 'Sochi Thieves',
        apartament: '105 m2',
        repairTime: '4 months',
        repairCost: 'Upon request'
    },
    {
        img: 'img/landing/image 2.3.png',
        city: 'Rostov-on-Don Patriotic',
        apartament: '93 m2',
        repairTime: '3 months',
        repairCost: 'Upon request'
    }
]

let currentIndex = 0;
const img = document.querySelector('.image-landing')
const arrowLeft = document.getElementById('arrow-l');
const arrowRight = document.getElementById('arrow-r');

const city = document.getElementById('city');
const apartament = document.getElementById('apartament');
const repairTime = document.getElementById('repair-time');
const repairCost = document.getElementById('repair-cost');

const sercleFirst = document.getElementById('sercle-0');
const sercleSecond = document.getElementById('sercle-1');
const sercleThird = document.getElementById('sercle-2');

const landingFirstElement = document.getElementById('landing-element-0');
const landingSecondElement = document.getElementById('landing-element-1');
const landingThirdElement = document.getElementById('landing-element-2');



const setEntity = (index) => {
    // console.log(index);
    //text.innerText = entities[index].text
    addSercleFlag(index);
    img.style.backgroundImage = `url("${entities[index].img}")`
    city.innerHTML = entities[index].city;
    apartament.innerHTML = entities[index].apartament;
    repairTime.innerHTML = entities[index].repairTime;
    repairCost.innerHTML = entities[index].repairCost;

}

arrowLeft.addEventListener('click', () => {

    if (currentIndex - 1 < 0) {
        currentIndex = 3;

    }
    setEntity(currentIndex - 1);



});
arrowRight.addEventListener('click', () => {

    if (currentIndex + 1 > 2) {
        currentIndex = -1;

    }
    setEntity(currentIndex + 1);



});

landingFirstElement.addEventListener('click', () => {
    addSercleFlag(0);
    setEntity(0);



});
landingSecondElement.addEventListener('click', () => {
    addSercleFlag(1);
    setEntity(1);


});
landingThirdElement.addEventListener('click', () => {
    addSercleFlag(2);
    setEntity(2);


});

sercleFirst.addEventListener('click', () => {
    addSercleFlag(0);
    setEntity(0);



});
sercleSecond.addEventListener('click', () => {
    addSercleFlag(1);
    setEntity(1);


});
sercleThird.addEventListener('click', () => {
    addSercleFlag(2);
    setEntity(2);


});


function addSercleFlag(index) {
    currentIndex = index;
    if (index == 0) {
        sercleFirst.style.background = '#FFFFFF';
        sercleSecond.style.background = null;
        sercleThird.style.background = null;
    } else if (index == 1) {
        sercleFirst.style.background = null;
        sercleSecond.style.background = '#FFFFFF';
        sercleThird.style.background = null;
    } else if (index == 2) {
        sercleFirst.style.background = null;
        sercleSecond.style.background = null;
        sercleThird.style.background = '#FFFFFF';
    }

}



