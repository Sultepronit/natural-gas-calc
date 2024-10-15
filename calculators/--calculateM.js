export default function calculateM(inputData) {
    return inputData.reduce((acc, current) => acc + (current.value * current.M), 0);
}