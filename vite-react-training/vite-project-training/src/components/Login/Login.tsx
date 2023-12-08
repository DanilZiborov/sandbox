import { useMutation} from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    let requestInfo = '';

    const login = useMutation({ mutationFn: async (userData: {email: string, password: string}) => {
        const res = await axios.post('https://reqres.in/api/login', userData);
        if (res.status !== 200) {
            throw new Error('Что-то пошло не так');
        }
        return res;
    } });

    if (login.isSuccess) {
        requestInfo = login.data.data.token;
        setTimeout((): void => navigate('/main'), 1000)
    }
    
    if (login.isError) requestInfo = login.error.response.data.error; 
    if (login.isIdle) requestInfo = 'запрос ещё не отправлен'; 
    if (login.isPending) requestInfo = 'загрузка ....';


    function onEmailChange(e: React.FormEvent<HTMLInputElement>) {
        setEmail(e.currentTarget.value); 
    }

    function onPasswordChange(e: React.FormEvent<HTMLInputElement>) {
        setPassword(e.currentTarget.value); 
    }

    return (
        <>
        <p>пароль любой, почта: michael.lawson@reqres.in</p>
        <form action="">
            <input type="email" name="" id="" placeholder='email' onChange={onEmailChange}/>
            <input type="password" name="" id="" placeholder='пароль' onChange={onPasswordChange} />
            <button onClick={(e) => {
                e.preventDefault();
                login.mutate({email, password})}}
                type="submit">Войти</button>
        </form>
        <p>Ответ сервера:</p>
        <p>{requestInfo}</p>
        </>
    )
}

export default Login;