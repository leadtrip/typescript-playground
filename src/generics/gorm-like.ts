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

interface GormEntity {
    id?: number;
}

type WithId = Required<GormEntity>

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
        entity.id = maxId(tableName) + 1
        console.log(`Creating new row in ${tableName} with id ${entity.id}`)
        getTable(tableName).push(entity)
    }
    return entity
}

export function find(id: number, tableName: string) {
    return getTable(tableName).find((entity) => entity.id == id)
}

export function maxId(tableName: string): number {
    return  getTable(tableName)
        .filter((entity) : entity is WithId => !!entity.id)
        .reduce((prev, current) => { return prev.id > current.id ? prev : current }).id;
}

function getTable(tableName: string) : GormEntity[]{
    return db[tableName]
}

