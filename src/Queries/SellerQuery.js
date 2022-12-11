import { gql } from "@apollo/client";

const GET_SELLER_DETAILS = gql`

query ($id: ID!) {
<<<<<<< Updated upstream
    businesses(id: $id) {
=======
    business(id: $id) {
>>>>>>> Stashed changes
        id
        image
        name
        description
        webLink
<<<<<<< Updated upstream
        socialMedia
=======
        socialMediaLink
>>>>>>> Stashed changes
        email
        phoneNumber
        province
        district
        streetAddress
<<<<<<< Updated upstream
        otherAddress
=======
        otherAddressDescription
>>>>>>> Stashed changes
        legalDocument
        applicationStatus
        owner{
            id
            name
        }
<<<<<<< Updated upstream
=======
        review{
            id
            user{
                id
                name
            }
            rating
            comment
        }
>>>>>>> Stashed changes
    }
}
`;

export { GET_SELLER_DETAILS };
