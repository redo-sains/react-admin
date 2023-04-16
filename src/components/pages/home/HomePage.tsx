import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/chart'
import Table from '../../components/table/Table'


interface Props {

}

const Home = styled.div`
    display: flex;
`

const Container = styled.div`
    /* background-color: lightblue; */
    flex: 6;
`

const Widgets = styled.div`
    
    display: flex;
    padding: 20px;
    gap: 20px;
`

const Charts = styled.div`
    
    display: flex;
    padding: 20px;
    gap: 20px;
    padding: 5px 20px;
`

const ListContainer = styled.div`
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    -webkit-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    margin: 20px;
    
`

const ListTitle = styled.div`
    font-weight: 500;
    color: gray;
    margin-bottom: 15px;
`

const data = [
    {
        title: "user",
        isMoney: false,
        link: "see all users",
        Icon: PersonOutlineIcon,
        style: {
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)"
        }
    },
    {
        title: "orders",
        isMoney: false,
        link: "view all orders",
        Icon: ShoppingCartOutlinedIcon,
        style: {
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)"
        }
    },
    {
        title: "earning",
        isMoney: true,
        link: "view net earning",
        Icon: MonetizationOnOutlinedIcon,
        style: {
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)"
        }
    },
    {
        title: "balance",
        isMoney: true,
        link: "see details",
        Icon: AccountBalanceWalletOutlinedIcon,
        style: {
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)"
        }
    },
]

const HomePage: React.FC<Props> = () => {
    return (
        <Home>
            <Sidebar />
            <Container>
                <Navbar />
                <Widgets>
                    {data.map(data => <Widget key={data.title} data={data} />)}
                </Widgets>
                <Charts>
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </Charts>
                <ListContainer>
                    <ListTitle>Latest Transaction</ListTitle>
                    <Table />
                </ListContainer>
            </Container>
        </Home>
    )
}

HomePage.propTypes = {}

export default HomePage