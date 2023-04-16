import React from 'react'
import styled from 'styled-components'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
    aspect: number
    title: string
}

const Main = styled.div`
    flex: 4;
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    -webkit-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    color: gray;
`

const Title = styled.div`
    margin-bottom: 20px;
`

const Cartesian = styled(CartesianGrid)`
    stroke: rgba(228, 225, 225, 1) !important;
`

const data = [
    { name: "January", Total: 1200 },
    { name: "Febuary", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
];

const Chart: React.FC<Props> = ({ aspect, title }) => {



    return (
        <Main>
            <Title>{title}</Title>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>

                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <YAxis />
                    <Cartesian strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

                </AreaChart>
            </ResponsiveContainer>
        </Main>
    )
}

Chart.propTypes = {}

export default Chart