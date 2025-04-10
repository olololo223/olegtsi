import React, { PureComponent } from 'react'
class Header extends PureComponent {

    render() {
        return (
            <header class="bg-white shadow-sm">
    <div class="container mx-auto flex justify-between items-center p-4">
        <div class="text-lg font-semibold">
            <a href="/">SiteName</a>
        </div>
        <nav>
            <ul class="flex space-x-6">
                <li>
                    <a href="/" class="text-blue-500">Главная</a>
                </li>
                <li>
                    <a href="/catalog" class="text-blue-500">Каталог</a>
                </li>
                <li>
                    <a href="/about" class="text-blue-500">О нас</a>
                </li>
                <li>
                    <a href="/account" class="text-blue-500">Личный кабинет</a>
                </li>
                <li>
                    <a href="/cart" class="text-blue-500">Корзина</a>
                </li>
            </ul>
        </nav>
    </div>
</header>
            
        )
    }
}

export default Header