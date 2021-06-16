import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ person }) => (
  <div className={styles.preview}>
    <p>{person.name}</p>
  </div>
)