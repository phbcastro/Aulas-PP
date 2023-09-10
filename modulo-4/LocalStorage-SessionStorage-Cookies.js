window.localStorage.setItem("name", "Paulo"); //salvando a informação

//não precisa do window por ser algo obrigatoriamente ligado à window, mas pode usar

window.localStorage.getItem("name"); // pegando a informação 

window.sessionStorage.setItem("idade", 24);

document.cookie = "name=paulo";
