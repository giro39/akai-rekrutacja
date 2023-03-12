var akai_form = document.forms[0]
var checkboxes_counter = 0

function form_validation(e) {
    e.preventDefault()
    var name = akai_form.name.value;
    var surname = akai_form.name.value;
    alert(checkboxes_counter)
    if (name.length >= 2 && surname.length >= 3 && checkboxes_counter >= 1)
    document.getElementById("registered").style.display = "block";
}

function paint_checkbox(number) {
    if (document.getElementById("checkbox"+number).checked) {
        document.getElementById("divcheck"+number).style.backgroundColor = "#faa21b";
        document.getElementById("divcheck"+number).style.border = "solid 1px #faa21b";
        checkboxes_counter++;
    } else {
        document.getElementById("divcheck"+number).style.backgroundColor = "#001227";
        document.getElementById("divcheck"+number).style.border = "solid 1px white";
        checkboxes_counter--;
    }
}


akai_form.addEventListener("submit", form_validation)