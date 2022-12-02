import "./App.css";

function App() {
  return (
    <div className="container mt-48 flex items-center justify-center mx-auto ">
      <div className="left w-1/2">
        <img src="/fblogo.svg" className="w-80" />
        <p className="text-3xl mx-8">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="right flex flex-col bg-white p-8 rounded-lg w-1/4 text-lg relative">
        <input
          className="px-4 h-12 outline-blue-600 my-2 border border-1 border-gray-200 rounded-lg"
          type={"text"}
          placeholder="Email"
        />
        <input
          className="px-4 h-12 outline-blue-600 my-2 border border-1 border-gray-200 rounded-lg"
          type={"password"}
          placeholder="Password"
        />
        <button className="loginBtn bg-blue-600 hover:bg-blue-700 text-white py-2 my-2 rounded-lg font-bold text-xl">
          Log In
        </button>
        <span className="text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline">
          Forgot password
        </span>
        <hr className="my-2" />
        <button className="createBtn bg-green-600 hover:bg-green-700 text-white py-3 px-4 my-2 mx-auto rounded-lg  text-xl w-fit">
          Create New account
        </button>
        <span className="absolute -bottom-10 text-sm">
          <span className="font-bold hover:underline cursor-pointer">
            Create a Page{" "}
          </span>
          for a celebrity, brand or business
        </span>
      </div>
    </div>
  );
}

export default App;
