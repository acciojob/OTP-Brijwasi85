const inputs = document.querySelectorAll(".code");

// Auto focus first input
inputs[0].focus();

inputs.forEach((input, index) => {

    input.addEventListener("input", () => {
        // Allow only single digit
        input.value = input.value.replace(/[^0-9]/g, "");

        // Move to next input if value entered
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value === "" && index > 0) {
                inputs[index - 1].focus();
            }
        }
    });

});
