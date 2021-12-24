import { useState } from "react";
import TopNav from "components/TopNav";
import PageAbout from "pages/PageAbout";
import PageCounter from "pages/PageCounter";
import PageLotto from "pages/PageLotto";
import PagePlaylist from "pages/PagePlaylist";

function App() {
  const [pageName, setPageName] = useState("about");

  // const changePageName = (pageName) => {
  //   setPageName(pageName);
  // };

  return (
    <div>
      <h1>이진석의 리액트</h1>
      {/* <button onClick={changePageName}>페이지 토글</button> */}
      <TopNav changePageName={setPageName} />
      {pageName === "about" && <PageAbout />}
      {pageName === "counter" && <PageCounter />}
      {pageName === "lotto" && <PageLotto />}
      {pageName === "playlist" && <PagePlaylist />}
    </div>
  );
}

export default App;
