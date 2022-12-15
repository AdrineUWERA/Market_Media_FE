import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
query getProduct($id:ID!){
    product(id:$id){
        id
        name
        description
        image
        unit
        quantity
        price
        dateAdded
        manufacturer
        category{
          id
        }
  }
}
`;

const SEARCH_PRODUCT = gql`
query searchProduct($name:String!){
  findProduct(name:$name){
        id
        name
        image
  }
}
`;

export { GET_PRODUCT,SEARCH_PRODUCT };
