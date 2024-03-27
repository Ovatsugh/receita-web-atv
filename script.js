var value = 0

function up() {
    value++
    document.getElementById("variable").innerText = value;
}


function down() {
    value -=1
    document.getElementById("variable").innerText = value;
}