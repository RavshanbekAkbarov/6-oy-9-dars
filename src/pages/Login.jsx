import { useSignup } from "../hooks/useSignup";

function Login() {
  const { signUpWithGooogle } = useSignup();
  return (
    <div className="grid h-screen place-items-center">
      <button onClick={signUpWithGooogle} className="btn btn-primary">
        Google
      </button>
    </div>
  );
}

export default Login;
