const dewPoint = [
    -40,
    -30,
    -20,
    -10,
    0,
];

const A = [
    131,
    230,
    390,
    648,
    1050,
];

const B = [
    0.22,
    0.33,
    0.48,
    0.69,
    0.97,
];

export const table2 = dewPoint.map((dewPoint, index) => {
    return {
        dewPoint,
        A: A[index],
        B: B[index],
        get dewPointC() {
            return ((this.dewPoint - 32) / 1.8).toFixed(1);
        },
        calculateHumidity(p, correction = 1) {
            return (this.A / p + this.B) * correction * 16.0185;
        }
    }
});