function calculateAverage() {
    let number = document.getElementById('numberInput').value;
    if (number === '') {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
    }
    number = number.toString();

    let sum = 0;
    let digitCount = number.length;
    for (let i = 0; i < digitCount; i++) {
        sum += parseInt(number[i]);
    }
    let average = sum / digitCount;
t
    document.getElementById('result').textContent = `The average of digits is ${average}`;
}
