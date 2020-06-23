import gql from 'graphql-tag'

export const SignIn = gql`
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