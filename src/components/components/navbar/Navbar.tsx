import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

interface Props {

}

const ItemContent = [
    {
        id: 'item-content-1',
        title: "english",
        Icons: LanguageOutlinedIcon
    },
    {
        id: 'item-content-2',
        Icons: DarkModeOutlinedIcon
    },
    {
        id: 'item-content-3',
        Icons: NotificationsNoneOutlinedIcon,
        count: 1
    },
    {
        id: 'item-content-4',
        Icons: ChatBubbleOutlineOutlinedIcon,
        count: 1
    },
    {
        id: 'item-content-5',

        Icons: ListOutlinedIcon
    },

]

const Main = styled.div`
    height : 50px;
    border-bottom: 0.5px solid rgba(230,277,277);
    display: flex;
    align-items: center;
    font-size:14px;
    color: #555;

`

const Wrapper = styled.div`

    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: rebeccapurple; */
    width:100%;

`

const Search = styled.div`

    display: flex;
    align-items: center;
    border: 0.5px solid lightgray;
    padding: 3px;

`

const Item = styled.div`
position: relative;
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`
const Items = styled.div`

    display: flex;
    align-items: center;    
`

const Input = styled.input`
    border: none;
    outline: none;
    background: "transparent";

    &::placeholder{
        font-size: 12px;
    }
`

const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const Bubble = styled.span`

    position: absolute;
    background-color: red;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right:0;
    border-radius: 50%;
    transform: translate(40%, -40%);
    font-size: 10px;
    color: white;

`

const Title = styled.p`
    text-transform: capitalize;
`


const Navbar: React.FC<Props> = () => {
    return (
        <Main>
            <Wrapper>
                <Search>
                    <Input placeholder="Search" />
                    <SearchOutlinedIcon />
                </Search>
                <Items>
                    {ItemContent.map(({ title, id, Icons, count }) => {



                        return <Item key={id} >

                            <Icons style={{ fontSize: "20px" }} />
                            {count && <Bubble>{count}</Bubble>}
                            {title && <Title>{title}</Title>}
                        </Item>
                    })}
                    <Item >
                        <Avatar alt="Avatar" src='https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png' />
                    </Item>
                </Items>
            </Wrapper >
        </Main>
    )
}

Navbar.propTypes = {}

export default Navbar