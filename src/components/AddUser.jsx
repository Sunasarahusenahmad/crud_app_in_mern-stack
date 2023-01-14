import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 32%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); // ...user iska matlab purani vali value rahegi for exa : h, u, s, matlab 'h' , 'u', 's' sab ek input me rahenge (...user vo useState vala user he)
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all"); // iska meaning hame add user karne ke baad direct all user show karva dega :) 
  };

  return (
    <>
      <Container>
        <Typography variant="h4"> Add User </Typography>
        <FormControl>
          <InputLabel> Name </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel> Username </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel> Email </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel> Phone </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => addUserDetails()}>
            Add user
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddUser;
