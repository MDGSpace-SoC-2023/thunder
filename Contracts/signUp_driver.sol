//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

contract carpooling_sign_up_driver {
    string private username;
    uint256 private contact;
    string private password;
    string private vehicle_no;
    address private user_address;
    mapping(string => address) public Driver_to_address;
    mapping(string => uint256) public Driver_to_contact;
    mapping(string => string) public Username_to_Password;
    mapping(string => string) public Username_to_Vehicle;
    event Sign_up_driver_successfuly(address driver);
    event Log_in_driver_successfuly(address driver);

    function Sign_up_driver(
        string memory _username,
        uint256 _contact,
        string memory _password,
        string memory _vehicle_no
    ) public {
        username = _username;
        user_address = msg.sender;
        contact = _contact;
        password = _password;
        vehicle_no = _vehicle_no;
        Driver_to_address[username] = user_address;
        Driver_to_contact[username] = contact;
        Username_to_Password[username] = password;

        emit Sign_up_driver_successfuly(msg.sender);
    }

    //have to catch all these events to move t o next page.

    function Log_in_driver(
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
        emit Log_in_driver_successfuly(msg.sender);
    }
    //Used keccak256 to compare the hashed values of passwords for security reasons.
}
