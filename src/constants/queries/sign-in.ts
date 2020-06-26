import gql from 'graphql-tag'

export const SIGN_IN = gql`
  query signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      account {
        id
        email
        phone
      }
    }
  }
`;