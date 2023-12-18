//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

contract carpooling_sign_up_rider {
    string private username;
    uint256 private contact;
    string private password;
    address private user_address;
    mapping(string => address) public Rider_to_address;
    mapping(string => uint256) public Rider_to_contact;
    mapping(string => string) public Username_to_Password;

    event Sign_up_rider_successfuly(address rider);
    event Log_in_rider_successfuly(address rider);

    function Sign_up_rider(
        string memory _username,
        uint256 _contact,
        string memory _password
    ) public {
        username = _username;
        user_address = msg.sender;
        contact = _contact;
        password = _password;
        Rider_to_address[username] = user_address;
        Rider_to_contact[username] = contact;
        Username_to_Password[username] = password;

        emit Sign_up_rider_successfuly(msg.sender);
    }

    //have to catch all these events to move t o next page.

    function Log_in_rider(
        string memory _username,
        string memory _password
    ) public {
        require(
            bytes(Username_to_Password[_username]).length > 0,
            "Username does not exist"
        );

        string memory password1 = Username_to_Password[_username];
        require(
            keccak256(bytes(password1)) == keccak256(bytes(_password)),
            "Wrong Username or Password."
        );
        emit Log_in_rider_successfuly(msg.sender);
    }
    //Used keccak256 to compare the hashed values of passwords for security reasons.
}
