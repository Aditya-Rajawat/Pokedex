import { useDispatch } from "react-redux";
import usePokemonColor from "../hooks/usePokemonColor";
import usePokemonData from "../hooks/usePokemonData";
import { IMG_URL } from "../utils/constants";
import { setExpand, setPokemonData } from "../utils/configSlice";

const PokemonCard=({data})=>{

    console.log(data)

    const dispatch=useDispatch();
    const color=usePokemonColor(data?.url.slice(data?.url.length-3,data?.url.length-1))
    const pokemonData=usePokemonData(data?.url);
    if(!pokemonData) return;
    // console.log('pokemon',pokemonData)
    const {name,types,id}=pokemonData;

    const handleExpand=()=>{
        dispatch(setExpand(true));
        dispatch(setPokemonData(pokemonData));
    }



    return (
        <div onClick={handleExpand} style={{backgroundColor: color,boxShadow:color}} className={`border-2 rounded-3xl m-5 h-40 w-64 relative cursor-pointer hover:shadow-xl hover:scale-105 transition-all transform`}>
            <div className="m-8">
                <p className={`${color==='white' ? "text-black" : "text-white"} font-bold`}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                {
                    types.map((type)=>(
                        <p className={`${color=='white' ? "text-black" : "text-white"} text-[8px] bg-[#b4b4b460] w-10 my-2 p-1 px-4 rounded-xl flex items-center justify-center`}>{type?.type?.name}</p>
                    ))
                }
            </div>
            <p className="text-white opacity-75 font-bold text-xl absolute top-4 z-10  right-10">{id<10 ? "#00" + id : "#0" + id}</p>
            <img className="absolute top-0 right-0 h-24 w-24 m-8" src={IMG_URL+id+".svg"}/>
        </div>
    )   
};

export default PokemonCard;