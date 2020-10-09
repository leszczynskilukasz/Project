import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query getArticles($section:String!, $page:Int!) {
    articles(section:$section, page:$page) {
      id
      section
      title
      publicationDate
      url
    }
  }
`;