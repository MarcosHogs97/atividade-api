import { useState,useRef, FormEvent } from "react";
import CompMundiais from "./components/compMundiais";
import style from "../styles/mundiais.module.css";

export default function Mundiais() {
    const [ano, setAno] = useState<number | null>(null); // Inicializamos o estado com null

    const anoRef = useRef<HTMLInputElement | null>(null);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!anoRef.current?.value) return;

        const novoAno = parseInt(anoRef.current.value, 10);
        setAno(novoAno); // Atualizamos o estado com o novo ano
    }

    return (
        <>
            <div className={style.mundi}>    
                <div className={style.search}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="ano"></label>
                        <input placeholder="Informe uma ano para buscar ex:(2023)" type="number" id="ano" ref={anoRef} />
                        <button type="submit">Enter</button>
                    </form>
                </div>
                <div className={style.comp}>
                    {ano !== null && <CompMundiais  year={ano} />}
                </div>
            </div>
        </>
    );
}

