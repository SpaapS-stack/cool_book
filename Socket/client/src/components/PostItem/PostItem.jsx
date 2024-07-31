import React from 'react'
import classes from './PostItem.module.css'

export default function PostItem({message}) {
  return (
    <div className={classes.post}>
        <h2>{message}</h2>
    </div>
  )
}
