import { gql } from '@apollo/client';

export const GET_PROJECT_SCREENS = gql`
  query GetProjectScreens {
    projectScreens {
      id
      title
      subtitle
      image {
        src
        alt
      }
      description
    }
  }
`;

export const GET_WORK_SCREENS = gql`
  query GetWorkScreens {
    workScreens {
      id
      title
      image {
        src
        alt
      }
      description
    }
  }
`;

export const GET_STORY = gql`
  query GetStory {
    story {
      title
      subtitle
      story_description
      descriptions
    }
  }
`;
