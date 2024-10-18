export function toKelvin(celcius) {
    return Number(celcius) + 273.15;
}

export function findInSegment(x1, y1, x2, y2, x) {
    const diff1 = x2 - x;
    // console.log(diff1);
    const diff2 = x - x1;
    // console.log(diff2);
    const xSegment = x2 - x1;
    // console.log(diff1);

    return (y1 * diff1 / xSegment) + (y2 * diff2 / xSegment);
}