import {valueOf} from "jest";

const laptops: Laptop[] = [
    {id: 1, screenSize: 15},
    {id: 2, screenSize: 18},
    {id: 3, screenSize: 19},
]

const keyboards: Keyboard[] = [
    {id: 1, colour: 'black'},
    {id: 2, colour: 'green'},
    {id: 3, colour: 'red'}
]

type Database = {[key: string]: GormEntity[]};

const db: Database = {
    'laptops': laptops,
    'keyboards': keyboards
}

function getTable(tableName: string) : GormEntity[]{
    return db[tableName]
}

interface GormEntity {
    id?: number;
}

class Laptop implements GormEntity {
    constructor( public id: number, public screenSize: number ) {}
}

class Keyboard implements GormEntity{
    constructor(public id: number, public colour: string) {}
}

export function save<T extends GormEntity>(entity: T, tableName: string) : T {
    if ( entity.id ) {
        // update some stuff
    }
    else {
        entity.id = max(tableName) + 1
        console.log(`Creating new ${tableName} with id ${entity.id}`)
        getTable(tableName).push(entity)
    }
    return entity
}

export function find<T extends GormEntity>(id: number, tableName: string) {
    return getTable(tableName).find((entity) => entity.id == id)
}

export function max(tableName: string): number {
    const ids : number[] = getTable(tableName)
        .map(o => { return o.id })
        .filter((id) => id !== undefined);

    return Math.max(...ids)
}

const isGormEntity = (value: GormEntity | undefined): value is GormEntity => {
    return !!value;
}

