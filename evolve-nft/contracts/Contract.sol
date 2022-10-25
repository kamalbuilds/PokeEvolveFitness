// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC1155LazyMint.sol";

contract EvolvePokemon is ERC1155LazyMint {
    constructor(
        string memory _name,
        string memory _symbol

    ) ERC1155LazyMint(_name, _symbol, msg.sender, 0) {}

    function verifyClaim(
        address _claimer,
        uint256 _tokenId,
        uint256 _quantity
    ) public view override {
        require(_tokenId ==0 ,"Only squiters are allowed");
        require(_quantity ==1 ,"only 1 tortoise is claimable");
    }

    function evolve () public{
        _burn(msg.sender, 0 , 2); // burning two sq
        _mint(msg.sender, 1, 1 ,""); // minting 1 tortoise _mint(sender's address, token_id, no ,custom msg)


    }
}