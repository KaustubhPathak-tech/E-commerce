import { useEffect, useState } from "react";

import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { setCurrentUser } from "../../redux/actions/setCurrentUser";
import { useSelector } from "react-redux";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin: 20px;
`;

const Profile = () => {
  const currentuser = useSelector((state) => state.currentuser);
  var user = null;
  if(typeof currentuser==='string'){
    user = JSON.parse(currentuser);
  }
  else{
    user=currentuser;
  }
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    window.location.reload();
    setCurrentUser(null);
    localStorage.clear();
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {user?.data?.firstname}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontsize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
