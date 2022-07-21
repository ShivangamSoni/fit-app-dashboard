import UsersProvider from "./context/UsersContext";
import Routing from "./pages";

const App = () => {
  return (
    <main>
      <UsersProvider>
        <Routing />
      </UsersProvider>
    </main>
  );
};

export default App;
