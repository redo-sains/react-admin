import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/chart'
import List from '../../components/table/Table'
import styled from "styled-components"

interface Props {

}

const Main = styled.div`
    display: flex;
    width: 100%;
`

const SingleContainer = styled.div`
    flex: 6;
`

const Top = styled.div`
    padding: 20px;
    display: flex;
    gap: 20px;
`

const Left = styled.div`
    flex: 1;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    position: relative;
`

const EditButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    font-size: 12px;
    color: #7451f8;
    background-color: #7551f818;
    cursor: pointer;
    border-radius: 0px 0px 0px 5px;
`

const Title = styled.h1`
    font-size: 16px;
    color: lightgray;
    margin-bottom: 20px;
`

const Item = styled.div`
    display: flex;
    gap: 20px;
`

const ItemImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`

const Details = styled.div`
    
`

const ItemTitle = styled.h1`
    margin-bottom: 10px;
    color: #555;
`

const DetailItem = styled.div`
    margin-bottom: 10px;
    font-size: 14px;
`

const ItemKey = styled.span`
    font-weight: bold;
    color: gray;
    margin-right: 5px;
`

const ItemValue = styled.span`
    font-weight: 300;
`

const Right = styled.div`
    flex: 2;
`

const Bottom = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    margin: 10px 20px;
`




const SinglePage: React.FC<Props> = () => {
    return (
        <Main>
            <Sidebar />
            <SingleContainer >
                <Navbar />
                <Top >
                    <Left >
                        <EditButton >Edit</EditButton>
                        <Title >Information</Title>
                        <Item >
                            <ItemImg
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                            />
                            <Details >
                                <ItemTitle >Jane Doe</ItemTitle>
                                <DetailItem>
                                    <ItemKey >Email:</ItemKey>
                                    <ItemValue >janedoe@gmail.com</ItemValue>
                                </DetailItem>
                                <DetailItem>
                                    <ItemKey >Phone:</ItemKey>
                                    <ItemValue >+1 2345 67 89</ItemValue>
                                </DetailItem>
                                <DetailItem>
                                    <ItemKey >Address:</ItemKey>
                                    <ItemValue >
                                        Elton St. 234 Garden Yd. NewYork
                                    </ItemValue>
                                </DetailItem>
                                <DetailItem>
                                    <ItemKey >Country:</ItemKey>
                                    <ItemValue >USA</ItemValue>
                                </DetailItem>
                            </Details>
                        </Item>
                    </Left>
                    <Right >
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </Right>
                </Top>
                <Bottom >
                    <Title>Last Transactions</Title>
                    <List />
                </Bottom>
            </SingleContainer>
        </Main>
    )
}

SinglePage.propTypes = {}

export default SinglePage