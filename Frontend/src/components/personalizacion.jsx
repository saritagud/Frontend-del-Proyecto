import { useEffect } from 'react'
import Footer from './footer'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function Personalizar (){
    const navigate = useNavigate();
    const existeToken = localStorage.getItem('token');
    const estiloLabel = "font-Urbanist text-xl text-left w-full mt-8 font-bold";
    const estiloSelect = "h-14 rounded-xl p-3 font-Urbanist font-bold text-xl border-2 border-verdeOscuroFuerte";

    useEffect(() => {
        if ( !existeToken ) navigate('/');
    }, [])
    

    return(
        <div className='flex flex-col items-center'>
            <i className='w-full text-left' onClick={() => navigate('/')}>
                {" "}
                <FaArrowLeft className="cursor-pointer text-4xl text-verdeOscuro ml-7 mt-7" />{" "}
            </i>
            <h1 className='font-signikaNegative text-5xl text-center m-4'>¡Personaliza tu MomoyBOT!</h1>

            <p className='font-Urbanist text-center text-[20px] m-5'>Al proveer esta información, MomoyBOT te podrá proporcionar mejores respuestas</p>

            <form className="flex flex-col  bg-verdeClaro h-auto w-72 lg:w-80 rounded-2xl border-2 border-solid border-grisClaro p-4 mb-16 shadow-2xl">
            
            <div className="w-62 lg:w-80 rounded-t-2xl h-6 bg-verdeManzana -m-5 mb-1 border-t-2 border-grisClaro border-l-2 border-r-2"></div>
                <label className={estiloLabel}>Carrera</label>
                <select className='h-14 rounded-xl text-base pl-3 font-Urbanist font-bold lg:text-xl border-2 border-verdeOscuroFuerte'>
                
                    <option>Ingeniería en Computación</option>
                    <option>Ingeniería Industrial</option>
                    <option>Administración de empresas</option>
                    <option>Contaduría</option>
                    <option>Derecho</option>
                </select>

                <label className={estiloLabel}>Trimestre</label>
                <input className='border-2 border-verdeOscuroFuerte h-14 text-left w-full rounded-2xl p-3 font-Urbanist text-xl font-bold' type="text"></input>

                <label className={estiloLabel}>Tema</label>
                <select className={estiloSelect}></select>

                <label className={estiloLabel}>Sonido de mensajes</label>
                <select className={estiloSelect}></select>

                <button className="bg-verdeOscuroFuerte border-2  rounded-2xl font-Urbanist text-white text-xl p-3 w-52 font-bold m-10">Guardar Cambios</button>
            </form>

            <Footer/>
        </div>
    )
}

export default Personalizar;