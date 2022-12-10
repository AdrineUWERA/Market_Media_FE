import { gql } from '@apollo/client';

const ADD_PRODUCT = gql`
  mutation addProduct($image: String, $name: String!, $description: String!, $categoryId: ID!, $unit: String!,
    $quantity: String!, $price: String!, $manufacturer: String!, $dateAdded: String) {
    addProduct(image: $image, name: $name, description: $description, categoryId: $categoryId, unit: $unit,
                quantity: $quantity, price: $price, manufacturer: $manufacturer, dateAdded: $dateAdded, businessId:"63836fd9a0481d0d5a667d90" ) {
            id
            image
            name
            description
            category{
                id
                name
            }
            unit
            quantity
            price
            manufacturer
            dateAdded
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
export { ADD_PRODUCT,DELETE_PRODUCT };