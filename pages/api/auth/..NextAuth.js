import GitHubProvider from "next-auth/providers/github";

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_OUTH,
      clientSecret: process.env.GITHUB_TOKEN,
      authorization: { params: { scope: 'notification', id_token_hint } }
    })
  ]
}

export default (req, res) => NextAuth(req, res, options)

