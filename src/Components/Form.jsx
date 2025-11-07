function Form () {
function signUp(formData) {

    console.log(Object.fromEntries(formData))
    


}


    return (
    <section>
  <form action={signUp} className="sign-up-form">
    <h2>Sign Up</h2>
    <p>Create your account to access exclusive content.</p>

    <label htmlFor="fullName">Full Name</label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      placeholder="Aidan Herstik"
      required
    />

    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="aidan@gmail.com"
      defaultValue="aidan@gmail.com"
      required
    />

    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="********"
      defaultValue="********"
      required
    />

    <label htmlFor="confirmPassword">Confirm Password</label>
    <input
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      placeholder="********"
      required
    />

    <label htmlFor="accountType">Account Type</label>
    <select id="accountType" name="accountType" required>
      <option value="">Select an option</option>
      <option value="personal">Personal</option>
      <option value="student">Student</option>
      <option value="business">Business</option>
    </select>

    <label>
      <input type="checkbox" name="newsletter" />
      Subscribe to our newsletter
    </label>

    <label>
      <input type="checkbox" name="terms" required />
      I agree to the <a href="#">Terms and Conditions</a>
    </label>

    <button type="submit">Sign Up</button>

    <p>
      Already have an account? <a href="/login">Log in here</a>.
    </p>
  </form>
</section>

    )
}

export default Form