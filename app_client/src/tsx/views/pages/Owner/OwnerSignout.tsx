import React from "react";
import { auth } from "../../../../ts/firebase";

const OwnerSignOut = () => {
  return (
    <>
      <button onClick={() => auth.signOut()}>Logout</button>
    </>
  )
}