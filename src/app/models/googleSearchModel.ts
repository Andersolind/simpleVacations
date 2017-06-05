export  interface SearchSlice {
    origin: string;
    destination: string;
    date: string;
}
export interface RequestContext {
    request: {
        passengers: {
            adultCount?: number,
            childCount?: number,
            infantInSeatCount?: number
        },
        slice?: SearchSlice[]
    };
    solutions: number;
}
