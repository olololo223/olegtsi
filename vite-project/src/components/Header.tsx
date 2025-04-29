import { PureComponent } from 'react';

interface HeaderProps {}

export class Header extends PureComponent<HeaderProps> {
  render() {
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-lg font-semibold">
            <a href="/">SiteName</a>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="text-blue-500">Главная</a>
              </li>
              <li>
                <a href="/catalog" className="text-blue-500">Каталог</a>
              </li>
              <li>
                <a href="/about" className="text-blue-500">О нас</a>
              </li>
              <li>
                <a href="/account" className="text-blue-500">Личный кабинет</a>
              </li>
              <li>
                <a href="/cart" className="text-blue-500">Корзина</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;