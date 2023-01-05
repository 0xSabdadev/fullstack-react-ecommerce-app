import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Badge, Box, IconButton, Menu} from '@mui/material'
import {PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined} from '@mui/icons-material'
import {shades} from '../../theme'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <Box
            display='flex'
            alignItems='center'
            width='100%'
            height='60px'
            backgroundColor='rgba(255,255,255,0.95)'
            color='black'
            position='fixed'
            top='0'
            left='0'
            zIndex='1'>
            <Box
                onClick={() => navigate('/')}
                sx={{'&:hover': {cursor: 'pointer'}}}
                color={shades.secondary[500]}>
                ECOMMER
            </Box>
            <Box display='flex' justifyContent='space-between' columnGap='20px' zIndex='2'>
                <IconButton sc={{color: 'black'}}>
                    <SearchOutlined />
                </IconButton>
                <IconButton sc={{color: 'black'}}>
                    <PersonOutline />
                </IconButton>
                <IconButton sc={{color: 'black'}}>
                    <ShoppingBagOutlined />
                </IconButton>
                <IconButton sc={{color: 'black'}}>
                    <MenuOutlined />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Navbar
