import "../index.css";

export default function FooterComponents() {
  return (
    <footer className="bg-amber-400 text-white font-bold flex items-center justify-center xl:max-w-screen-xl w-screen h-40 mt-52 rounded-t-lg">
      <div className="flex justify-center items-center gap-10">
        <p className="font-bold text-inherit text-1xl text-white text-shadow  px-5 flex justify-center items-center">
          Zumpid
          <span className="text-amber-400 pr-5 rounded-r-lg bg-white  ml-2 text-center flex justify-center items-center">
            | Pengembangan Web
          </span>
        </p>
      </div>
      <div className="flex items-center justify-end px-12">
        <nav>
          <ul className="flex gap-5 md:flex-row smxxl:flex-col smxxxl:text-center">
            <li>
              <a
                href="/"
                className="hover:bg-white hover:text-amber-400 py-1 px-3 rounded-lg hover:drop-shadow-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:bg-white hover:text-amber-400 py-1 px-3 rounded-lg hover:drop-shadow-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/product"
                className="hover:bg-white hover:text-amber-400 py-1 px-3 rounded-lg hover:drop-shadow-md"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:bg-white hover:text-amber-400 py-1 px-3 rounded-lg hover:drop-shadow-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>Copyright &copy; {new Date().getFullYear()}</div>
    </footer>
  );
}
