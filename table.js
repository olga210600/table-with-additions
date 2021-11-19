
const add = document.querySelector('.add');

const clean = document.querySelector('.clean');

const table = document.getElementById('myTable');


const createId = () => new Date().getMilliseconds() * 232;

let newTableRoad = {
    number: '',
    name: '',
    secondName: '',
    job: '',
    action: '',
    id: ''
}


const users = [];

const cleanAllFields = () => {
    document.getElementById('user-name').value = '';
    document.getElementById('user-secondName').value = '';
    document.getElementById('user-job').value = '';

    newTableRoad = {
        number: '',
        name: '',
        secondName: '',
        job: '',
        action: '',
        id: ''
    }
}

const removeUser = (e, userId) => {
    console.log('click: ', userId)
    console.log(e.target);
    const row =  e.target.closest("tr");
    row.parentElement.removeChild(row);


users.forEach( (item, index) => {
    if (item.id === userId){
        users.splice(index, 1)
    }

})
console.log(users)

}



const createTable = (user) => {
    let tr = document.createElement('tr');

    const imgPen = document.createElement('img');
    imgPen.src = 'editSvg.svg';

    const imgBin = document.createElement('img');
    imgBin.src = ' binSvg.svg';

    imgPen.width = 30;
    imgPen.height = 30;

    imgBin.width = 30;
    imgBin.height = 30;

    imgBin.addEventListener('click', (e) => removeUser(e, user.id));


     // for (let i = 0; i < user.length; i++){
     //     if( a === user.id){
     //         user.parentNode.removeChild(user);
     //     }
     // }




    let numberCell = document.createElement('td')
    let nameCell = document.createElement('td')
    let secondNameCell = document.createElement('td')
    let jobCell = document.createElement('td')
    let actionCell = document.createElement('td')


    numberCell.appendChild(document.createTextNode(user.number));
    nameCell.appendChild(document.createTextNode(user.name));
    secondNameCell.appendChild(document.createTextNode(user.secondName));
    jobCell.appendChild(document.createTextNode(user.job));
    actionCell.appendChild(imgPen );
    actionCell.appendChild(imgBin );




    tr.appendChild(numberCell);
    tr.appendChild(nameCell);
    tr.appendChild(secondNameCell);
    tr.appendChild(jobCell);
    tr.appendChild(actionCell);

    table.appendChild(tr)
};

// const createId = () => new Date().getMilliseconds() * 232;
// let createId = () =>    Math.random(1, 3000);

// for( let a = 0; a > users.length; a++) {
//     createId++
// }

add.addEventListener('click',() =>{
    const userName = document.getElementById('user-name').value;
    const userSecondName = document.getElementById('user-secondName').value;
    const userJob = document.getElementById('user-job').value;

    newTableRoad = {
        number: users.length + 1,
        name: userName,
        secondName: userSecondName,
        job: userJob,
        id: createId()
    }

    createTable(newTableRoad);
    users.push(newTableRoad);
    // console.log('users: ', users)


    cleanAllFields();

    //
    // if (add.addEventListener('click') => {
    //     Math.random()++;
    // })
})

// imgBin.addEventListener("click", () =>{
//     newTableRoad = {
//         number: '',
//         name: '',
//         secondName: '',
//         job: '',
//         action: ''
//     }
// }
// });

clean.addEventListener('click', () => cleanAllFields())





