import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { getUsers, deleteUser } from "../service/api";

const StyledTable = styled(Table)`
  width: 70%;
  margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
  background: #e7e7e7;
  & > th {
    color: black;
    font-size: 17px;
    font-weight: bold;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 15px;
  }
`;

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const deleteUserDetails = async (id) => {
     await deleteUser(id);
     getAllUsers();
  }

  return (
    <>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users.map((husen) => (
            <TBody>
              <TableCell>{husen._id}</TableCell>
              <TableCell>{husen.name}</TableCell>
              <TableCell>{husen.username}</TableCell>
              <TableCell>{husen.email}</TableCell>
              <TableCell>{husen.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edit/${husen._id}`}
                >
                  <CreateIcon />
                </Button>
                <Button 
                  variant="contained"
                  style={{ backgroundColor: "#DA0000" }}
                  onClick={() => deleteUserDetails(husen._id) }
                >
                  <DeleteForeverIcon />
                </Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default AllUser;
