// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

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

    function addPeople(uint256 _number, string memory _name) public {
        people.push(People(_number, _name));
    }
}