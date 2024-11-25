import React from "react";
import underConstruction from "../../public/Photos/underConstruction.jpg";

function AccountClient() {
  return (
    <div className="h-screen w-full bg-[#08a49c] flex justify-center items-center">
      <img
        src={underConstruction}
        alt="Under Construction"
        className="max-w-full h-screen pt-20 self-center"
      />
    </div>
  );
}

export default AccountClient;
