import { gql } from '@apollo/client';

const CREATE_BUSINESS = gql`
        mutation($image:String, $name:String, $description:String, $webLink: String, $socialMediaLink:String, $email: String, $phoneNumber: String,
            $province: String, $district: String, $streetAddress: String, $otherAddressDescription: String, $legalDocument: String){
            updateBusiness(id:"63836fd9a0481d0d5a667d90", image:$image, name:$name, description:$description, webLink:$webLink, socialMediaLink:$socialMediaLink,
            email:$email, phoneNumber:$phoneNumber, province:$province, district: $district, streetAddress:$streetAddress,
            otherAddressDescription:$otherAddressDescription,legalDocument:$legalDocument, ownerId:"638369f970d62f0680c8215f"){
        id
    }
}
`
const UPDATE_BUSINESS = gql`
mutation($image:String, $name:String, $description:String, $webLink: String, $socialMediaLink:String, $email: String, $phoneNumber: String,
    $province: String, $district: String, $streetAddress: String, $otherAddressDescription: String){
    updateBusiness(id:"63836fd9a0481d0d5a667d90", image:$image, name:$name, description:$description, webLink:$webLink, socialMediaLink:$socialMediaLink,
    email:$email, phoneNumber:$phoneNumber, province:$province, district: $district, streetAddress:$streetAddress,
    otherAddressDescription:$otherAddressDescription){
        id
    }
}
`
export {CREATE_BUSINESS, UPDATE_BUSINESS};