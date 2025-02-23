import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            <a href='/' className='bg-green-500 text-lg'>Главная </a>
            <a href='/blog' className='bg-green-500 text-lg'>Блог </a>
            <a href='/about' className='bg-green-500 text-lg'> О нас </a>
        </>
        )
    }
}

export default Footer