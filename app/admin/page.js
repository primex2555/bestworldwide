"use client";
import useData from "@/components/useDataAdmin";
import { useState, useEffect, useRef } from "react";
import Nav from "@/components/navAdmin";
import LoadingSpinner from "@/components/loadingSpinner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Admin() {
  const { data, dataLoading } = useData();
  const [loading, setLoading] = useState(false);

  const formData = new FormData();
  async function deposit(e) {
    const id = e.target.id;
    const namount = prompt("Add deposit");
    if (namount !== null) {
      setLoading(true);
      if (isNaN(namount) === false) {
        const amountdata = {
          name: "Deposit",
          date: new Date().toISOString().split("T")[0],
          amount: Number(namount),
          deposit: true,
          withdraw: false,
        };

        formData.append("deposit", "true");
        formData.append("transaction", JSON.stringify(amountdata));
        formData.append("id", id);

        try {
          const res = await fetch(`/api/admin/operations`, {
            method: "POST",
            body: formData,
          });

          if (res.ok) {
            const newdata = await res.json();
            window.location.reload();
          }
        } catch (error) {
          console.error(error.message);
          setLoading(false);
        }
      }
    }
  }

  async function profit(e) {
    const id = e.target.id;
    const namount = prompt("Add profit");
    if (namount !== null) {
      setLoading(true);
      if (isNaN(namount) === false) {
        const amountdata = {
          name: "Profit",
          date: new Date().toISOString().split("T")[0],
          amount: Number(namount),
          deposit: true,
          withdraw: false,
        };

        formData.append("profit", "true");
        formData.append("transaction", JSON.stringify(amountdata));
        formData.append("id", id);

        try {
          const res = await fetch(`/api/admin/operations`, {
            method: "POST",
            body: formData,
          });

          if (res.ok) {
            const newdata = await res.json();
            window.location.reload();
          }
        } catch (error) {
          console.error(error.message);
          setLoading(false);
        }
      }
    }
  }

  async function deleteuser(e) {
    const id = e.target.id;
    const runconfirm = confirm("Are you sure you want to delete user");
    if (runconfirm) {
      setLoading(true);
      formData.append("deleteuser", "true");
      formData.append("id", id);

      try {
        const res = await fetch(`/api/admin/operations`, {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          const newdata = await res.json();
          window.location.reload();
        }
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    }
  }

  async function allowwithdraw(id) {
    setLoading(true);
    formData.append("allowwithdraw", "true");
    formData.append("id", id);

    try {
      const res = await fetch(`/api/admin/operations`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const newdata = await res.json();
        window.location.reload();
      }
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }

  async function minamount(e) {
    const id = e.target.id;
    const namount = prompt("Enter new minimum amount");
    if (namount !== null) {
      setLoading(true);
      formData.append("minamount", "true");
      formData.append("namount", namount);
      formData.append("id", id);

      try {
        const res = await fetch(`/api/admin/operations`, {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          const newdata = await res.json();
          window.location.reload();
        }
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    }
  }
  const columns = [
    {
      accessorKey: "name",
      header: "First & Lastname",
      cell: ({ row }) => {
        const x = row.original;
        return (
          <>
            <p>{x.firstname}</p>
            <p>{x.lastname}</p>
          </>
        );
      },
    },
    {
      accessorKey: "email",
      header: "Email",
    },

    {
      accessorKey: "password",
      header: "Password",
    },
    {
      accessorKey: "deposit",
      header: "Deposit",
      cell: ({ row }) => {
        const x = row.original;
        return (
          <>
            $
            {Number(
              x?.transactions
                ?.filter((y) => y.name === "Deposit")
                .reduce((z, y) => z + y.amount, 0),
            )}
          </>
        );
      },
    },
    {
      accessorKey: "profit",
      header: "Profit",
      cell: ({ row }) => {
        const x = row.original;
        return (
          <>
            $
            {Number(
              x?.transactions
                ?.filter((y) => y.name === "Profit")
                .reduce((z, y) => z + y.amount, 0),
            )}
          </>
        );
      },
    },
    {
      accessorKey: "limit",
      header: "Limit",
      cell: ({ row }) => {
        const x = row.original;
        return (
          <>
            <div className="flex items-center gap-x-2">
              {x?.limit}
              <Button
                size="sm"
                variant="outline"
                onClick={minamount}
                id={x._id}
              >
                Change
              </Button>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "allowtransfer",
      header: "Allow withdraw",
      cell: ({ row }) => {
        const x = row.original;
        return (
          <>
            <div className="flex items-center">
              {x?.allowtransfer}
              <Switch
                checked={x.allowtransfer}
                id={x._id}
                onCheckedChange={(e) => allowwithdraw(x._id)}
              />
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "pop",
      header: "Proof of payment",
      cell: ({ row }) => {
        const x = row.original;
        return (
          <>
            {x?.proof?.length
              ? x.proof.map((proofItem) => (
                  <a key={proofItem} href={proofItem} target="_blank">
                    <span className="mr-2 cursor-pointer underline hover:no-underline">
                      Link
                    </span>
                  </a>
                ))
              : "Nothing yet"}
          </>
        );
      },
    },
    {
      accessorKey: "action",
      header: () => <div className="text-right">Action</div>,
      cell: ({ row }) => {
        const x = row.original;
        return (
          <>
            <div className="float-end flex space-x-2 text-right">
              <Button size="sm" variant="outline" id={x._id} onClick={deposit}>
                Deposit
              </Button>
              <Button size="sm" variant="outline" id={x._id} onClick={profit}>
                Profit
              </Button>
              <Button
                size="sm"
                variant="outline"
                id={x._id}
                onClick={deleteuser}
              >
                Delete
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  if (dataLoading)
    return (
      <>
        <LoadingSpinner />
      </>
    );

  return (
    <Nav>
      <div>
        {loading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <div className="hidden-scrollx-sidebar text-textwhite overflow-x-auto px-4 py-8">
            <div className="inline-block min-w-full">
              <>
                <div className="flex items-center py-4">
                  <Input
                    placeholder="Filter users using email..."
                    value={table.getColumn("email")?.getFilterValue() ?? ""}
                    onChange={(event) =>
                      table
                        .getColumn("email")
                        ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                  />
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                          {headerGroup.headers.map((header) => {
                            return (
                              <TableHead key={header.id}>
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext(),
                                    )}
                              </TableHead>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableHeader>
                    <TableBody>
                      {table.getRowModel().rows?.length ? (
                        table
                          .getRowModel()
                          .rows.reverse()
                          .map((row) => (
                            <TableRow
                              key={row.id}
                              data-state={row.getIsSelected() && "selected"}
                            >
                              {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                  {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
                                  )}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={columns.length}
                            className="h-24 text-center"
                          >
                            No results.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    Next
                  </Button>
                </div>
              </>
            </div>
          </div>
        )}
      </div>
    </Nav>
  );
}
