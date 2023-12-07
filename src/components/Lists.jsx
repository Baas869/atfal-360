// import AtfalDatabase from '../Data/AtfalDatabase';
import AtfalDataContext from '../Data/AtfalData'

import { useMemo, useState, useEffect, useContext } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

//data must be stable reference (useState, useMemo, useQuery, defined outside of component, etc.)
// const data = AtfalDatabase
// console.log(atfalDatas)
// const data = [
//   {
//     name: 'John',
//     age: 30,
//   },
//   {
//     name: 'Sara',
//     age: 25,
//   },
// ]

export default function Lists() {
  const {atfalFeedback} = useContext(AtfalDataContext)
  const data = atfalFeedback

  const columns = useMemo(
    () => [
      {
        accessorKey: 'full_name', //simple recommended way to define a column
        header: 'Name',
        muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'region', //simple recommended way to define a column
        header: 'Region',
        muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'state', //simple recommended way to define a column
        header: 'State',
        muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'dila', //simple recommended way to define a column
        header: 'Dila',
        muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'muqami', //simple recommended way to define a column
        header: 'Muqami',
        muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      // {
      //   accessorFn: (row) => row.age, //alternate way
      //   id: 'age', //id required if you use accessorFn instead of accessorKey
      //   header: 'Age',
      //   Header: () => <i>Age</i>, //optional custom header render
      // },
    ],
    [],
  );

  //optionally, you can manage any/all of the table state yourself
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    //do something when the row selection changes
  }, [rowSelection]);

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true, //enable some features
    enableRowSelection: true,
    enablePagination: true, //disable a default feature
    enableColumnDragging: false,
    enableFullScreenToggle: false,
    onRowSelectionChange: setRowSelection, //hoist internal state to your own state (optional)
    state: { rowSelection }, //manage your own state, pass it back to the table (optional)
    // exportButton: true,
  });

  const someEventHandler = () => {
    //read the table state during an event from the table instance
    console.log(table.getState().sorting);
  }

  return (
    <MaterialReactTable table={table} /> //other more lightweight MRT sub components also available
  );
}