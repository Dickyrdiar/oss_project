function Login() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <Box>
      this is index
    </Box>
  )
}

export default Login