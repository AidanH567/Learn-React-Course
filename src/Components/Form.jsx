function Form () {
function signUp(formData) {

    console.log(Object.fromEntries(formData))
    


}


    return (
    <section>
        <form action={signUp}className="sign-up-form">

            <h2>Sign Up</h2>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="aidan@gmail.com" defaultValue="aidan@gmail.com" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="********" defaultValue="********" />

            <button>Sign Up</button>
 

        </form>

    </section>

    )
}

export default Form