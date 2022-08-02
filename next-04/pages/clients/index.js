import Link from "next/link";

const index = () => {
  return (
    <div>
      index clients
      <ul>
        <li>
          <Link href="/clients/max">MAx</Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/clients/[idClient]",
              query: { idClient: 1 },
            }}
          >
            Mijotron
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default index;
