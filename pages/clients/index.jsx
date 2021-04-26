import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "lou", name: "Louison" },
    { id: "fab", name: "Fabien" },
  ];
  return (
    <div className="ClientPage">
      <h1>Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
