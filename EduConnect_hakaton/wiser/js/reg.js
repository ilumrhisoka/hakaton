const form = document.querySelector("form");
const container = document.getElementById("extra_poles");
const select = document.querySelector("select");
select.addEventListener('change', function (e) {
    container.innerHTML = "";
    let inp_name = document.createElement("input");
        inp_name.type = "text";
        inp_name.placeholder = "Имя"
        container.appendChild(inp_name);
        let inp_lastname = document.createElement("input");
        inp_lastname.type = "text";
        inp_lastname.placeholder = "Фамилия"
        container.appendChild(inp_lastname);
    if(e.target.value == "Учащийся"){
        let inp_age = document.createElement("input");
        inp_age.type = "number";
        inp_age.placeholder = "Возраст";
        inp_age.min = 1;
        inp_age.max = 100;
        container.appendChild(inp_age);
    }
    else if(e.target.value == "Преподаватель"){
        let inp_subj = document.createElement("input");
        inp_subj.type = "text";
        inp_subj.placeholder = "Преподаваемый предмет"
        container.appendChild(inp_subj);
    }
    else if(e.target.value == "Работодатель"){
        let inp_company = document.createElement("input");
        inp_company.type = "text";
        inp_company.placeholder = "Название компании";
        container.appendChild(inp_company);
    }
    else{
        container.innerHTML = "";
    }
    document.querySelector("form").appendChild(container);
  })

var btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    document.querySelector("#error-p").textContent = "";
    let success = true;
    let input_list = document.querySelectorAll("input")
    for(let i =0; i < input_list.length; i ++){
        if(input_list[i].value == ""){
            // console.log(inp.value)
            success = false;
            break;
            subm_error();
        }
    }
    if(select.value == "Должность" || document.querySelector("#checkbox").checked == false ){
        success = false;
        subm_error();
    }
    else if(success == true){
        toBD();
    }
})

function subm_error(){
    document.querySelector("#error-p").textContent = "*Заполните все поля";
}

function toBD(){
    window.location = "student.html";
}