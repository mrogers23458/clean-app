import { gql } from '@apollo/client';

export const REGISTER = gql `
    mutation addNewUser($firstName: String, $lastName: String, $email:String, $password: String) {
        addNewUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
          user {
            firstName
            lastName
            email
            password
          }
          token
  }
}
`

export const ADDAREA = gql `
    mutation addArea($areaName: String, $areaDescription: String, $areaOwner: String) {
      addArea(areaName: $areaName, areaDescription: $areaDescription, areaOwner: $areaOwner) {
        areaName
        areaDescription
        areaOwner
      }
    }
`