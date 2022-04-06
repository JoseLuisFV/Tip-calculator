function getValue (idInput){
    const input = document.getElementById(idInput);
    const value = Number(input.value);
    return value
}

function getIndividual (bill, people, percent){
    const individual = (bill * (percent / 100)) / people;
    return individual;
}

function getTotal (bill, people, individual){
    const total = (bill / people) + individual;
    return total;
}

function makeOperation () {

}


const inputPeople = document.getElementById("inputPeople");
inputPeople.addEventListener("keydown", (e) => {
    if (e.keyCode == "13"){
        e.preventDefault();
    }
    if (e.target.value  != 0) {
        const message = document.getElementById("messageForPeople");
        message.classList.replace("no-hidden", "hidden");
    }
});


const inputBill = document.getElementById("inputBill");
inputBill.addEventListener("keydown", (e) => {
    if (e.keyCode == "13"){
        e.preventDefault();
    }
});

const buttons = document.getElementById("buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.className == "input__button") {
        const button  = e.target;
        const percent = Number(button.textContent.replace("%", ""));
        const people = getValue("inputPeople");
        const bill = getValue("inputBill");
        if (!people) {
            const message = document.getElementById("messageForPeople");
            message.classList.replace("hidden", "no-hidden");
        } else {
            const textIndividual = document.getElementById("individual");
            const textTotal = document.getElementById("total");

            const individual = getIndividual(bill, people, percent);
            const total = getTotal(bill, people, individual);

            textIndividual.textContent = toFixed(individual, 2);
            textTotal.textContent = toFixed(total, 2);
        }
    }
})


function changeMessage(className) {
    
}