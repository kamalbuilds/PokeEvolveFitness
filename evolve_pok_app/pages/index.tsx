import { ConnectWallet, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const {contract} = useContract("0x013f88b91054691d20Ce67FA8Ec8e6604B99e53E"); // address of the contract 
  const address = useAddress();
  console.log(address);
  const { data: ownedNFTs } = useOwnedNFTs(contract, address);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome user 
        </h1>
        
      
        <div className={styles.connect}>
          <ConnectWallet accentColor="pink" />
        </div>
        <hr />
        
        {ownedNFTs?.map((nft)=>{
          <h1 key={nft.metadata.id.toString()}>{nft}</h1>
          console.log(nft.metadata.id)
          
        })}

       
      </main>
    </div>
  );
};

export default Home;
