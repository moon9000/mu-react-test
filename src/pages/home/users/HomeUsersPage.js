import { Button } from "../../../components/Button";
import { Layout } from "../../../components/Layout";
import { Stack } from "../../../components/Stack";
import * as React from "react";

export function HomeUsersPage() {
  const [confirmLogout, setConfirmLogout] = React.useState(false);
  const [users, setUsers] = React.useState(null);
  const [sortColumn, setSortColumn] = React.useState(null);

  React.useEffect(() => {
    fetchData(
      "https://raw.githubusercontent.com/bennydu91/rn_technical_test/main/users.json",
      setUsers
    );
  }, []);

  function handleClick() {
    setConfirmLogout(!confirmLogout);
  }

  function handleSort(columnName) {
    setSortColumn(columnName);
    sortArray(users, sortColumn);
  }

  const tableUsersCols =
    users && users.length > 0 ? Object.keys(users[0]) : null;

  if (users && users.length > 0 && sortColumn) {
    sortArray(users, sortColumn);
  }

  return (
    <Layout>
      <Stack gap={"50px"}>
        <Stack gap={"15px"}>
          <Button
            backgroundColor="#0BD1D1"
            title="Deconnexion"
            onClick={handleClick}
          />
          {confirmLogout ? (
            <Stack>
              <h6 style={{ display: "flex", textAlign: "center" }}>
                Vous allez vous deconnecter. Êtes-vous certain(e) ?
              </h6>
              <Stack direction="row" gap={"15px"}>
                <Button
                  onClick={handleRedirection}
                  backgroundColor="#0BD1D1"
                  title="Confirmer"
                />
                <Button
                  backgroundColor="#E3E3E3"
                  onClick={() => setConfirmLogout(false)}
                  title="Annuler"
                />
              </Stack>
            </Stack>
          ) : null}
        </Stack>

        {users &&
        users.length > 0 &&
        tableUsersCols &&
        tableUsersCols.length > 0 ? (
          <UsersTable
            users={users}
            cols={tableUsersCols}
            handleSort={handleSort}
          />
        ) : null}
      </Stack>
    </Layout>
  );
}

async function fetchData(url, setter) {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await fetch(url, headers);

  if (response.ok) {
    const data = await response.json();
    setter(data.users);
  }
}

function UsersTable({ users, cols, handleSort }) {
  return (
    <table style={{ border: "1px solid #0BD1D1" }}>
      <thead>
        <tr>
          {cols.map((col, index) => {
            return (
              <td key={index}>
                <Button
                  title={col}
                  backgroundColor={"#0BD1D1"}
                  onClick={() => handleSort(col)}
                />
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr
              style={{
                backgroundColor: index % 2 === 0 ? "#E3E3E3" : "",
              }}
              key={user.id}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.dev}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function sortArray(array, columnName) {
  const sortedArray = array.sort((a, b) => {
    if (typeof a[columnName] === "string") {
      const firstString = a[columnName];
      const secondString = b[columnName];
      if (firstString.toLowerCase() < secondString.toLowerCase()) {
        return -1;
      }
      if (firstString.toLowerCase() > secondString.toLowerCase()) {
        return 1;
      }
      return 0;
    } else {
      return a[columnName] - b[columnName];
    }
  });

  return sortedArray;
}

function handleRedirection() {
  window.location.assign("/");
}
