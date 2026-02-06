//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        // Move forward when a number is typed
        if(input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if(e.key === "Backspace") {
            if(input.value === "" && index > 0) {
                // Move back if current input is empty
                inputs[index - 1].focus();
            }
        }
    });

    // Optional: prevent non-numeric input
    input.addEventListener("keypress", (e) => {
        if(!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    });
});
