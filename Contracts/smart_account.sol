// UserAccount.sol
pragma solidity ^0.8.0;

contract UserAccount {
    address public owner;
    uint256 public frozenFunds;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function freezeFunds(uint256 amount) external onlyOwner {
        frozenFunds += amount;
        // You may want to transfer the funds to this contract or hold them in a separate secure wallet.
    }

    function unfreezeFunds(uint256 amount) external onlyOwner {
        require(amount <= frozenFunds, "Not enough frozen funds");
        frozenFunds -= amount;
        // You may want to transfer the funds back to the user.
    }
}
