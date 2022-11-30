import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'
import ButtonGroup from './ButtonGroup'
import styles from './styles.css'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)
  const container__total = generateBlockClass(styles.container__total, blockClass)
  const container__image = generateBlockClass(styles.container__image, blockClass)
  const container__information = generateBlockClass(styles.container__information, blockClass)
  const container__title = generateBlockClass(styles.container__title, blockClass)


  const productInfo = useProduct();
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log("Productos:", productInfo)
  console.log("Totales:", totalizers[0])

  return (
    <div className={container}>
      {
        items.map((item: any, index: number) => {
          console.log(item)
          return (
            <div key={index} className={container__item}>
              <div className={container__image}>
                <img src={item.imageUrls.at1x} />
              </div>
              <div className={container__information}>
                <p className={container__title}>{item.name}</p>
                {/*<p>{item.id}</p>*/}
                <p>${item.price / 100}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div className={container__total}>
        <p> Tienes {items.length} productos en el carrito</p>
        {/* <p>Total: ${totalizers[0]?.value / 100}</p> */}
      </div>
      <ButtonGroup blockClass={blockClass} />
    </div>
  )
}

export default AddToCartInfo