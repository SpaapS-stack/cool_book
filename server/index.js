// const express = require('express');
// const cors = require('cors');
import express from 'express';
import cors from 'cors';
import {Posts, Users} from './db.js'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/', (req, res) => {
    Posts.find().then(posts => {
        res.json(posts)
    })
})

app.get('/api/avtorization', (req, res) => {
  console.log(req.params)
  Users.findOne(req.params).then((user) => {
    if (user !== null) {
      res.json(user);
      // console.log(user)          
      // res.json(true);
    } else {
      res.json(false);
    }
  })
  .catch(err => console.log(err))
})


app.post('/api/addPost', async(req, res) => {
    try {
        const posts = new Posts(req.body);
        console.log("posts", req.body);
        let result = await posts.save();
        result = result.toObject();
        if (result) {
          res.send(result);// почему send а не json?
          console.log(result);
        } else {
          console.log("Posts already register");
        }
      } catch (e) {
        res.send("Something Went Wrong");
      }
})

app.delete('/api/:id', async(req, res) => {
    const id = req.params.id;
     Posts.findByIdAndDelete(id)
  .then(deletedUser => {
    if (deletedUser) {
      console.log('Пользователь успешно удален:', deletedUser);
      res.json(deletedUser)
    } else {
      console.log('Пользователь не найден.');
    }
  })
  .catch(err => {
    console.error('Произошла ошибка:', err);
  });
})

app.put('/api/update/:id', (req, res) => {
    const post = req.body;
    const id = req.params.id;
    Posts.findByIdAndUpdate(id, post).then(data => res.json(data))
})

app.post('/api/registration', async(req, res) => {
  const user = new Users(req.body);
  const result = await user.save();
  if(result){
    res.send('Пользователь успешно добавлен!')
  }
})

app.listen(8080, () => {
    console.log('Сервер запузен на порту 8080') 
})