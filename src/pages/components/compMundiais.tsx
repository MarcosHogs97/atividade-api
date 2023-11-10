import React, { useEffect, useState } from 'react';
import style from '../../styles/tableTimes.module.css'

interface Time {
    name: string;
    flag: string;
    championYear: number;
}

interface CompMundiaisProps {
    year: number;
}

export default function CompMundiais(props: CompMundiaisProps) {
    const [times, setTimes] = useState<Time[]>([]);

    async function fetchMundiais() {
        try {
            const resp = await fetch('http://localhost:4077/api/2023/mundiaisApi');
            const json = await resp.json();
            const allTimes: Time[] = json.Times || [];

            
            const filteredTimes = allTimes.filter((time) => time.championYear <= props.year);

            
            const lastFiveTimes = filteredTimes.sort((a, b) => b.championYear - a.championYear).slice(0, 5);
            console.log(lastFiveTimes);
            setTimes(lastFiveTimes);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    useEffect(() => {
        fetchMundiais();
    }, [props.year]);
    return (
        <div>
            <table className={style.tabela}>
                <thead className={style.tabelahead}>
                    <tr className={style.celula}>
                        <th className={style.celula}>Campeao</th>
                        <th className={style.celula}>Bandeira</th>
                        <th className={style.celula}>Ano</th>
                    </tr>
                </thead>
                <tbody className={style.tabelabody}>
                    {times.map((time, index) => (
                        <tr className={style.celula} key={index}>
                            <td className={style.celula}>{time.name}</td>
                            <td className={style.celula}>
                                <img src={time.flag} alt={`Flag of ${time.name}`}  />
                            </td>
                            <td className={style.celula}>{time.championYear}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}