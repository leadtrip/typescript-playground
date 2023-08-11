import {buildTeslaModelS} from "../../src/interfaces/interfaces";


test('buildTeslaModelS', () => {
    buildTeslaModelS({
        length: 196,
        width: 86,
        wheelbase: 116,
        seatingCapacity: 4,
        getTyrePressure: function () {
            return 32
        },
        getRemCharging: function () {
            return 34
        }
    })
});