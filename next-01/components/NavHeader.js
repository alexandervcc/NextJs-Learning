import Link from "next/link";

const butonColot = 0;
const NavHeader = () => {
  return (
    <>
      <h3 className="header--title">Personalized Styles JSX</h3>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          User:
          <ul>
            <li>
              <Link href="/user/edit">Edit</Link>
            </li>
            <li>
              <Link href="/user/create">Create</Link>
            </li>
            <li>
              <Link href="/user/delete">Delete</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contacts</Link>
        </li>
      </ul>
      {/* Estilos personalizados para el componente JSX*/}
      <style jsx>{`
        .header--title {
          font-size: 40px;
          color: ${butonColot > 0 ? "red" : "blue"};
        }
      `}</style>
    </>
  );
};

export default NavHeader;
