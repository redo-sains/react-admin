import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

interface Props {

}

const Main = styled.div`
    display: flex;
    width: 100%;
`

const ListCont = styled.div`
    flex: 6;
`


const ListPage: React.FC<Props> = () => {
    return (
        <Main>
            <Sidebar />
            <ListCont>
                <Navbar />
                <Datatable />
            </ListCont>
        </Main>
    )
}

ListPage.propTypes = {}

export default ListPage