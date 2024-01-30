//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import {ERC20} from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract Hydro is ERC20{
address owner;


constructor() ERC20("Hydro", "HD"){
owner = msg.sender;
}
    function balanceOf(address account) public view override returns (uint256) {
        return balanceOf(account);
    }
}
    // function balanceOf(address account) public view virtual returns (uint256) {
    //     return _balances[account];
    // }