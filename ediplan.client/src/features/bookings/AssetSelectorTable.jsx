import {
  createColumnHelper,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  useReactTable
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import MiniTableLayout from '../../ui/Table/MiniTableLayout';
import IndeterminateCheckbox from '../../ui/Form/IndeterminateCheckbox';
import { LuChevronLeft } from 'react-icons/lu';

function AssetSelectorTable({
  rowSelection,
  setRowSelection,
  tableData,
  pageCount,
  toggleRowSelection
}) {
  // const [pagination, setPagination] = useState(null);

  const [columns, data] = useMemo(() => {
    const column = createColumnHelper();

    const columns = [
      column.display({
        id: 'Select',
        cell: ({ row }) => (
          // <div className="px-1">
          //   <IndeterminateCheckbox
          //     {...{
          //       checked: row.getIsSelected(),
          //       disabled: !row.getCanSelect(),
          //       indeterminate: row.getIsSomeSelected(),
          //       onChange: () => toggleRowSelection(row.id, row.original)
          //     }}
          //   />
          // </div>
          <button onClick={() => toggleRowSelection(row.id, row.original)}>
            <LuChevronLeft />
          </button>
        )
      }),
      column.accessor('id', {
        header: 'ID'
      }),
      column.accessor('type', {
        header: 'type'
      }),
      column.accessor('name', {
        header: 'Name'
      })
    ];

    return [columns, tableData];
  }, [tableData]);

  const table = useReactTable({
    data: data ?? [],
    columns: columns,
    manualPagination: true,
    pageCount: pageCount,
    state: {
      // pagination,
      rowSelection
    },
    // onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    initialState: {
      columnVisibility: {
        created: false,
        modified: false
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getRowId: row => row.id,
    enableRowSelection: true
  });

  return <MiniTableLayout table={table} />;
}

export default AssetSelectorTable;
