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
const GET_AUTHOR_INFO = gql `
  query getAuthorInfo($slug: String) {
    author(where: {slug: $slug}) {
      avatar {
        url
      }
      name
      field
      description {
        html
      }
    }
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
`

export {GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO};