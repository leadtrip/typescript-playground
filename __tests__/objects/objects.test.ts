import {PaintOptions, paintShape} from "../../src/objects/objects";

test('paintShape', () => {
    const myPaintOptions: PaintOptions = {
        shape: { name: 'Square' },
        xPos: 1,
        yPos: 2
    }

    paintShape(myPaintOptions)
});