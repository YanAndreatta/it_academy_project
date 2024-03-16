export default function removeNumbers() {
    const numbers = document.querySelector(".numbers");

    while (numbers.firstChild) {
        numbers.removeChild(numbers.firstChild);
    }
}