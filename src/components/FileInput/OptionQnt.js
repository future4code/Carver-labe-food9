import React from 'react'

function OptionQntd() {
    const Options = []

    for(let i = 1;i <=10;i++){
        Options.push(<option value = {i} >{i}</option>)
    }

    return (Options)
}

export default OptionQntd