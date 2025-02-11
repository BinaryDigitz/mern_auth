import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div>
      <h2 className="text-center text-3xl">Sign up</h2>
      <form  className="rounded-md max-w-lg mx-auto">
        <div className="mb-3 flex gap-3 justify-around">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" id="username" className="border p-3 rounded-sm  bg-slate-100"/>
        </div>
        <div className="mb-3 flex gap-3 justify-around">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id="email" className="border p-3 rounded-sm bg-slate-100"/>
        </div>
        <div className="m-3 flex gap-3 justify-around">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" className="border -3 rounded-sm  bg-slate-100"/>
        </div>
        <button  className=" p-3 bg-slate-700 text-white disabled:opacity-50" type="submit">Sign up</button>
      </form>
      <div className='flex justify-between p-2 max-w-lg mx-auto'>
        <p className="text-sm">Have an account?</p>
        <Link to='signIn'>
          <span className="text-blue-400">Sign in</span>  
        </Link>
       
      </div>
    </div>
  )
}

export default SignUp
