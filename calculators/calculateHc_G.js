export default function calculateHc_G(inputData) {
    return inputData.reduce((acc, current) => acc + (current.value * current.Hc0C), 0);
}