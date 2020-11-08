import React from'react';
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]
//Button에 데이터다입 지정 및 style , size 적용 함수
export const Button = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
}) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onclick={onclick} type={type} > 
        {children}
        </button>
    )
}