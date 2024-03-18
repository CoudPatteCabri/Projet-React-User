import { FaKey, FaSignInAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { GoAlertFill } from "react-icons/go";
import { login } from "../utils/api";
import { useCookies } from "react-cookie";
import { useContext, useState } from "react";
import { ToastMessageContext } from "../App";

function SignInForm() {
  const [, setCookie] = useCookies(["token"]);
  const [isError, setIsError] = useState(false);
  const { setToastMessage } = useContext(ToastMessageContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const { response, token, message } = await login(email, password);
    if (response) {
      setCookie("token", token);
      setToastMessage(message);
      const authModal = document.getElementById(
        "auth_modal"
      ) as HTMLDialogElement;
      authModal.close();
    } else {
      setIsError(true);
      setErrorMessage(message);
      setTimeout(() => {
        setIsError(false);
        setErrorMessage("");
      }, 3000);
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        <IoMail />
        <input
          name="email"
          type="email"
          className="grow"
          placeholder="Email"
          required
        />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <FaKey />

        <input
          type="password"
          className="grow"
          placeholder="password"
          name="password"
          required
        />
      </label>
      {isError && (
        <div role="alert" className="alert alert-error">
          <GoAlertFill />
          <span>{errorMessage}</span>
        </div>
      )}
      <button type="submit" className="btn btn-primary ">
        Sign In
        <FaSignInAlt />
      </button>
    </form>
  );
}

export default SignInForm;
