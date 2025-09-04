import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";

import { getUsers } from "../data/http.service";
import type { Users } from "../shared/models/User.model";
import  {setUserData} from "../shared/slices/UserSlice"

const Grid = () => {
    const navigate=useNavigate()
    const [usersData, setUsersData] = useState<Users[]>([]);
    const dispatch=useDispatch();
    useEffect(() => {
        getUsers().then((data) => setUsersData(data));
    }, []);
    const onViewClick=(user:Users)=>{
        dispatch(setUserData(user))
navigate('/view');
    }
    return (
        <>
        <section className="flex justify-center items-center">
  <TableContainer component={Paper} className="border border-blue-400 rounded-md p-5 m-5 w-[90%]">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Website</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            usersData.map((data, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell align="center">{data.name}</TableCell>
                                        <TableCell align="center">{data.email}</TableCell>
                                        <TableCell align="center">{data.phone}</TableCell>
                                        <TableCell align="center">{data.website}</TableCell>
                                        <TableCell className="flex flex-row justify-center items-center gap-5">
                                        <Button variant="outlined" onClick={()=>onViewClick(data)}>view</Button>
                                        <Button variant="outlined">Update</Button>
                                        <Button variant="outlined">Delete </Button>
                                        </TableCell>

                                    </TableRow>
                                )
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </section>
          
        </>
    );
};
export default Grid;
