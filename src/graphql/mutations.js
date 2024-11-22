/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResident = /* GraphQL */ `
  mutation CreateResident(
    $input: CreateResidentInput!
    $condition: ModelResidentConditionInput
  ) {
    createResident(input: $input, condition: $condition) {
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
export const updateResident = /* GraphQL */ `
  mutation UpdateResident(
    $input: UpdateResidentInput!
    $condition: ModelResidentConditionInput
  ) {
    updateResident(input: $input, condition: $condition) {
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
export const deleteResident = /* GraphQL */ `
  mutation DeleteResident(
    $input: DeleteResidentInput!
    $condition: ModelResidentConditionInput
  ) {
    deleteResident(input: $input, condition: $condition) {
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
