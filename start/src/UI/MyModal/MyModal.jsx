import React from 'react'
import classes from './MyModal.module.css'

export default function MyModal({children, visableModal, setVisableModal}) {
    const rootState = [classes.wrapper];
    if(visableModal){
        rootState.push(classes.active);
    }

  return (
    <div className={rootState.join(' ')} onClick={() => setVisableModal(false)}>
        <div className={classes.main} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  )
}
