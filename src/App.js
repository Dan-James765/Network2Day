import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="bg-linkedingrey flex flex-col  ">
        <Header />
        <div className="flex ">
          <Sidebar />
          <Feed />
        </div>
      </div>
    </>
  );
}

export default App;
