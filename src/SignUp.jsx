
function SignUp() {


  return (
    <div className="mainPage" id="signInPage">
     <div id="logoContainer">
      <span id="contextless">[CONTEXT]LESS</span>
      <span id="education">EDUCATION</span>
      </div>
      <div id="signInContainer">
        <span id="signInLabel">Sign Up</span>
        <form action="#" id="signInForm">
          <input type="email" name="email" id="email" placeholder="Email"/>
          <input type="text" name="username" id="username" placeholder="Username"/>
          <input type="password" name="password" id="password" placeholder="Password"/>
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"/>
          <button id="signInBtn">Sign Up</button>
        </form>
        <p id="registerPrompt">Already a member? <a href="#">Sign In</a></p>
      </div>
    </div>
    
  )
}

export default SignUp;