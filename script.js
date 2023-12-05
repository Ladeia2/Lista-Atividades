// Obtendo referências para os elementos HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Função para adicionar uma nova tarefa
function addTask() {
    // Verifica se o campo de entrada está vazio
    if (inputBox.value == '') {
        alert("Por favor escreva uma tarefa");
    } else {
        // Cria um novo elemento <li> para a lista
        let li = document.createElement("li");
        console.log(li)
        
        // Define o conteúdo do <li> como o valor digitado no inputBox
        li.innerHTML = inputBox.value;
        
        // Adiciona o elemento <li> como filho do listContainer
        listContainer.appendChild(li);
        
        // Cria um elemento <span> para o botão de remoção
        let span = document.createElement("span");
        
        // Define o conteúdo do <span> como um "×" usando unicode
        span.innerHTML = "\u00d7";
        
        // Adiciona o elemento <span> como filho do <li>
        li.appendChild(span);
    }

    // Limpa o conteúdo do inputBox após adicionar a tarefa
    inputBox.value = "";
    
    // Salva os dados atualizados no armazenamento local
    saveData();
}

// Adiciona um event listener para o click no listContainer
listContainer.addEventListener("click", function(e) {
    // Verifica se o elemento clicado é um <li>
    if (e.target.tagName === "LI") {
        // Alternar a classe "checked" para o <li> clicado
        e.target.classList.toggle("checked");
        // Salvar os dados após a alteração
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove o elemento pai do <span> (ou seja, remove o <li>)
        e.target.parentElement.remove();
        // Salvar os dados após a remoção
        saveData();
    }
}, false);

// Função para salvar os dados no armazenamento local (localStorage)
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Função para mostrar as tarefas salvas ao carregar a página
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Mostra as tarefas ao carregar a página
showTask();
