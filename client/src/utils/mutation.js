import { gql } from '@apollo/client';

export const REGISTER = gql `
    mutation addNewUser($firstName: String, $lastName: String, $email:String, $password: String) {
        addNewUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
          token
          user {
            _id
            firstName
            lastName
            email
            password
          }
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

export const LOGIN = gql `
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          _id
          firstName
          lastName
        }
      }
    }
`

export const REMOVEAREA = gql `
    mutation removeArea ($id: ID, $areaOwner: String) {
      removeArea(_id: $id, areaOwner: $areaOwner) {
        _id
        areaOwner
      }
    }
`