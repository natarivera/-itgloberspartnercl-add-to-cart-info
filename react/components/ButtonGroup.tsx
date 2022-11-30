import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const ButtonGroup = ({ blockClass }: { blockClass: string }) => {
  const container__buttonGroup = generateBlockClass(styles.container__buttonGroup, blockClass)
  const button__cart = generateBlockClass(styles.button__cart, blockClass)
  const button__home = generateBlockClass(styles.button__home, blockClass)

  return (
    <>
      <div className={container__buttonGroup}>
        <a href='/checkout/#/cart'> <button className={button__cart} role="link">Ver carrito</button></a>
        <a href='/'><button className={button__home} role="link">Seguir Comprando</button></a>
      </div>
    </>
  )
}

export default ButtonGroup;