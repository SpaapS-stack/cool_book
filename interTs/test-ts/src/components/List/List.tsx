import React from 'react'
import classes from './List.module.css'

interface IListProps<T> {
    title ?: string;
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}


export default function List<T>({title, items, renderItem}: IListProps<T>) {
  return (
    <div className={classes.list}>
      {title && <h1>Список {title}</h1>}
      {items.map(renderItem)}
    </div>
  )
}
