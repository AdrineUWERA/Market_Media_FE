import { gql } from '@apollo/client';

const CREATE_BUSINESS = gql`
        mutation($image:String, $name:String!, $description:String!, $webLink: String, $socialMediaLink:String, $email: String!, $phoneNumber: String!,
            $province: String!, $district: String!, $streetAddress: String!, $otherAddressDescription: String, $legalDocument: String!, $dateSubmitted:String!){
            addBusiness(image:$image, name:$name, description:$description, webLink:$webLink, socialMediaLink:$socialMediaLink,
            email:$email, phoneNumber:$phoneNumber, province:$province, district: $district, streetAddress:$streetAddress,
            otherAddressDescription:$otherAddressDescription,legalDocument:$legalDocument, ownerId:"63973cb0c04a1bba3c8bc994", dateSubmitted:$dateSubmitted){
        id
    }
}
`
const UPDATE_BUSINESS = gql`
mutation($image:String, $name:String, $description:String, $webLink: String, $socialMediaLink:String, $email: String, $phoneNumber: String,
    $province: String, $district: String, $streetAddress: String, $otherAddressDescription: String){
    updateBusiness(id:"638e4167c2ded250f8ef9408", image:$image, name:$name, description:$description, webLink:$webLink, socialMediaLink:$socialMediaLink,
    email:$email, phoneNumber:$phoneNumber, province:$province, district: $district, streetAddress:$streetAddress,
    otherAddressDescription:$otherAddressDescription){
        id
    }
}
`
export {CREATE_BUSINESS, UPDATE_BUSINESS};