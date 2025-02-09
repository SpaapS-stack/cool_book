import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Registration() {
    const [user, setUser] = useState({login:'', password: ''})
    const createUser = () => {
        axios.post('http://localhost:8080/api/registration', user).then(data => alert(data))
    }

    // useEffect(() => {
    //     const handleKeyDown = (e) => {
    //         console.log(e.key)
    //         if(e.key === enter){
    //             createUser()
    //         }
            
    //     }
    //     window.addEventListener('keydown', handleKeyDown)

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //       };
    // }, [])

    // useEffect(() => {
    //     const handleKeyDown = (event) => {
    //       if (event.ctrlKey && event.key === 's') {
    //         event.preventDefault(); // Отменяем стандартное поведение (например, сохранение страницы)
    //         console.log('CTRL + D было нажато');
    //         // Ваша логика здесь
    //       }
    //       if (event.key === 'Escape') {
    //         console.log('Escape было нажато');
    //         // Ваша логика здесь
    //       }
    //     };
    
    //     window.addEventListener('keydown', handleKeyDown);
    
    //     // Очистка события при размонтировании компонента
    //     return () => {
    //       window.removeEventListener('keydown', handleKeyDown);
    //     };
    //   }, []); // Пустой массив зависимостей, чтобы хук вызвался только один раз
    


  return (
    <div>
        <div>
            <label>Логин:</label>
            <input type="text" value={user.login} onChange={(e) => setUser({...user, login: e.target.value})}/>
        </div>
        <div>
            <label>Пароль</label>
            <input type="text" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
        </div>
        <button onClick={createUser}>Зарегистрироваться</button>
    </div>
  )
}
