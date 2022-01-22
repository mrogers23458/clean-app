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
  mutation removeArea ($id: ID, $areaOwner: String, $areaName: String) {
    removeArea(_id: $id, areaOwner: $areaOwner, areaName: $areaName) {
      areaName
      areaOwner
    }
  }
`

export const ADDTASK = gql `
  mutation addTask ($areaId: ID, $taskTitle: String, $taskDescription: String, $taskComplete:Boolean) {
    addTask (taskTitle: $taskTitle, taskDescription: $taskDescription, taskComplete: $taskComplete, areaId: $areaId) {
      tasks {
        taskTitle
        taskDescription
        taskComplete
      }
    }
  }`
  
  export const UPDATETASK = gql `
  mutation updateTasksMutation ($areaId: ID, $taskId: ID, $updatedTaskTitle: String, $updatedTaskDescription: String, $updatedTaskComplete: Boolean) {
    updateTask (areaId: $areaId, taskId: $taskId, updatedTaskTitle: $updatedTaskTitle, updatedTaskDescription: $updatedTaskDescription, updatedTaskComplete: $updatedTaskComplete) {
      areaName
      _id
      tasks {
        _id
        taskTitle
        taskDescription
        taskComplete
      }
    }
  }`