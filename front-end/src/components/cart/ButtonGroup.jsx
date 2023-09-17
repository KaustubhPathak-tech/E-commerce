import { Button, ButtonGroup, styled } from "@mui/material";
import { useEffect } from "react";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const GroupedButton = ({ cartQty }) => {
  const handleDecrease =()=>{

  }
  const handleIncrease =()=>{
    
  }
  return (
    <Component>
      <StyledButton onClick={handleDecrease}>-</StyledButton>
      <StyledButton>{cartQty}</StyledButton>
      <StyledButton onClick={handleIncrease}>+</StyledButton>
    </Component>
  );
};

export default GroupedButton;
