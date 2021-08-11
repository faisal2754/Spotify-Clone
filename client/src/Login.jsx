import { Container } from 'react-bootstrap'

const AUTH_URL =
   'https://accounts.spotify.com/authorize?client_id=db0981169c6048b9b995897f6b3e0b18&response_type=code&redirect_uri=http://localhost:3000&state=34fFs29kd09&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&state=34fFs29kd09'

const Login = () => {
   return (
      <Container
         className="d-flex justify-content-center align-items-center"
         style={{ minHeight: '100vh' }}
      >
         <a href={AUTH_URL} className="btn btn-success btn-lg">
            Login with Spotify
         </a>
      </Container>
   )
}

export default Login
