import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";


const Main = styled.div`
  height: 80vh;
  padding: 20px;    
`

const DatatableTitle = styled.div`
    width: 100%;
    font-size: 24px;
    color: gray;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LinkStyled = styled(Link)`
      text-decoration: none;
      color: green;
      font-size: 16px;
      font-weight: 400;
      border: 1px solid green;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
`

const CellAction = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

const ViewButton = styled.div`
    padding: 2px 5px;
      border-radius: 5px;
      color: darkblue;
      border: 1px dotted rgba(0, 0, 139, 0.596);
      cursor: pointer;
`

const DeleteButton = styled.div`
    padding: 2px 5px;
      border-radius: 5px;
      color: crimson;
      border: 1px dotted rgba(220, 20, 60, 0.6);
      cursor: pointer;
`

const Datagrid = styled(DataGrid)`

color: gray;
      border: none;
      
`

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number): void => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      minWidth: 200,
      renderCell: (params: any) => {
        return (
          <CellAction>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <ViewButton className="viewButton">View</ViewButton>
            </Link>
            <DeleteButton
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </DeleteButton>
          </CellAction>
        );
      },
    },
  ];
  return (
    <Main>
      <DatatableTitle>
        Add New User
        <LinkStyled to="/users/new">
          Add New
        </LinkStyled>
      </DatatableTitle>
      <Datagrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </Main>
  );
};

export default Datatable;
