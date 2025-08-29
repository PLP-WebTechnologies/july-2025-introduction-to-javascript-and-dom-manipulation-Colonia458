// --- Part 1: Variable Declarations and Conditionals ---
        let userPoints = 75;
        let isMember = true;
        let discountPercentage;

        // Conditional statement based on user points and membership status
        if (userPoints > 100 && isMember) {
            discountPercentage = 20;
        } else if (userPoints >= 50 || isMember) {
            discountPercentage = 10;
        } else {
            discountPercentage = 5;
        }

        // --- Part 2: Custom Functions ---
        // Function 1: Generates a personalized greeting
        function createGreeting(name) {
            return `Hello, ${name}! Your discount is ${discountPercentage}%.`;
        }

        // Function 2: Calculates the sum of a series of numbers
        function calculateSum(arr) {
            let total = 0;
            // Demonstrates a for...of loop for arrays
            for (const number of arr) {
                total += number;
            }
            return total;
        }

        // --- Part 3: Loop Examples ---
        function getLoopExamples() {
            let loopOutput = "--- For Loop (Counting) ---\n";
            // For loop: iterates a specific number of times
            for (let i = 0; i < 3; i++) {
                loopOutput += `Loop count: ${i + 1}\n`;
            }

            loopOutput += "\n--- While Loop (Doubling) ---\n";
            // While loop: continues as long as a condition is true
            let value = 2;
            while (value < 20) {
                loopOutput += `Current value: ${value}\n`;
                value *= 2;
            }
            return loopOutput;
        }

        // --- Part 4: DOM Interactions ---
        // Get references to DOM elements
        const heading = document.getElementById("main-heading");
        const paragraph = document.getElementById("main-paragraph");
        const outputArea = document.getElementById("output-area");
        const button = document.getElementById("action-button");

        // Event listener to trigger all functions on button click
        button.addEventListener("click", () => {
            // DOM Interaction 1: Change the text of the heading
            heading.textContent = "Script Executed!";

            // DOM Interaction 2: Change the style of the paragraph
            paragraph.style.color = "#27ae60";

            // Run functions and update the output area
            let outputText = "--- Variables & Conditionals ---\n";
            outputText += `Initial user points: ${userPoints}\n`;
            outputText += `Membership status: ${isMember}\n`;
            outputText += `Calculated discount: ${discountPercentage}%\n\n`;

            outputText += "--- Functions & Loops ---\n";
            outputText += createGreeting("Student") + "\n";
            outputText += "Sum of [10, 20, 30, 40]: " + calculateSum([10, 20, 30, 40]) + "\n\n";
            outputText += getLoopExamples();

            // DOM Interaction 3: Change the text content of the output box
            outputArea.textContent = outputText;
        });