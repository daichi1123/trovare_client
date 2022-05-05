import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { PrimaryButton } from "./PrimaryButton";

const SubmitButton = () => {
  return (
    <>
    <PrimaryButton
      icon={<AddIcon />}
      type="submit"
    >
      Submit
    </PrimaryButton>
    </>
  );
};

export default SubmitButton;
