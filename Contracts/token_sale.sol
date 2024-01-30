//it is example contract 



pragma solidity ^0.8.0;

import "./YourToken.sol"; // Import your ERC-20 token contract

contract TokenSale {
    address public admin;
    YourToken public tokenContract;
    uint256 public tokenPrice;

    constructor(YourToken _tokenContract, uint256 _tokenPrice) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function buyTokens(uint256 numberOfTokens) public payable {
        require(msg.value == numberOfTokens * tokenPrice, "Incorrect amount of Ether sent");

        // Perform the token transfer
        tokenContract.transfer(msg.sender, numberOfTokens);
    }
}





////////////////////////////////////////////////////////

If you want to fix the value of your ERC-20 token and control it through a custom mechanism, you can create a function within your smart contract that allows you to set or adjust the price rate of your token. This way, you have more control over the token's value relative to another asset, such as a stablecoin or fiat currency.

Here's a simple example of how you might implement a function to set the price rate in a Solidity smart contract:

solidity
Copy code
// MyToken.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    uint256 private _priceRate;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _priceRate = 1; // Initial price rate, you can set it to any value
    }

    // Function to get the current price rate
    function getPriceRate() external view returns (uint256) {
        return _priceRate;
    }

    // Function to set the price rate, only callable by the owner
    function setPriceRate(uint256 newRate) external onlyOwner {
        _priceRate = newRate;
    }

    // Override transfer function to adjust the amount based on the price rate
    function _transfer(address sender, address recipient, uint256 amount) internal override {
        uint256 adjustedAmount = amount * _priceRate;
        super._transfer(sender, recipient, adjustedAmount);
    }
}