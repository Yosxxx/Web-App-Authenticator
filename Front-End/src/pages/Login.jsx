import BackgroundDot from "../components/BackgroundDot";
import LoginForm from "../components/LoginForm"

function Login({ setIsAuthenticated }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <BackgroundDot />
      <div className="container mx-auto px-4 flex items-center justify-center">
        <LoginForm setIsAuthenticated={setIsAuthenticated} />
      </div>
    </div>
  );
}

export default Login;
