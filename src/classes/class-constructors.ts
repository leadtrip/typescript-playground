/**
 * This style of creating a class involves a lot of duplicated field name creation and assigning
 * See class definition below for simplified approach
 */
export class OldThingy {
    make: string
    model: string
    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}

/**
 * By providing access modifiers on the class properties in a constructor we don't need to declare the fields or assign in the constructor
 */
export class NewThingy {
    constructor(
        public make: string,
        private model: string
    ) {}

    getModel() : string { return this.model }       // model is private so we provide a getter
}