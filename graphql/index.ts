export const getUserQuery = `
query GetUser($email: String!) {
    user(by: { email: $email} ) {
        name
        email
        avatarUrl
        description
        githubUrl
        linkedInUrl
      }
}
`;

export const createUserMutation = `
mutation CreateUser ($input: UserCreateInput!) {
    userCreate(input: $input) {
        user {
            name
            email
            avatarUrl
            description
            githubUrl
            linkedInUrl
            id
        }
    }
}`;
