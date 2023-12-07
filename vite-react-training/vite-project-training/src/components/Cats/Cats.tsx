import React from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { catsApi } from '../../api/catsApi';



export function Cats() {
    const queryClient = useQueryClient();
    const {isPending, error, data} = useQuery({ queryKey: ['cats'], queryFn: catsApi.getRandomCat });

    function reloadCat() {
        queryClient.invalidateQueries({ queryKey: ['cats'] })
    }

    if (isPending) return 'Loading...';
    if (error) return 'Ошибка!';

    return (
        <>
            <div className="cat-wrapper">
                <img src={data?.data[0].url} alt="" />
            </div>
            <button onClick={reloadCat}>Котик!</button>
        </>
    )
}