import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { getRandomUser } from "./utils/randomUser.api";
import { UserCard } from "./components/Card/UserCard";

function App() {
  const fetchUser = () => getRandomUser().then((user) => setUser(user));

  const [user, setUser] = React.useState(() => {
    fetchUser();
  });

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="App">
      <UserCard {...user} />
      <button onClick={fetchUser}>Update User Card</button>
    </div>
  );
}

export default App;
