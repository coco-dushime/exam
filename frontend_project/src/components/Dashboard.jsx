import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-cols  bg-gray-200 min-h-screen">
       <div className="bg-blue-700 w-120 rounded ">
        <h1 className="font-bold text-2xl m-3 text-white">Welcome To Vehicle Service Managment System</h1>
         <nav className="grid gap-4 ml-5 ">
                <Link to='/' className="hover:bg-gray-400 rounded p-2 text-white flex gap-3 text-xl">Home</Link>
                <Link to='/customer' className="hover:bg-gray-400 rounded p-2 text-white flex gap-3 text-xl">Customers</Link>
                <Link to='/invoicelist' className="hover:bg-gray-400 rounded p-2 text-white flex gap-3 text-xl"> Invoices</Link>
                <Link to='/service' className="hover:bg-gray-400 rounded p-2 text-white flex gap-3 text-xl">Services</Link>
                <Link to='/report' className="hover:bg-gray-400 rounded p-2 text-white flex gap-3 text-xl">Reports</Link>
                </nav>
       </div>
       <div className="bg-white w-full">
        <div className="flex justify-end m-4">
          <h1 className="mr-10 mt-2 text-gray-800 -">Welcome, Admin!</h1>
       <Link to='/login' 
       className="bg-red-600 w-20 p-2 rounded-l">
        LogOut</Link>
       </div>
       <div className="grid grid-cols-3 gap-9 ml-4 mt-10 mr-4">
         <div className="bg-gray-100 p-6 rounded-xl shadow-md ">
          <h1 className="text-gray-800 text-l font-semibold">Customers</h1>
          <p className="text-blue-600 text-2xl font-bold">123</p>
         </div>
         <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h1 className="text-gray-800 text-l font-semibold">Invoices</h1>
          <p className="text-blue-600 text-2xl font-bold">123</p>
         </div>
         <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h1 className="text-gray-800 text-l font-semibold">Services</h1>
          <p className="text-blue-600 text-2xl font-bold">123</p>
         </div>
       </div>

       </div>

    </div>
  );
}