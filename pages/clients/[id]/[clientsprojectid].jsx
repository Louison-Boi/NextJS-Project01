import { useRouter } from "next/router";

const SelectedClientsProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className="SelectedClientsProjectsPage">
      <h1>The page of selected project for the clients</h1>
    </div>
  );
};

export default SelectedClientsProjectsPage;
