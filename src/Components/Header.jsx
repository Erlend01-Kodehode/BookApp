import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiContext, FetchContext } from "../App";
import {
  apiGeneral,
  modifier,
  topicAdventure,
  topicFantasy,
  topicFiction,
  topicJustice,
  topicMorality,
  topicMystery,
  topicPhilosophy,
  topicPower,
  topicRomance,
  topicSociety,
  topicThriller,
  topicTragedy,
  topicWar,
} from "../Data/api";

function Header() {
  const [apiFetch, setApiFetch] = useContext(FetchContext);
  const [apiData] = useContext(ApiContext);

  function handleDataUpdate(target) {
    setApiFetch(`${apiGeneral}${modifier}${target}`);
  }

  // useEffect(() => {
  //   console.log(apiData);
  // }, [apiData]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <nav>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicFiction)}>
            Fiction
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicMystery)}>
            Mystery
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicThriller)}>
            Thriller
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicRomance)}>
            Romance
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicFantasy)}>
            Fantasy
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicMorality)}>
            Morality
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicSociety)}>
            Society
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicPower)}>
            Power
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicJustice)}>
            Justice
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicAdventure)}>
            Adventure
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicTragedy)}>
            Tragedy
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicWar)}>
            War
          </Link>
          <Link to="/Listing" onClick={() => handleDataUpdate(topicPhilosophy)}>
            Philosophy
          </Link>
        </nav>
        <Link to="/Favourites">Favourites</Link>
      </nav>
      <form>
        <input type="text" name="search" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Header;
