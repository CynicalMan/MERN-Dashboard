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
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton, 
    InputBase,
    Menu,
    Button,
    Box,
    MenuItem 
} from '@mui/material'

const Navbar = ({
    user,
    isSideBarOpen,
    setIsSideBarOpen
}) => {
    const dispatch = useDispatch()
    const theme = useTheme()

    const [anchorEl,setAnchorEl] = useState(null)
    const isMenuOpen = Boolean(anchorEl)
    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

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
                        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
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

                    <FlexBetween
                    
                    >
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textTransform: "none",
                                gap: "1rem"
                            }}
                        >
                            <Box
                                component="img"
                                alt="profile"
                                src={profileImage}
                                height="32px"
                                width="32px"
                                borderRadius="50%"
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign="left">
                                <Typography
                                    fontWeight="bold"
                                    fontSize="0.85rem"
                                    sx={{ color: theme.palette.secondary[100] }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    fontSize="0.75rem"
                                    sx={{ color: theme.palette.secondary[200] }}
                                >
                                    {user.occupation}
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined 
                                sx={{
                                    color: theme.palette.secondary[300], fontSize: "25px"
                                }}
                            />
                        </Button>

                        <Menu
                            anchorEl={anchorEl}
                            open={isMenuOpen}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizental: "center"
                            }}
                        >
                            <MenuItem
                                onClick={handleClose}
                            >
                                Log Out
                            </MenuItem>
                        </Menu>
                    </FlexBetween>

                </FlexBetween>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
