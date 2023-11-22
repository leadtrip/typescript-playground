import {APIGatewayProxyEventV2, APIGatewayProxyHandlerV2, APIGatewayProxyResultV2} from "aws-lambda";

type GlobalConfiguration = {}
type FilteringGetReviewsUseCase = {}

const createLambda = (): APIGatewayProxyHandlerV2 => {
    return createLambdaByConfiguration();
};

const createLambdaByConfiguration = (): APIGatewayProxyHandlerV2 => {
    return createLambdaByDependencies();
};

const createLambdaByDependencies = (): APIGatewayProxyHandlerV2 => {
    return async ( event: APIGatewayProxyEventV2 ): Promise<APIGatewayProxyResultV2> => {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Error',
            }),
        };
    };
};