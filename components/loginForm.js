

function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <form onSubmit={handleSubmit} className="bg-green-300 border border-green-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <fieldset autoComplete='off'>
                <div className="flex justify-center">
                    <label className="font-bold" htmlFor="username">USER NAME</label>
                </div>
                <div>
                    <input placeholder="User Name" id="username" className="flex-1 w-full px-4 border-2 border-gray-200" name="username" />
                </div>
                <div>
                    <label className="flex justify-center font-bold" htmlFor="password">PASSWORD</label>
                </div>
                <div>
                    <input  placeholder="password" type="password" name="password" id="password" className="flex-1 w-full px-4 border-2 border-gray-200" />
                </div>
                <div className="p-2 pt-10">
                    <button className="w-full bg-green-600 rounded p-2" >SIGN IN</button>
                </div>
            </fieldset>
        </form>
    );
}

export default LoginForm