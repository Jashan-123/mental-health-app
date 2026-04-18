import Link from "next/dist/client/link";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
