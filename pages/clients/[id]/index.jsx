import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);

  const clickHandler = () => {
    router.push({
      pathname: `/clients/[id]/[clientsprojectid]`,
      query: { id: "lou", clientsprojectid: "projecta" },
    });
  };
  return (
    <div className="ClientsProjectPage">
      <h1>The project given by the Client</h1>
      <button onClick={clickHandler}>Load Project</button>
    </div>
  );
};

export default ClientProjectsPage;
