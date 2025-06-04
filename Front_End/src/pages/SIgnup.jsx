// Signup.jsx
import SignupForm from "../components/SignupForm"
import BackgroundDot from "../components/BackgroundDot";

function Signup() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <BackgroundDot />
      <div className="container mx-auto px-4 flex items-center justify-center">
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;