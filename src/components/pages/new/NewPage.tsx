import React, { useState } from 'react'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import styled from 'styled-components';

interface Props {
    title: string,
    inputs: {
        id: number,
        label: string,
        type: string,
        placeholder?: string,
    }[],
}

const Main = styled.div`
    width: 100%;
    display: flex;
`

const NewContainer = styled.div`
    flex: 6;
`
const H1 = styled.h1`
    color: lightgray;
    font-size: 20px;
`

const Left = styled.div`
    flex: 1;
    text-align: center;
`

const Right = styled.div`
    flex: 2;
`

const FormInput = styled.div`
    width: 40%;
`

const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-around;
`

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Input = styled.input`
    width: 100%;
    padding: 5px;
    border: none;
    border-bottom: 1px solid gray;
`

const Button = styled.button`
    width: 150px;
    padding: 10px;
    border: none;
    background-color: teal;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
`

const Top = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px 10px;
    margin: 20px;
    display: flex;
`;

const Bottom = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 40px 10px;
    margin: 20px;
    display: flex;
`


const NewPage: React.FC<Props> = ({ inputs, title }) => {
    const [file, setFile]: any = useState("");
    return (
        <Main>
            <Sidebar />
            <NewContainer className="newContainer">
                <Navbar />
                <Top className="top">
                    <H1>{title}</H1>
                </Top>
                <Bottom className="bottom">
                    <Left className="left">
                        <Img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </Left>
                    <Right className="right">
                        <Form>
                            <FormInput className="formInput">
                                <Label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </Label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files !== null && e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </FormInput>
                            {inputs.map((input) => (
                                <FormInput className="formInput" key={input.id}>
                                    <Label>{input.label}</Label>
                                    <Input type={input.type} placeholder={input.placeholder} />
                                </FormInput>
                            ))}
                            <Button>Send</Button>
                        </Form>
                    </Right>
                </Bottom>
            </NewContainer>
        </Main>
    )
}

NewPage.propTypes = {}

export default NewPage