import { useEffect, useState} from "react";
import { api } from '../services/api';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Grid,
} from '@mui/material/';


export function ListaPage() {
    const [users, setUsers] = useState<string[]>([]);

    const handleCreate = () => {
        useEffect(() => {
            api.post("/users", {
                avatar: '',
                name: '',
                login: '',
                bio: '',
                location: '',
            }).then((res) => {
                setUsers(users);
            }).catch((err) => {
                console.error("Ops! " + err)
            });
        }, []);
    };

    useEffect(() => {
        api.get("/users").then((res) => {
            setUsers(res.data);

        }).catch((err) => {
            console.error("Ops! " + err)
        });
    }, []);

    return (
        <div>
            <Container component={Paper}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <TableContainer >
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Avatar</TableCell>
                                        <TableCell align="right">Nome</TableCell>
                                        <TableCell align="right">username</TableCell>
                                        <TableCell align="right">Biografia</TableCell>
                                        <TableCell align="right">Localização</TableCell>
                                        <TableCell align="right">Opções</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow
                                            // key={user}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <img width="100" height="100" src={user?.avatar_url} alt="" />
                                            </TableCell>
                                            <TableCell align="right">{user?.name}</TableCell>
                                            <TableCell align="right">{user?.login}</TableCell>
                                            <TableCell align="right">{user?.bio}</TableCell>
                                            <TableCell align="right">{user?.location}</TableCell>
                                            <TableCell align="right">

                                                <div>
                                                    <button onClick={handleCreate}>Novo</button>

                                                </div>
                                                <div>
                                                    <button>Editar</button>
                                                </div>
                                                <div>
                                                    <button>Deletar</button>
                                                </div>


                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

}