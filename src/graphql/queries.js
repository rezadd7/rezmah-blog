import { gql } from "@apollo/client"



const GET_BLOGS_INFO = gql `
query {
  posts {
    author {
      ... on Author {
        name
        avatar {
          url
        }
      }
    }
    coverPhoto {
      url
    }
    slug
    id
    title
  }
}    
`

export {GET_BLOGS_INFO};