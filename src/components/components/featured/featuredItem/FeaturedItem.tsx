
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


type PercentType = "positive" | "negative";

interface Props {
    status: PercentType,
    title: string,
    ammount: string
}

interface ItemResProps {
    status: PercentType,
}

const Item = styled.div`
    text-align: center;
`

const ItemTitle = styled.div`
    font-size: 14px;
    color: gray;

`

const ItemRes = styled.div<ItemResProps>`
    
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
    color: ${p => p.status == "positive" ? "green" : "red"};    

`

const ResAmmount = styled.div`
    
`



const ArrowDown = styled(KeyboardArrowDownIcon)`
    
`

const ArrowUp = styled(KeyboardArrowUpIcon)`
    
`

const FeaturedItem: React.FC<Props> = (props) => {
    return (
        <Item>
            <ItemTitle>{props.title}</ItemTitle>
            <ItemRes status={props.status}>
                {(props.status as PercentType) == "positive" ? <ArrowUp /> : <ArrowDown />}

                <ResAmmount>${props.ammount}</ResAmmount>
            </ItemRes>
        </Item>
    )
}

FeaturedItem.propTypes = {}

export default FeaturedItem