function convertFtoC() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('f2c').innerHTML = `Fahrenheit to Celsius: ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById('f2c').innerHTML = 'Please enter a valid number.';
    }
}