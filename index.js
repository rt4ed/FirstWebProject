const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".section-tv");
const tabBut = document.querySelectorAll(".button-auth");
const authContent = document.querySelectorAll(".modal")
const tabButAuth = document.querySelectorAll(".button");
const authHeader = document.querySelectorAll(".auth_header")

tabsBtn.forEach(function (item){
    item.addEventListener("click", function() {
        let  currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);


        tabsBtn.forEach(function (item){
            item.classList.remove('active');
        });

        tabsItems.forEach(function (item){
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});

tabBut.forEach(function (item){
    item.addEventListener("click", function (){
        let CurBtn = item;
        let authId = CurBtn.getAttribute("data-but");
        let Auth = document.querySelector(authId);

        tabBut.forEach(function (item){
            item.classList.remove('active');
        });

        authContent.forEach(function (item){
            item.classList.remove('active');
        });

        CurBtn.classList.add('active');
        Auth.classList.add('active');
    })
})

window.onclick =function (e){
    if(e.target.hasAttribute('data-modal-window')){
        let modals=document.querySelectorAll("*[data-modal-window]")
        for (let i=0; i<modals.length;i++){
            modals[i].classList.remove('active');
        }
    };
};

document.getElementById('check').onclick=function (){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let AuthLog = 'ProkazZ';
    let AuthPass = '1234';

    if (login == AuthLog && password == AuthPass){
        let modals=document.querySelectorAll("*[data-modal-window]")
        for (let i=0; i<modals.length;i++){
            modals[i].classList.remove('active');
        }

        tabButAuth.forEach(function (item){
            item.classList.remove('active');
        });

        authHeader.forEach(function (item){
            item.classList.add('active');
        });

        document.getElementById('auth_name').innerHTML = login;

    }
    else alert('Incorrect login or pass');
}

document.getElementById('auth_exitId').onclick=function (){
    authHeader.forEach(function (item){
        item.classList.remove('active');
    });

    tabButAuth.forEach(function (item){
        item.classList.add('active');
    });
}