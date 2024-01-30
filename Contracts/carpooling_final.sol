//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import{Hydro} from "./token.sol"; 


contract carpooling {
    address admin;
    uint256 tokenPrice;
    string private r_username;
    uint256 private r_contact;
    string private r_password;
    address private r_user_address;
    Hydro public tokenContract;
    mapping(address => string) public Rider_to_name;
    mapping(address => uint256) public Rider_to_contact;
    mapping(address => uint256) public Rider_to_amount;
    mapping(address => string) public Rider_to_Password;

    event Sign_up_rider_successfuly(address rider);
    event Log_in_rider_successfuly(address rider);
    event transfer_tokens_successfuly(address rider);
    event Ride_has_been_booked(address rider);
    event Ride_has_been_cancelled(address rider);

    constructor() {
        admin = msg.sender;
        tokenContract = new Hydro();
        tokenPrice = 1 ;
    }

    function Sign_up_rider(
        string memory _username,
        uint256 _contact,
        string memory _password
    ) public {
        r_username = _username;
        r_user_address = msg.sender;
        r_contact = _contact;
        r_password = _password;
        Rider_to_name[r_user_address] = r_username;
        Rider_to_contact[r_user_address] = r_contact;
        Rider_to_Password[r_user_address] = r_password;

        emit Sign_up_rider_successfuly(msg.sender);
    }

    //have to catch all these events to move t o next page.

    function Log_in_rider(
        string memory _username,
        string memory _password
    ) public {
        require(
            bytes(Rider_to_Password[msg.sender]).length > 0,
            "Username does not exist"
        );

        string memory password1 = Rider_to_Password[msg.sender];
        require(
            keccak256(bytes(password1)) == keccak256(bytes(_password)),
            "Wrong Username or Password."
        );
        emit Log_in_rider_successfuly(msg.sender);
    }
    //Used keccak256 to compare the hashed values of passwords for security reasons.
    
    function buyTokens(uint256 numberOfTokens) public payable {
        require(msg.value >= 0/*numberOfTokens * tokenPrice*/, "Incorrect amount sent");

        // Perform the token transfer
        tokenContract.transfer(msg.sender, numberOfTokens);
        Rider_to_amount[msg.sender] += numberOfTokens; 
        emit transfer_tokens_successfuly(msg.sender);
    }
    
    function getRiderInfo(address r_person) public view returns (string memory, uint256, uint256) {
        string memory username = Rider_to_name[r_person];
        uint256 contact = Rider_to_contact[r_person];
        uint256 amount = Rider_to_amount[r_person];
        return (username, contact, amount);
    }
    function ride_booking(uint256 fare) public returns(uint256 OTP) { // will get this fare from backend
         require(Rider_to_amount[msg.sender] >= fare, "Insufficient balance");
         Rider_to_amount[msg.sender] -= fare;
         emit Ride_has_been_booked(msg.sender);
         return 1  ;// generateOTP();
         
    }
    //                                                                                                         //
        /////////////////////////////////////////////    Driver     ////////////////////////////////////////
    //                                                                                                         //
     string private d_username;
    uint256 private d_contact;
    string private d_password;
    string private d_vehicle_no;
    address private d_user_address;
    mapping(address => string) public Driver_to_address;
    mapping(address => uint256) public Driver_to_contact;
    mapping(address => string) public Driver_to_Password;
    mapping(address => string) public Driver_to_Vehicle;
    mapping(address => uint256) public Driver_to_amount;
    event Sign_up_driver_successfuly(address driver);
    event Log_in_driver_successfuly(address driver);

    function Sign_up_driver(
        string memory _username,
        uint256 _contact,
        string memory _password,
        string memory _vehicle_no
    ) public {
        d_username = _username;
        d_user_address = msg.sender;
        d_contact = _contact;
        d_password = _password;
        d_vehicle_no = _vehicle_no;
        Driver_to_address[d_user_address] = d_username;
        Driver_to_contact[d_user_address] = d_contact;
        Driver_to_Password[d_user_address] = d_password;

        emit Sign_up_driver_successfuly(msg.sender);
    }

    //have to catch all these events to move to next page.

    function Log_in_driver(
        string memory _username,
        string memory _password
    ) public {
        require(
            bytes(Driver_to_Password[msg.sender]).length > 0,
            "Username does not exist"
        );

        string memory password1 = Driver_to_Password[msg.sender];
        require(
            keccak256(bytes(password1)) == keccak256(bytes(_password)),
            "Wrong Username or Password."
        );
        emit Log_in_driver_successfuly(msg.sender);
    }
    function Ride_complete_rider(uint256 fare) public {
     Driver_to_amount[msg.sender] += fare;
    }
    
    function Driver_info(address d_person) public view returns(string memory, uint256, uint256) {
        string memory username = Driver_to_address[d_person];
        uint256 contact = Driver_to_contact[d_person];
        uint256 amount = Driver_to_amount[d_person];
        return (username, contact, amount);
        
    }
}





