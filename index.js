
let fname = document.getElementById("name");
let comment = document.getElementById("comment");
let maleChecked = document.getElementById("male");
let femaleChecked = document.getElementById("female");
let btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    if(fname.value === ""){
        alert("Enter your name");
    }
    if(comment.value === ""){
        alert("Enter a comment");
    }
    if(!maleChecked.checked && !femaleChecked.checked){
        alert("Select a gender");
    }
    console.log(`
        Name: ${fname.value}
        Comments: ${comment.value}
        Gender: ${maleChecked.checked? "Male" : "Female"}
        `)
})