import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import type { Users } from "../shared/models/User.model";
import { createUser } from "../data/http.service";

const Create = () => {

const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
}=useForm<Users>();
const onsubmit=async(userData:Users)=>{
console.log(userData)
await createUser(userData)
}
    return (
        <>
            <section className="flex justify-center items-center">
                <form onSubmit={handleSubmit(onsubmit)} className="border border-blue-400 rounded-md p-5 m-5 w-[50%]">
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>

                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">
                                    <TextField {...register('name',{required:"name is required",minLength:5,maxLength:20})} className="w-full" label="Name" variant="outlined" />
                                    <span className="text-red-500 italic">{errors.name && errors.name.message}  </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Email</TableCell>
                                <TableCell align="right">
                                    <TextField {...register('email',{required:"Email is required"})} className="w-full" label="Email" variant="outlined" />
                                                                        <span className="text-red-500 italic">{errors.email && errors.email.message}  </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Phone</TableCell>
                                <TableCell align="right">
                                    <TextField {...register('phone',{required:"phone is required"})} className="w-full" label="Phone" variant="outlined" />
                                                                        <span className="text-red-500 italic">{errors.phone && errors.phone.message}  </span>

                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Website</TableCell>
                                <TableCell align="right">
                                    <TextField {...register('website',{required:"website required"})} className="w-full" label="Website" variant="outlined" />

                                </TableCell>
                            </TableRow>
                            <TableRow>

                                <TableCell colSpan={2} align="right">
                                    <Button className="mr-5" type="button" variant="outlined" onClick={()=>{reset()}}>Reset Form</Button>
                                    <Button type="submit" variant="outlined"> Create user</Button>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
                </form>
            </section>
        </>
    )
}
export default Create;