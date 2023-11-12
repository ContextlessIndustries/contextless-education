function SignIn() {
  return (
    <div className="mainPage" id="signInPage">
      <div className="logoContainer">
        <span id="contextless">[CONTEXT]LESS</span>
        <span id="education">EDUCATION</span>
      </div>
      <div id="signInContainer">
        <span id="signInLabel">Sign In</span>
        <form action="#" id="signInForm">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button id="signInBtn">Sign In</button>
        </form>
        <p id="registerPrompt">
          Not a member? <a href="signup">Register</a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
