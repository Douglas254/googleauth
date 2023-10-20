import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center shadow-md">
      <Link href={"/"} className="font-bold text-lg text-blue-700">Douglas</Link>
      <button className="bg-slate-900 text-white px-6 py-2 rounded-md">Sign In</button>
    </div>
  );
};

export default Navbar;
