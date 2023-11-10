type LambdaEvent = {id: number};
type LambdaResult = {status: number};

// lambdaHandlerFunction is a type that's a function that takes a LambdaEvent as an argument and returns a Promise<LambdaEvent>
type lambdaHandlerFunction = ( event: LambdaEvent ) => Promise<LambdaResult>

// a concrete implementation of lambdaHandlerFunction
const createLambda: () => lambdaHandlerFunction = () => {
    return async (event: LambdaEvent) : Promise<LambdaResult> => {
        console.log('id is ' + event.id);
        return {
            status: event.id * 2
        }
    }
}
// getReviews is constant of type lambdaHandlerFunction which itself is a function, see above
export const getReviews : lambdaHandlerFunction = createLambda();
