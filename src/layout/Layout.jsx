import { Box, Link } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';

export default function Layout() {
  return (
    <>
        <div>Layout</div>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '1',

            }} 

        >
            <Box
                sx={{
                    flexShrink: 0,
                    width: '10%',
                }}
            >
                <Link component={RouterLink} to="/">
                    Home
                </Link>
                <Link component={RouterLink} to="/">
                    asdf
                </Link>

            </Box>

            <Outlet />

        </Box>
    </>

  )
}
