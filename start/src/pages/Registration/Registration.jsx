import React, {useState} from 'react'
import axios from 'axios'

export default function Registration() {
    const [user, setUser] = useState({login:'', password: ''})
    const createUser = () => {
        axios.post('http://localhost:8080/api/registration', user).then(data => alert(data))
    }
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
