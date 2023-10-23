document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsiusInput');
    const convertBtn = document.getElementById('convertBtn');
    const result = document.getElementById('result');

    convertBtn.addEventListener('click', function() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            result.textContent = `${celsius.toFixed(2)}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        } else {
            result.textContent = 'Please enter a valid temperature.';
        }
    });
});
