import { PureComponent } from 'react';

interface FooterProps {}

export class Footer extends PureComponent<FooterProps> {
  render() {
    return (
      <div className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm">
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-300">
            © 2025 <a href="/">SiteName</a>. Все права защищены.
          </span>
          <ul className="flex flex-wrap space-x-4 text-sm text-blue-300">
            <li>
              <a href="/about">О нас</a>
            </li>
            <li>
              <a href="/privacy">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="/licensing">Лицензирование</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;