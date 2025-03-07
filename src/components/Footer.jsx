import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            

            <div class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm">
                <div class="flex justify-between items-center">
                <span class="text-sm text-blue-300 ">
                    © 2025 <a href="/">SiteName</a>. Все права защищены.
                </span>
                <ul class="flex flex-wrap space-x-4 text-sm text-blue-300 ">
                    <li>
                        <a href="/about">О нас</a>
                    </li>
                    <li>
                        <a>Политика конфиденциальности</a>
                    </li>
                    <li>
                        <a>Лицензирование</a>
                    </li>
                    <li>
                        <a>Контакты</a>
                    </li>
                </ul>
                </div>
            </div>


        )
    }
}

export default Footer