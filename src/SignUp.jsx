function SignUp() {
  return (
    <div className="mainPage" id="signUpPage">
      <div className="logoContainer">
        <span id="contextless">[CONTEXT]LESS</span>
        <span id="education">EDUCATION</span>
      </div>
      <div id="signUpContainer">
        <span id="signUpLabel">Sign Up</span>
        <form action="#" id="signUpForm">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
          <button id="signUpBtn">Sign Up</button>
        </form>
        <p id="signInPrompt">
          Already a member? <a href="signin">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
