import { useState } from "react";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const handleInput = (e) => {
    setCountry(e.target.value);
  };

  const searchCountry = () => {
    if (country === "") return alert("Please insert name of country ");

    router.push("/country/" + country);
  };

  return (
    <div>
      <label>
        Search For Country :
        <input type="text" onChange={handleInput} value={country}></input>
      </label>
      <br></br>
      <button onClick={searchCountry}>Search</button>
    </div>
  );
}

export default HomePage;
