/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResident = /* GraphQL */ `
  query GetResident($id: ID!) {
    getResident(id: $id) {
      id
      name
      apartment_no
      move_in_date
      mobile_phone
      parking_no
      vehicle_rego
      pet_type
      pet_weight
      storage_no
      re_name
      re_mobile
      re_email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listResidents = /* GraphQL */ `
  query ListResidents(
    $filter: ModelResidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResidents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        apartment_no
        move_in_date
        mobile_phone
        parking_no
        vehicle_rego
        pet_type
        pet_weight
        storage_no
        re_name
        re_mobile
        re_email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
