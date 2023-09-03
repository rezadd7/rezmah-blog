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
const GET_AUTHORS_INFO = gql `
  query  {
    authors {
      avatar {
        url
      }
      name
      id
      slug
    }
  }

`

export {GET_BLOGS_INFO, GET_AUTHORS_INFO};