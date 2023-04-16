import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

//icon import
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

interface Props {

}

const menu = [
    {
        index: "main",
        id: "menu-1",
        subMenu: [{
            title: "dashboard",
            Icon: DashboardIcon,
            path: "/"
        }]
    },
    {
        index: "lists",
        id: "menu-2",
        subMenu: [{
            title: "user",
            Icon: PersonOutlineIcon,
            path: "/users"
        },
        {
            title: "product",
            Icon: StoreIcon,
            path: "/products"
        },
        {
            title: "orders",
            Icon: CreditCardIcon,
            path: "/"
        },
        {
            title: "delivery",
            Icon: LocalShippingIcon,
            path: "/"
        }]
    },
    {
        index: "useful",
        id: "menu-3",
        subMenu: [{
            title: "stats",
            Icon: InsertChartIcon,
            path: "/"
        },
        {
            title: "notification",
            Icon: NotificationsNoneIcon,
            path: "/"
        }]
    },
    {
        index: "service",
        id: "menu-4",
        subMenu: [{
            title: "system health",
            Icon: SettingsSystemDaydreamIcon,
            path: "/"
        },
        {
            title: "logs",
            Icon: PsychologyOutlinedIcon,
            path: "/"
        },
        {
            title: "settings",
            Icon: DashboardIcon,
            path: "/"
        }]
    },
    {
        index: "service",
        id: "menu-5",
        subMenu: [{
            title: "profile",
            Icon: AccountCircleOutlinedIcon,
            path: ""
        },
        {
            title: "logout",
            Icon: ExitToAppOutlinedIcon,
            path: ""
        }]
    },
]

const colorPick = [
    {
        id: "color-pick-1",
        value: "whitesmoke"
    },
    {
        id: "color-pick-2",
        value: "#333"
    }
]


const SidebarMain = styled.div`
    /* background-color: lightcoral; */
    flex: 1;
    border-right: 0.5px solid rgba(230,277,277);
    min-height: 100vh;
    background-color: white;
`

const Top = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Bottom = styled.div`

    display: flex;
    align-items: center;
    margin: 10px;

`
const Center = styled.div`
    padding-left: 10px;
`
const Line = styled.hr`
    height: 0;
    border: 0.5px solid rgba(230,277,277);
    padding: 0px;
    margin: 0;
`
const Logo = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #6439ff;
`

const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const Li = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
`

const Title = styled.p`
    padding: 0;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 10px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
`

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #7451f8;
`

const SubTitle = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #666;
    margin-left: 10px;
    text-transform: capitalize;
`

interface ColorOptProps {
    background: string;
}

const ColorOpt = styled.div<ColorOptProps>`
    width: 20px;
    height: 20px;
    background-color: ${p => p.background};
    border-radius: 5px;
    border: 1px solid #7451f8;
    cursor: pointer;
    margin: 5px;
`

const LinkStyled = styled(Link)`
    text-decoration: none;
`

const Sidebar: React.FC<Props> = () => {
    return (
        <SidebarMain>
            <Top>
                <Logo>
                    Redo
                </Logo>
            </Top>
            <Line />
            <Center>
                <h1>list</h1>
                <Ul>
                    {menu.map(({ index, id, subMenu }) =>
                        <React.Fragment key={id}>
                            <Title>{index}</Title>
                            {subMenu.map(({ title, Icon, path }, id) =>
                                <LinkStyled to={path}>
                                    <Li key={id}>
                                        <IconContainer>
                                            <Icon style={{ fontSize: "inherit" }} color='inherit' />
                                        </IconContainer>
                                        <SubTitle>{title}</SubTitle>
                                    </Li>
                                </LinkStyled>)}
                        </React.Fragment>)}
                </Ul>
            </Center>
            <Bottom>
                {colorPick.map(({ id, value }) =>
                    <ColorOpt key={id} background={value} />
                )}
            </Bottom>
        </SidebarMain>
    )
}

Sidebar.propTypes = {}

export default Sidebar