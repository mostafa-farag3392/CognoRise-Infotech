document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / (height * height); // Calculate BMI
    const bmiValue = bmi.toFixed(2);

    // Determine BMI category
    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }

    // Display the result
    document.getElementById('bmi-value').textContent = bmiValue;
    document.getElementById('bmi-category').textContent = bmiCategory;
    const result = document.getElementById('result');
    result.classList.remove('d-none');
    result.style.opacity = 0;
    setTimeout(() => {
        result.style.opacity = 1;
    }, 100); // Delay for the animation effect
});

