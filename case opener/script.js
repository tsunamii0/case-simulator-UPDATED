const startscreen = document.querySelector('.startscreen')
const balance = document.querySelector('.balance')
const caseopen = document.querySelector('.case')
const openbtn = document.querySelector('.open')
const sellbtn = document.querySelector('.sell')
const start = document.querySelector('.startbtn')
const caseimg = document.querySelector('.caseimg')
const skinimg = document.querySelector('.skinimg')
const content = document.querySelector('.content')
const keep = document.querySelector('.keep')

const rare0 = document.querySelector('.rare')
const rare1 = document.querySelector('.mythical')
const rare2 = document.querySelector('.legendary')
const rare3 = document.querySelector('.ancient')


openbtn.addEventListener('click', openCase)
start.addEventListener('click', startOpening)
keep.addEventListener('click', keepItem)
sellbtn.addEventListener('click', sellItem)

let balanceValue = 100
balance.innerHTML = balanceValue

let casenumber = 0

const casecontent = ['0.17', '0.17', '0.17', '0.17', '0.17', '0.17', '0.55', '0.55', '0.55', '0.55', '0.55', '0.55', '1', '1', '1', '1', '1', '1', '1.52', '1.52', '1.52', '1.52', '1.52', '1.52', '2.70', '2.70', '2.70', '2.70', '2.70', '2.70', '2.97', '2.97', '2.97', '2.97', '2.97', '2.97', '3.09', '3.09', '3.09', '3.09', '3.09', '3.09', '4.90', '4.90', '4.90', '9.10', '9.10', '9.10', '24.00', '24.00', '24.00', '48.90', '48.90', '48.90', '77.19', '77.19', '77.19', '90.02', '90.02', '90.02', '93.26', '93.26', '100.04', '100.04', '104.90', '117.06']
const caseprices = ['0.17', '0.55', '1', '1.52', '2,70', '2.97', '3.09', '4.90', '9.10', '24.00', '48.90', '77.19','90.02', '93.26', '100.04', '104.90', '117.06']


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function openCaseFunction() {
    const num = getRandomInt(66)
    caseopen.innerHTML = '€' + casecontent[num]
    casenumber = num
    sellbtn.style.display = ('block')
}

function startOpening() {
    startscreen.style.display = ("none")
}

for(let i = 0; i<7; i++){
    const img = document.createElement("img");
    img.src = `/content/${i}.png`
    rare0.append(img);
}
for(let i = 7; i<12; i++){
    const img = document.createElement("img");
    img.src = `/content/${i}.png`
    rare1.append(img);
}
for(let i = 12; i<15; i++){
    const img = document.createElement("img");
    img.src = `/content/${i}.png`
    rare2.append(img);
}
for(let i = 15; i<17; i++){
    const img = document.createElement("img");
    img.src = `/content/${i}.png`
    rare3.append(img);
}

function keepItem(){
    skinimg.classList.add('skinanimationkeep')
    setTimeout(() => {
    skinimg.classList.remove('skinanimationkeep')
    caseopen.style.display=('none')
    keep.style.display=('none')
    sellbtn.style.display=('none')
    caseimg.style.display=('block')
    skinimg.style.display = ('none')
    openbtn.style.display = ('block')
    }, 1000);

}

function sellItem() {
    balanceValue += Number(casecontent[casenumber])
    balance.innerHTML = balanceValue
    skinimg.classList.add('skinanimationsell')
    setTimeout(() => {
        skinimg.classList.remove('skinanimationsell')
    caseopen.innerHTML = 'Try your luck again?'
    sellbtn.style.display = ('none')
    caseimg.style.display = ('block')
    skinimg.style.display = ('none')
    openbtn.style.display = ('block')
    keep.style.display=('none')
    }, 1000);
}

function openCase(){
    if(Number(balance.innerHTML) > 20.42){
        openCaseFunction()
        balanceValue -= 20.42
        balance.innerHTML = balanceValue
        caseimg.style.display = ('none')
        skinimg.style.display = ('block')
        keep.style.display = ('block')
        openbtn.style.display = ('none')
        skinimg.src = 'loading.jpg'
        skinimg.style.opacity = 0.5
        setTimeout(() => {
            skinimg.src = '/skins/' + casenumber + '.png'
            skinimg.style.opacity = 1
            skinimg.classList.add('skinanimationopen')
        }, 3000);
        sellbtn.innerHTML = `SELL ITEM FOR ${casecontent[casenumber]}`
        setTimeout(() => {
            skinimg.classList.remove('skinanimationopen')
        }, 4000);
    }
    else{
        alert("nemas para druze")
    }
}
