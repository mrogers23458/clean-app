import { gql } from '@apollo/client'

export const GET_USER = gql`
query user($email: String!) {
    user(email: $email) {
        _id
        firstName
        lastName
        email
        areas {
            _id
            areaName
        }
    }
}`

export const GET_ALL_AREAS = gql `
query getAreas {
    areas {
        _id
        areaName
        areaDescription
        areaOwner
    }
  }
`