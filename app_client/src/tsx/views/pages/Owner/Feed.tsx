import React from "react";
import { auth } from "../../../../ts/firebase";

const Feed = () => {
  return (
    <>
      <button onClick={() => auth.signOut()}>Logout</button>
    </>
  );
};

export default Feed;
