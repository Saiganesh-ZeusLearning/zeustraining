
const fname = document.getElementById("name");
const comment = document.getElementById("comment");
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    if(fname.value === ""){
        alert("Enter your name");
        return;
    }
    if(comment.value === ""){
        alert("Enter a comment");
        return;
    }
    if(!maleRadio.checked && !femaleRadio.checked){
        alert("Select a gender");
        return;
    }
    console.log(`
        Name: ${fname.value}
        Comments: ${comment.value}
        Gender: ${maleRadio.checked? "Male" : "Female"}
        `)
})