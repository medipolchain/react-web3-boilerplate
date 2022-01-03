import React from "react";

// CSS
import styles from "./style.module.css";

// Hooks
import { useAccount } from "components/hooks/web3";
import { useWeb3 } from "components/providers";

const Header = () => {
  const { account } = useAccount();
  const { connect } = useWeb3();

  return (
    <div>
      <p>Header</p>
      {account.data != undefined ? (
        <p>{account.data}</p>
      ) : (
        <p onClick={() => connect()}>Please connect</p>
      )}
    </div>
  );
};

export default Header;
