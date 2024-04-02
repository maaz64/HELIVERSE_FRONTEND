import { Link, Outlet } from "react-router-dom";


export default function NavBar() {
  return (
    <>

    <header className="flex justify-center items-center w-full p-[35px] sm:p-5 bg-gray-800">
            <div className="flex flex-row md:flex-row justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1290px]">
            <div className="flex flex-row justify-between items-center w-[39%] md:w-full">
              <h1 size="xl" className="text-gray-200 italic"><Link to="/">HeliVersee</Link></h1>
              </div>

              <div className="flex flex-row justify-between items-center w-[39%] md:w-full">
                  <p className="tracking-[-0.50px] !text-lg text-gray-200">
                  <Link to="/">Home</Link>
                  </p>
          

                <p className="tracking-[-0.50px] !text-lg text-gray-200">
                <Link to="/team">Team</Link>
                </p>
             
              </div>
              
            </div>
          </header>
          <Outlet/>
          </>
  );
}
