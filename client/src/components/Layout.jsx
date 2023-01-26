import React from 'react';
import {Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Outlet, useLocation} from "react-router";

const pages = ["users", "teams", 'ligas']
const Layout = () => {
    const location = useLocation()

    return (
        <>
            <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} alignItems={'center'}
                   justifyContent={"center"} gap={10} width={'100vw'}>
                {
                    pages.map(page =>
                        <Link to={page} key={page}>
                            <Typography fontSize={22} textTransform={'capitalize'}
                                        sx={{textDecoration: location.pathname === '/' + page ? "underline" : 'none'}}>
                                {page}
                            </Typography></Link>
                    )
                }


            </Stack>
            <Outlet/>
        </>

    );
};

export default Layout;