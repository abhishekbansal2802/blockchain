// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people;

    function store(uint256 _number) public {
        favoriteNumber = _number;
    }

    function give() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPeople(string memory _name, uint256 _number) public {
        people.push(People(_number, _name));
    }
}
