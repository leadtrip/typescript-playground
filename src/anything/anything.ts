export interface User {
    id: number;
    name: string;
    email: string;
    locked: boolean;
}

export function isValidUser(user: User): boolean {
    return !user.locked;
}