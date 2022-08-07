import React, { useCallback, useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import './App.css';
import { login, logout as destroy, accountBalance } from "./utils/near";

import Wallet from "./components/Wallet";
import Wrapper from "./components/layouts/Wrapper";
import Courses from "./components/courses/Courses";
import Cover from "./components/utils/Cover";
import coverImg from "./assets/img/logo.svg";

function App() {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");
  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <>
      {/* <Notification /> */}
      {account.accountId ? (
        <>
          <Wrapper />

          <Container fluid="md">
            <Nav className="justify-content-end pt-3 pb-5">
              <Nav.Item>
                <Wallet
                  address={account.accountId}
                  amount={balance}
                  symbol="NEAR"
                  destroy={destroy}
                />
              </Nav.Item>
            </Nav>

            <main>
              <Courses/>
            </main>

          </Container>
        </>
      ) : (
        <Cover name="Decentralized course system" login={login} coverImg={coverImg} />
      )}
    </>
  );
}

export default App;
