import axios from "axios";
import React, { useEffect, useState } from "react";

function TableData() {
  const [user, setUser] = useState();

  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setUser(res.data);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        {user &&
          user
            .filter(
              (us) =>
                us.company.toLowerCase().includes(searchData.toLowerCase()) ||
                us.ticker.toLowerCase().includes(searchData.toLowerCase()) ||
                us.timeElapsed.toLowerCase().includes(searchData.toLowerCase())
            )
            .map((data) => (
              <tr>
                <td>{data.company}</td>
                <td>{data.ticker}</td>
                <td>{data.timeElapsed}</td>
              </tr>
            ))}
      </table>
    </div>
  );
}

export default TableData;
