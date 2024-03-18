import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
function AuthDialog() {
  return (
    <dialog id="auth_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Sign In"
          />
          <div role="tabpanel" className="tab-content p-10 space-y-6">
            <h2 className="font-bold text-2xl">Sign In</h2>
            <SignInForm />
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Sign Up"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10 space-y-6">
            <h2 className="font-bold text-2xl">Sign Up</h2>
            <SignUpForm />
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default AuthDialog;
