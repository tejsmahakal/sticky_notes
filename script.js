const noteContent = document.querySelector("#note-content");
const noteColor = document.querySelector("#note-color")
const noteCreateBtn = document.querySelector("#note-creation-section > button");
const notesContainer = document.querySelector("#notes-container");
let emptyNotesMessage = document.querySelector("#empty-notes-message");

noteCreateBtn.addEventListener("click",(e)=>{
    if(noteContent.value === ""){
        alert("Please input a note");
        return;
    }else {
        // Hide the empty notes message from the your notes part
        if(!emptyNotesMessage.classList.contains("hidden")){
            emptyNotesMessage.classList.add("hidden")
        }

        // create the note and give it text and background colour
        let div = document.createElement("div");
        div.innerHTML = `
            <p>${noteContent.value}</p>
            <span class="close-btn">X</span>
        `
        div.classList.add("note")
        div.style.backgroundColor = noteColor.value;

        // add the note to the your notes part
        notesContainer.appendChild(div);

        // reset the text are to empty
        noteContent.value = "";
    }
})

notesContainer.addEventListener("click",(e) => {

    // remove the note if we click on the X button
    if(e.target.innerText === "X"){
        e.target.parentNode.remove();
    }
    // If your notes part is empty after deleting the notes then show empty message
    if(notesContainer.children.length < 2){
        emptyNotesMessage.classList.remove("hidden")
    }
})