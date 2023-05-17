import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/Navbar.module.scss";
import Image from "next/image";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={s.nav}>
      <div className={s.logo}>
        <Image
          src="/gdev.png"
          alt="Picture of the author"
          width={100}
          height={80}
        />
      </div>
      <div className={s.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <p className={pathname === path ? s.active : null}>{title}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
