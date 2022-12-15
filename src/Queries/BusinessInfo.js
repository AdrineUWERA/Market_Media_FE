import { gql } from "@apollo/client";

const GET_BUSINESS_INFO = gql`
query getBusinessInfo{
    business(id:"63836fd9a0481d0d5a667d90"){
        image
        name
        description
        webLink
        socialMediaLink
        email
        phoneNumber
        province
        district
        streetAddress
        otherAddressDescription
        owner{
            name
        }
  }
}
`;

export { GET_BUSINESS_INFO };
