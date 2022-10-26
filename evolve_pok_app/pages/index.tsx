import { ConnectWallet, ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {
  const {contract} = useContract("0x013f88b91054691d20Ce67FA8Ec8e6604B99e53E"); // address of the contract 
  const address = useAddress();
  
  const { data: nfts , isLoading} = useOwnedNFTs(contract, address);
  

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome user 
        </h1>
        
      
        <div className={styles.connect}>
          <ConnectWallet accentColor="pink" />
        </div>
        <br />
        
        

        {nfts?.map((nft) => (
          <div key={nft.metadata.id.toString()}>
            
            <p>{nft.metadata.name}</p>
            
           {/* To show the NFT */}
           {!isLoading && nft ? (
              
              <ThirdwebNftMedia metadata={nft.metadata} width="50%" />
            ) : (
              <p>Loading...</p>
            )} 
            <hr />
            
          </div>
          
        ))}
        <Web3Button contractAddress="0x013f88b91054691d20Ce67FA8Ec8e6604B99e53E" action={(contract) => contract.erc1155.claim(0,1)} >
          Claim a squirtel
        </Web3Button>
        <hr />
        <Web3Button 
        accentColor="red" contractAddress="0x013f88b91054691d20Ce67FA8Ec8e6604B99e53E" action={(contract) => contract.call("evolve")} >
          Evolve
        </Web3Button>
       
      </main>
    </div>
  );
};

export default Home;
