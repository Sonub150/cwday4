import React from 'react'
import styles from "./quotes.module.css"


function Quotes({arr}) {
  return (
    <>
        <div className={styles.container}>
           { 
           arr.map((obj, idx)=>{
                return (
                    <div className={styles["quote-box"]} key={idx}>
                        <h2>{obj.quote}</h2>
                        <p>{obj.author}</p>
                    </div>
                )
            })
            }
        </div>
    </>
  )
}

export default Quotes