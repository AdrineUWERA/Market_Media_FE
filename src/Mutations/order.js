import { gql } from '@apollo/client';

const CHANGE_STATUS_COMPLETE = gql`
mutation($id:ID!){
    changeOrderStatusComplete(id: $id) {
        id
    }
}
`;

const CHANGE_STATUS_INCOMPLETE = gql`
mutation($id:ID!){
    changeOrderStatusIncomplete(id: $id) {
        id
    }
}
`;

export { CHANGE_STATUS_COMPLETE,CHANGE_STATUS_INCOMPLETE };
