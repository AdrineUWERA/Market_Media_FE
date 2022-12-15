import { gql } from "@apollo/client";

const GET_BUSINESS_INFO = gql`
query getBusinessInfo{
    business(id:"638e4167c2ded250f8ef9408"){
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
