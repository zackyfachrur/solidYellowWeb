import '../index.css'
import CodeImage from '../assets/home-img.png'
import { FaLinkedin } from "react-icons/fa6"
import { FaSquareWhatsapp } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"

export default function Home() {
return (
  <>
    <div className="w-screen xl:max-w-screen-xl flex justify-center items-center h-full mt-32 gap-20">
      <div className="flex flex-col gap-5 w-96 font-bold justify-center items-center">
        <h1 className="font-bold text-xl bg-amber-400 rounded-lg py-1 px-6 justify-center items-center flex text-white">
          Selamat Datang Di Website Kami
        </h1>
        <p className="font-bold text-center">
          Tingkatkan keunggulan bisnis Anda dengan situs web yang dirancang
          secara profesional!
        </p>
        <div className="gap-4 flex">
          {/* Button Portfolio */}
          <button className="bg-amber-400 rounded-lg px-1 font-bold text-white hover:bg-white hover:text-amber-400 border-2 border-amber-400 w-32 hover:drop-shadow-2xl">
            Portfolio
          </button>

          {/* Icon */}
          <div className="flex gap-1">
            <FaLinkedin
              className="bg-white rounded-lg py-1 px-1 font-bold text-amber-400 hover:bg-white hover:text-amber-400 border-2 border-amber-400 w-8 h-8 hover:drop-shadow-2xl cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/mzackyfa/", "_blank")
              }
            />
            <FaSquareWhatsapp
              className="bg-white rounded-lg py-1 px-1 font-bold text-amber-400 hover:bg-white hover:text-amber-400 border-2 border-amber-400 w-8 h-8 hover:drop-shadow-2xl cursor-pointer"
              onClick={() =>
                window.open(
                  "https://wa.me/6287703577988?text=Hello Zumpid",
                  "_blank"
                )
              }
            />
            <FaInstagram
              className="bg-white rounded-lg py-1 px-1 font-bold text-amber-400 border-2 border-amber-400 w-8 h-8 hover:drop-shadow-2xl cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/zumpid/", "_blank")
              }
            />
            <FaGithub
              className="bg-white rounded-lg py-1 px-1 font-bold text-amber-400 border-2 border-amber-400 w-8 h-8 hover:drop-shadow-2xl cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/zumpid/", "_blank")
              }
            />
          </div>
        </div>
      </div>
      <img src={CodeImage} alt="" className="w-80" />
    </div>
  </>
); 

}