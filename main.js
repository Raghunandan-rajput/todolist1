let title=document.querySelector("#title")
let taskdetail=document.querySelector("#taskdetails")
let ul=document.querySelector("ul")
let form =document.querySelector("form")
// console.log(form)
form.addEventListener("submit",dataSave)

function dataSave(e){
    e.preventDefault()
    let newli=document.createElement("li")
    let newl=document.createElement("li")
    let delbtn=document.createElement("button")
    let delbt=document.createElement("button")
    newli.innerHTML=title.value
    newl.innerHTML=taskdetail.value
    newli.className="list-group-item"
    newl.className="list-group-item"
    delbtn.innerText="Delete"
    delbt.innerHTML="Delete"
    delbtn.className="btn btn-danger btn-sm float-end"
    delbt.className="btn btn-danger btn-sm float-end"
    
    console.log(delbtn)
    newl.append(delbt)
    newli.appendChild(delbtn)
    ul.appendChild(newli)
    ul.appendChild(newl)
    console.log(newl)
    form.reset()
}

    ul.addEventListener("click", deletebtn)

    function deletebtn(p){
        if(p.target.className.includes("btn-danger")){
            let li=p.target.parentElement
            ul.removeChild(li)
        }
    }
// function deleteTodo(e){
//     if(e.target.className.includes("btn-danger")){
//         let li = e.target.parentElement
//         listGroup.removeChild(li)
//     }
// }










