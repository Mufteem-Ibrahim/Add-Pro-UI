// toggling the form
let formShower = document.getElementById('add-btn');
let formContainer = document.getElementById('form');
// let customId = document.getElementById('custom');
let timeId = document.getElementById('time');
let formDetails = document.getElementById('formDetails');
let project = document.getElementById('project');
let devName = document.getElementById('name');
let stack = document.getElementById('stack');
let mainBody = document.getElementById('main-body')
let pickNum = Math.ceil(Math.random() * 10000);
let pickFrom = `ARKS/WEB/${pickNum}`

// creating an array to store the card object


//form validation

const validate = () => {
    if (project.value.length === 0 || project.value.length > 25) {
        console.log('error processing project')
    }
    if (devName.value.length === 0 || devName.value.length > 10) {
        console.log('error processing dev')
        
    }
    if (stack.value.length === 0) {
        console.log('error processing stack')
    }
    else {
        Card()
    }


}

// toggling function
function showForm() {
    if (formContainer.classList.value === "add-section") {
        formContainer.className = "add-section-visible";
        formShower.innerHTML = "Close";
        // console.log(formContainer.className)
        // console.log('matched');
    } else {
        formContainer.className = "add-section";
        formShower.innerHTML = 'Add Design';
        // console.log('Mismatched');
        // console.log(formContainer.className)
        
    }
}
const Card = () => {
    let pickNum = Math.ceil(Math.random() * 10000);
    let pickFrom = `ARKS/WEB/${pickNum}`
    
    let cardArray = []
    localStorage.setItem('cardArray', cardArray)
    var localItem = localStorage.getItem("cardArray")
    localItem=[...cardArray,{
        id: pickFrom,
        projectName: project.value,
        developerName: devName.value,
        projectStack:stack.value
    }]
    cardArray.push(localItem)
    localStorage.setItem('cardArray', cardArray)
    console.log(cardArray)
    let singleResult = document.createElement('div');
    singleResult.className = 'single-result';
    let resultHead = document.createElement('div')
    resultHead.className = 'single-result-head';
    singleResult.appendChild(resultHead);
    let headParas = document.createElement('p')
    let headParae = document.createElement('p')
    headParas.innerText = project.value
    headParas.className = 'name'
    headParae.innerText = pickFrom
    headParae.className = 'custom-id'
    resultHead.appendChild(headParas);
    resultHead.appendChild(headParae);
    let ImageDiv = document.createElement('div');
    ImageDiv.className = 'result-img'
    singleResult.appendChild(ImageDiv)
    let resultImage = document.createElement('img');
    resultImage.src = './images/project.jpg'
    ImageDiv.appendChild(resultImage)
    let ResultUser = document.createElement('div');
    ResultUser.className = 'result-user'
    singleResult.appendChild(ResultUser)
    let profileImage = document.createElement('img');
    profileImage.src = './images/user.png'
    ResultUser.appendChild(profileImage)
    let UserText = document.createElement('div');
    UserText.className = 'result-user-text'
    ResultUser.appendChild(UserText)
    let noDiv = document.createElement('div')
    UserText.appendChild(noDiv)
    let userName = document.createElement('p')
    let devStack = document.createElement('p')
    userName.className = 'specific'
    devStack.className = 'custom-id'
    userName.innerText = devName.value
    devStack.innerText = stack.value
    noDiv.appendChild(userName);
    noDiv.appendChild(devStack);
    // append to reuslt section
    mainBody.appendChild(singleResult)


    // saving in localStorage



}
const handleSubmit = (e) => {
    e.preventDefault();
    validate()
    // console.log(project.value.length)
    project.value = ''
    devName.value = ''
    stack.value = ''

}


//getting time
// let myclock = Date.now();
// // let hour = Date.getHours();
// let minute = Date.getMinutes();
// let second = Date.getSeconds();
// console.log(myclock)
// console.log(hour)
// console.log(minute)
// console.log(second)

// const idHolder = localStorage
// idHolder.setItem(pickFrom, pickFrom);
// console.log(idHolder)






// var d = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// timeId.innerHTML = months[d.getMonth()];

// const weekTrivia = () => {
//     const a = 12;
//     const b = 8;
//     const c = 6;

//     if (a) {
//         console.log(months[11])
//         if (b) {
//             console.log(months[7])
//         }
//     }
// }
// weekTrivia();


formShower.addEventListener('click', showForm);
formDetails.addEventListener('submit', handleSubmit)