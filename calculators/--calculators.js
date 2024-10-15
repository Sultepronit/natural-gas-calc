export function calculateM(inputData) {
    return inputData.reduce((acc, current) => acc + (current.value * current.M), 0);
}

export function calculateHc_G(inputData) { // 0C!!!
    return inputData.reduce((acc, current) => acc + (current.value * current.Hc0C_G), 0);
}

function ff() {
    const Hm_G = Hc_G / M;
}