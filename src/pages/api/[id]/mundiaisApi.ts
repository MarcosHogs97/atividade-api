import type { NextApiRequest, NextApiResponse } from 'next'
import listaMundiais from '../../../../data/listaMundiais'
import Times from '../../../../model/times'

type Data = {
    Times: Times[];
};
const listaMundi: Times[] = listaMundiais

export default function MundiaisApi(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "GET") {
        (res as any).status(200).json({ Times: listaMundi });
    } else {
        (res as any).status(405).send("Erro 405 Método Não Permitido!!!");
    };
  
}
