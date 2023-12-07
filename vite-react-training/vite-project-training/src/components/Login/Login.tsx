import { useMutation} from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = useMutation({ mutationFn: async (userData) => {
        const res = await axios.post('https://reqres.in/api/login', userData);
        console.log(res.data);
        if (res.status !== 200) {
            throw new Error('Что-то пошло не так');
        }
        return res;
    } });

    if (login.isError) return 'Ошибка!';



    function onEmailChange(e) {
        setEmail(e.target.value); 
    }

    function onPasswordChange(e) {
        setPassword(e.target.value); 
    }


    return (
        <>
        <form action="">
            <input type="email" name="" id="" placeholder='email' onChange={onEmailChange}/>
            <input type="password" name="" id="" placeholder='пароль' onChange={onPasswordChange} />
            <button onClick={(e) => {
                e.preventDefault();
                login.mutate({email, password})}}
                type="submit">Войти</button>
        </form>

        <p>{`Ответ сервера: ${login.data}`}</p>
        </>
    )
}

export default Login;