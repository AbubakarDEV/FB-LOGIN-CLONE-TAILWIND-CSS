import "./App.css";

function App() {
  return (
    <div className="navbar flex items-center justify-between">
      <div className="flex items-center justify-center md:order-2">
        <div className="hamburger mr-2 md:hidden">
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
        </div>
        <div className="search md:hidden">Search</div>
      </div>
      <div className="logo text-center flex md:order-1">
        <div>Microsoft</div>
        <div className="features absolute bg-red-400  inset-0 md:flex md:mx-4 md:space-x-3 -translate-x-90">
          <div className="fitem">Microsoft 365</div>
          <div className="fitem">Office</div>
          <div className="fitem">Windows</div>
          <div className="fitem">Surface</div>
          <div className="fitem">Xbox</div>
        </div>
      </div>

      <div className="cart text-center md:order-3 flex">
        <div className="search hidden md:block">All Microsoft SearchIcon</div>
        <div>Cart Account</div>
      </div>
    </div>
  );
}

export default App;
