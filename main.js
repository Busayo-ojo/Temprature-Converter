const fahrenheitInput = document.getElementById("fahrenheit");
const celciusInput = document.getElementById("celcius");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++){
    let input = inputs[i];
    input. addEventListener("input", function (e) {
        let value = parseFloat (e.target.value);
        switch (e.target.name) {
            case "fahrenheit":
                celciusInput.value  = (value -32)*(5/9)
                kelvinInput.value = value + 273.15;
                break;
            case "celcius":
                fahrenheitInput.value = (value*1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
                case "kelvin":
                fahrenheitInput.value = (value*1.8) + 32;
                celciusInput.value  = (value -32)*(5/9);
        }
    }
    );
}