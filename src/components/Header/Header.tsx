import styleHeader from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styleHeader.header}>
      <a href="#" className={styleHeader.title}>
        Ник Уайт
      </a>
    </header>
  );
};
