import React from 'react'
import { useState,useEffect,useContext } from 'react';
import { UserContext } from "../../../context/userContext";

const UserProfile = () => {
    const {user ,setUser} =useContext(UserContext)

  return (
    <div>UserProfile</div>
  )
}

export default UserProfile