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
            areaDescription
        }
    }
}`

export const GET_ME = gql`
    query me ($id: ID) {
        me (id: $id) {
            _id
            email
            firstname
            lastName
        }
    }
`

export const GET_ALL_AREAS = gql `
query getAreas {
    areas {
        _id
        areaName
        areaDescription
        areaOwner
        tasks {
            taskTitle
            taskDescription
            taskOwner
        }
    }
  }
`

export const GET_ONE_AREA = gql `
query getSingleArea($areaName: String) {
    area(areaName: $areaName) {
        _id
        areaName
        areaOwner
        tasks {
            _id
            taskTitle
            taskDescription
        }
    }
}
`
