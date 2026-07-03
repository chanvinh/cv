import React from 'react'
import styles from './grid.module.css'

interface PropsGrid {
    variant?: 'header';
    children?: React.ReactNode
    row?: boolean;
}

const Grid = ({ children, variant, row = false }: Readonly<PropsGrid>) => {
    const className = variant === 'header'
        ? `${row ? styles.gridRow : styles.grid} ${styles.header}`
        : `${row ? styles.gridRow : styles.grid}`;

    return (
        <div className={className}>{children}</div>
    )
}

export default Grid
