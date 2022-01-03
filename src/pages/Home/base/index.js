import React from "react";

// CSS
import styles from "./style.module.css";

// Hooks
import { useWeb3 } from "components/providers";
import { useAccount } from "components/hooks/web3";

const Home = () => {
  const { connect } = useWeb3();

  React.useEffect(() => {
    connect();
  }, []);

  return (
    <div>
      <p>Home</p>
    </div>
  );
};

export default Home;
