import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface Props {
    data: Dataprops
}

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    flex: 1;
    padding: 10px;
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    -webkit-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius:10px;
    height: 100px;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.span`
    
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    color: rgba(160,160,160,1);

`

const Counter = styled.span`
    font-size: 28px;
    font-weight: 300;
`

const Link = styled.span`
    font-size: 12px;
    border-bottom: 1px solid gray;
    width: max-content;    
`

interface PercentProps {
    status: PercentType
}

type PercentType = "positive" | "negative";

const Percentage = styled.span<PercentProps>`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${p => p.status == "positive" ? "green" : "red"};    
`

interface Dataprops {
    title: string,
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    },
    link: string,
    isMoney: boolean,
    style: object
}


const Widget: React.FC<Props> = ({ data }) => {
    const { title, Icon, link, isMoney, style }: Dataprops = data;

    const IconComp = styled(Icon)`
    font-size: 18px !important;
    padding: 5px;
    /* background-color: rgba(128,0,128,0.541); */
    border-radius: 5px;
    margin: 0;
    align-self: flex-end;
    
`

    const ammount: number = 100;
    const diff: number = 100;

    let status: PercentType;
    status = 'positive'

    return (
        <Main>
            <Left>
                <Title>{title}</Title>
                <Counter>{isMoney && "$"}{ammount}</Counter>
                <Link>{link.charAt(0).toUpperCase() + link.slice(1)}</Link>
            </Left>
            <Right>
                <Percentage status={status} >
                    {(status as PercentType) == "positive" ? < KeyboardArrowUpIcon /> : < KeyboardArrowDownIcon />}
                    {diff} %
                </Percentage>
                <IconComp style={style} />
            </Right>
        </Main>
    )
}

Widget.propTypes = {}

export default Widget