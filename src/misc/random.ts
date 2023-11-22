// Interface
export interface Sale {
    __typename?: 'Sale';
    id: string
    defaultOfferId: string
    type: string;
    maintenance?: string;
    dates?: string;
    tags?: string;
    photos?: string;
    prices?: string;
    attributes?: string
    links?: string
    labels?: string
    travel?: string
    location?: string
    editorial?: string
    bookingStats?: string
    offers?: string
    offer?: string
    badges?: string
    cancellationPolicy?: string
    cancellationInfo?: string
    reviews?: string
}

// Instance of Sale interface defined above
const aSale: Sale = {
    id: 'A123',
    defaultOfferId: "A123",
    type: "hotel",
    dates: "20012023",
    reviews: "not bad"
}

// Assigning some variables based on the Sale object above
const {
    id,
    photos,
    prices,
    editorial,
    location,
    badges,
    cancellationInfo,
    attributes,
    links,
    dates,
    travel,
    reviews = {},
} = aSale || {}

export function logIt() {
    console.log(id);        // first 3 values are set
    console.log(dates);
    console.log(reviews);
    console.log(photos);    // these aren't set
    console.log(prices);
}