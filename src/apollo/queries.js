import { gql } from "@apollo/client";

export const TOPIC_QUERY = gql`
  query getTopic($name: String!){
    topic(name: $name) {
      name
      stargazerCount
      id
      relatedTopics(first: 10) {
        name
        id
        stargazerCount
      }
    }
  }
`