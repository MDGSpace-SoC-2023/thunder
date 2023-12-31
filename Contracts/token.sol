//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import {ERC20} from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract Hydro is ERC20{
address owner;


constructor() ERC20("Hydro", "HD"){
owner = msg.sender;
}
Hydro.balanceOf(address ab) public view virtual returns (uint256) {
        return _balances[ab];
    }
}