import React, {useState} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authAction } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Avtorization() {
    const [user, setUser] = useState({login:'', password: ''});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log('rfgf')
    const avtorization = () => {
      console.log('user', user)
      axios.get('http://localhost:8080/api/avtorization', {params: user})
      .then(res => {
        if(res.data !== false){
          dispatch(authAction(res.data));
          navigate('/');
        }
      })
    }
  
    
  return (
    <div>
      <h1>Авторизация</h1>
        <div>
            <label>Логин:</label>
            <input type="text" value={user.login} onChange={(e) => setUser({...user, login: e.target.value})}/>
        </div>
        <div>
            <label>Пароль</label>
            <input type="text" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
        </div>
        <button onClick={avtorization}>Авторизация</button>
    </div>
  )
}
