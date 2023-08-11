import {User} from "../../src/anything/anything"
import {isValidUser} from "../../src/anything/anything";

test('isValidUser returns true for a valid user', () => {
    const user: User = {
        id: 1,
        name: 'John Smith',
        email: 'john@example.com',
        locked: false
    };

    const result = isValidUser(user);

    expect(result).toBe(true);
});