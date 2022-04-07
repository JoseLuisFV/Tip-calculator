const numberIntKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const numberFloatKeys = [...numberIntKeys, "."]


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

function eventNumber(keys, key, input) {
    if (keys.includes(key) && key != "."){
        const newValue = input.value + key
        input.value = newValue;
    } else if (key == "Backspace") {
        const length = input.value.length;
        input.value = input.value.slice(0, length - 1);
    }
}


const inputPeople = document.getElementById("inputPeople");
inputPeople.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        e.preventDefault();
    }
    const message = document.getElementById("messageForPeople");
    message.classList.replace("no-hidden", "hidden");
});


const inputBill = document.getElementById("inputBill");
inputBill.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
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

            textIndividual.value = individual.toFixed(2);
            textTotal.value = total.toFixed(2);
        }
    }
})

const buttonCustom = document.getElementById("buttonCustom");

buttonCustom.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        e.preventDefault();
        const people = getValue("inputPeople");
        const bill = getValue("inputBill");

        const percent = buttonCustom.value;
        const textIndividual = document.getElementById("individual");
        const textTotal = document.getElementById("total");

        const individual = getIndividual(bill, people, percent);
        const total = getTotal(bill, people, individual);

        textIndividual.value = individual.toFixed(2);
        textTotal.value = total.toFixed(2);
    }
});