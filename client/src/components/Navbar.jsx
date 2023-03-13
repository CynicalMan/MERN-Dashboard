import { useState } from "react"
import { 
    LightModeOutlined, 
    DarkModeOutlined, 
    Menu as MenuIcon, 
    Search, 
    SettingsOutlined, 
    ArrowDropDownOutlined 
} from "@mui/icons-material"
import { setMode } from "state"
import { useDispatch } from "react-redux"
import { useTheme } from "@emotion/react" 

import FlexBetween from "./FlexBetween"

import profileImage from "assets/profile.jpeg"
import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material'

const Navbar = () => {
    const dispatch = useDispatch()
    const theme = useTheme()

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none"
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "space-between"
                }}
            >
                {/* {LEFT SIDE} */}
                <FlexBetween>
                    <IconButton 
                        aria-label="open/close sidebar" 
                        onClick={() => console.log('open/close sidebar')}
                    >
                        <MenuIcon />
                    </IconButton>
                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        borderRadius="9px"
                        gap="3rem"
                        p="0.1rem 1.5rem"
                    >
                        <InputBase placeholder="Search..." />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>

                {/* {RIGHT SIDE} */}
                <FlexBetween gap="1.5rem">
                    <IconButton 
                        aria-label="Change Mode" 
                        onClick={() => dispatch(setMode())}
                    >
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlined sx={{ fontSize: "25px" }} />
                        ) : (
                            <LightModeOutlined sx={{ fontSize: "25px" }} />
                        )}
                    </IconButton>
                    <IconButton 
                        aria-label="Mode Settings" 
                    >
                        <SettingsOutlined sx={{ fontSize: "25px" }} />
                    </IconButton>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
