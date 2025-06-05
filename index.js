
const fname = document.getElementById("name");
const comment = document.getElementById("comment");
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
    if(fname.value === ""){
        return;
    }
    if(comment.value === ""){
        return;
    }
    if(!maleRadio.checked && !femaleRadio.checked){
        return;
    }
    console.log(`
        Name: ${fname.value}
        Comments: ${comment.value}
        Gender: ${maleRadio.checked? "Male" : "Female"}
        `)
})