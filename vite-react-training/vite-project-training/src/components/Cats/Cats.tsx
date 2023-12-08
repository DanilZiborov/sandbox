import { useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Cats() {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const getCat = useQuery({
        queryKey: ['cats'], queryFn: async () => {
            const res = await axios.get(`https://api.thecatapi.com/v1/images/search`);

            if (res.status !== 200) {
                throw new Error('Что-то пошло не так');
            }

            return res;
        }
    });

    function reloadCat() {
        queryClient.invalidateQueries({ queryKey: ['cats'] })
    }

    return (
        <>
            <div className="cat-wrapper">
                <img src={getCat.data?.data[0].url} alt="" />
            </div>
            <button onClick={reloadCat}>{getCat.fetchStatus === 'fetching' ? 'Минуточку...' : getCat.isError ? 'Ошибка!' : 'Покажи котика'}</button>
            <button onClick={():void => navigate('/')}>Выйти</button>
        </>
    )
}