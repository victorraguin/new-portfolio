"use client";
import Brand from "../Brand";
import { HeaderNavs } from "./constants";
import HeaderLinks from "./user-actions/HeaderLinks";
import ThemeSelector from "./user-actions/ThemeSelector";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Brand />
      <nav>
        <ul className="flex items-center flex-row space-x-2 md:space-x-8">
          {HeaderNavs.map((nav) => (
            <HeaderLinks
              value={nav.value}
              href={nav.href}
              id={nav.id}
              key={nav.id}
            />
          ))}
          <ThemeSelector />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
