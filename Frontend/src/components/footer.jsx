import {FaTelegramPlane,FaGithubSquare, FaInstagram, FaFacebook} from "react-icons/fa";

function Footer(){
    return(
        <div>
            <footer className="flex items-center text-textColor justify-between bg-secundaryColor  h-14 md:text-2xl lg:h-20 w-full">
                <p className="font-Urbanist text-1xl px-2 text-left flex items-center">Copyright © 2023 chatUVM. </p>
                <div className=" flex text-2xl md:text-3xl">
                   <a href=""><FaTelegramPlane className="mx-2 hover:fill-[#fff]"/></a>
                   <a href=""><FaGithubSquare className="mx-2 hover:fill-[#fff]"/></a>
                   <a href=""><FaInstagram className="mx-2 hover:fill-[#fff]"/></a>
                   <a href=""><FaFacebook  className="mx-2 hover:fill-[#fff]"/></a>
                </div>
                </footer>
        </div>
    );
}

export default Footer;