import { useState, useContext, useEffect } from "react";

import { Box, Button, Typography, styled, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataContext } from "../../context/DataProvider";

// components

import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { setCurrentUser } from "../../redux/actions/setCurrentUser";
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: "40px !important",
    fontSize: 16,
    alignItems: "center",
  },

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "inherit",
  color: "inherit",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  &:hover {
    background: #fff;
  }
`;

const CustomButtons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentUser(localStorage.getItem("Profile")));
  }, [dispatch]);
  const user = useSelector((state) => state.currentuser);
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const { cartItems } = useSelector((state) => state.cart);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {user ? (
        <Profile />
      ) : (
        <LoginButton variant="outlined" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="error">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
