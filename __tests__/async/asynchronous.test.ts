import {getReviews} from "../../src/async/asynchronous";

test('getReviews', async () => {
    const resp: any = await getReviews({id: 44})
    expect(resp.status).toEqual(88)
});