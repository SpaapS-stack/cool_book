import React, { FC } from 'react'
import classes from './MyModal.module.css'

interface Props {
    visable: boolean;
    setVisable: (visable: boolean) => void;
    children: React.ReactNode | React.ReactElement;
}

export const MyModal: FC<Props> = ({visable, setVisable, children}) => {

    const rootStyle = [classes.myModal]
    if(visable) {
        rootStyle.push(classes.active)
    }

  return (
    <div className={rootStyle.join(' ')} onClick={() => setVisable(false)}>
        <div className={classes.content} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}