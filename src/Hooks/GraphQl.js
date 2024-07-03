import * as gqlb from "gql-query-builder";

export const USER = gqlb.query([
    {
        operation: "me",
        fields: [
            "id",
            "code",
            "phone",
        ],
        variables: {},
    },
]);