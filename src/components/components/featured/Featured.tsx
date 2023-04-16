import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import { MoreVert } from '@mui/icons-material'
import FeaturedItem from './featuredItem/FeaturedItem';


interface Props {

}

type PercentType = "positive" | "negative";

interface ItemResProps {
    status: PercentType
}

const Main = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    -webkit-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gray;
`

const FeaturedChart = styled.div`
    width: 100px;
    height: 100px;
`

const Bottom = styled.div`
    padding: 20px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
`
const TopTitle = styled.h1`
    font-size: 16px;
    font-weight: 500;
`

const BotTitle = styled.p`
    color: gray;
    font-weight: 500;
`

const Amount = styled.p`
    font-size: 30px;    
`

const Desc = styled.p`
    font-weight: 300;
    color: gray;
    font-size: 12px;
    text-align: center;
`

const Summary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const MoreVertIcon = styled(MoreVert)`
    
`

const data: {
    title: string,
    ammount: string,
    status: PercentType,
}[] = [
        {
            title: "Target",
            ammount: "12.4K",
            status: "negative"
        },
        {
            title: "Last Week",
            ammount: "12.4K",
            status: "positive",
        },
        {
            title: "Last Month",
            ammount: "12.4K",
            status: "positive"
        }
    ]

const Featured: React.FC<Props> = () => {


    return (
        <Main>
            <Top>
                <TopTitle>
                    Total Revenue
                </TopTitle>
                <MoreVertIcon />
            </Top>
            <Bottom>
                <FeaturedChart>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />

                </FeaturedChart>
                <BotTitle>Total sales made today</BotTitle>
                <Amount>$420</Amount>
                <Desc>Previous transactions processing. Last payment may not be included.</Desc>
                <Summary>
                    {data.map(({ title, ammount, status }) => {
                        return <FeaturedItem title={title} ammount={ammount} status={status}></FeaturedItem>
                    })
                    }
                </Summary>
            </Bottom>
        </Main>
    )
}

Featured.propTypes = {}

export default Featured