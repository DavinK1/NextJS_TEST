export default function Page() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center border-8">
            <div className="bg-white p-8 rounded-3xl shadow-md max-w-md w-full mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Edit User</h2>

                <form action="#" method="POST">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-bold text-gray-700">Firstname</label>
                            <input type="text" id="firstName" name="firstName" className="mt-1 p-2 w-full border rounded-md text-black" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-bold text-gray-700">Lastname</label>
                            <input type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border rounded-md text-black" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="username" className="block text-sm font-bold text-gray-700">Username</label>
                        <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md text-black" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>
                        <input type="text" id="password" name="password" className="mt-1 p-2 w-full border rounded-md text-black" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md text-black" />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-xl text-xl hover:bg-blue-600">Enter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}