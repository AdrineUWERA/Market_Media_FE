import { gql } from "@apollo/client";

const GET_SELLER_DETAILS = gql`

query ($id: ID!) {
    businesses(id: $id) {
        id
        image
        name
        description
        webLink
        socialMedia
        email
        phoneNumber
        province
        district
        streetAddress
        otherAddress
        legalDocument
        applicationStatus
        owner{
            id
            name
        }
    }
}
`;

export { GET_SELLER_DETAILS };
