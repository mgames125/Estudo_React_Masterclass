import React from 'react'

export default props => {
    return(
        <>
            <p> { props.children } { props.sobrenome } </p>
        </>
    )
}