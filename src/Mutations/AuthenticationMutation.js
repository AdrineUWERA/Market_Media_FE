import { gql } from "@apollo/client";

const SIGNUP_MUTATION = gql`
    mutation ($name: String!, $email: String!, $phoneNumber: String!, $password: String!) {
        addUser(name: $name, email: $email, phoneNumber: $phoneNumber, password:$password){
            id 
            email
            password
        }

    }

`

export { SIGNUP_MUTATION }
