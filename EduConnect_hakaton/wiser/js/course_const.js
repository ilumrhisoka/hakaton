const select = document.querySelector("select");
var options = select.children;
const subm_btn = document.querySelector("#add-course")
const form = document.querySelector("form");
const constr_div = document.querySelector(".task-constr-div");
const all_tasks = document.querySelector(".course-res")
var theme_counter = 1;

subm_btn.addEventListener("click", (event)=>{
    success = true;
    if(select.value == "Задание")success = false;
    if(success){
        window.location = "teacher.html";
    }
    else{
        alert("Заполните все поля");
    }
})

select.addEventListener("change", ()=>{
    constr_div.innerHTML = "";
    if(select.value == "Лекция"){
        create_lect();
    }
    else if(select.value == "Квиз"){

    }
    else if(select.value == "Задание с кодом"){

    }
})

function create_lect(){
    let lable = document.createElement("label")
    lable.textContent = "Добавьте контент лекции";
    lable.style.marginTop = "10px";
    constr_div.appendChild(lable);

    let inp = document.createElement("input");
    inp.type = "file";
    inp.accept = "image/*,video/*,.pdf,.doc,.docx";
    inp.required = true;
    constr_div.appendChild(inp);

    lable = document.createElement("label")
    lable.textContent = "Добавьте описание задания";
    lable.style.marginTop = "10px";
    // lable.style.margin = 0;
    constr_div.appendChild(lable);

    inp = document.createElement("input")
    inp.type = "text";
    inp.required = true;
    inp.id = "descr";
    constr_div.appendChild(inp);
}

function append_task(){
    if (valid()){
        let theme = document.createElement("h3");
        theme.textContent = `Тема ${theme_counter}: ${document.querySelector("#task-theme").value}`;
        all_tasks.appendChild(theme);

        let p = document.createElement("p");
        p.textContent = document.querySelector("#descr").value;
        theme_counter++;
        all_tasks.appendChild(p);
    }
}

function valid(){
    let inputs = document.querySelector(".create-course").querySelectorAll("input");
    if (inputs.length == 1){
        return false;
    }
    else{
        for(let i = 0; i < inputs.length; i++){
            if (inputs[i].value == ""){
                return false
            }
        }
        return true
    }
}