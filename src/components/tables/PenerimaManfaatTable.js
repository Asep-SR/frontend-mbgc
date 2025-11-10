// components/tables/NestedDataTable.jsx
"use client";

import { useRef, useEffect, useMemo } from "react";

// DataTables (React wrapper + DT styling)
import DataTable from "datatables.net-react";
import DataTableLib from "datatables.net-dt";

// Register DataTables core/styling
DataTable.use(DataTableLib);

export default function PenerimaManfaatTable({ data }) {
  const tableRef = useRef(null);

  const columns = useMemo(
    () => [
      {
        title: "",
        data: null,
        defaultContent: `<i class="fa-solid fa-square-plus"></i>`,
        orderable: false,
        className: "details-control text-center",
      },
      { title: "Kecamatan", data: "kecamatan" },
      { title: "Jumlah Desa", data: "desaCount" },
      { title: "Jumlah Peserta Didik", data: "totalPesertaDidik" },
      { title: "Jumlah Sekolah", data: "totalSekolah" },
    ],
    []
  );

  useEffect(() => {
    const table = tableRef.current?.dt();
    if (!table) return;

    const tbody = table.table().body();

    const onClick = (e) => {
      const target = e.target.closest("td.details-control");
      if (!target) return;

      const tr = target.closest("tr");
      const row = table.row(tr);

      if (row.child.isShown()) {
        // Collapse
        row.child.hide();
        tr.classList.remove("shown");
        target.innerHTML = `<i class="fa-solid fa-square-plus"></i>`;
      } else {
        // Expand with nested DataTable
        const rowData = row.data();
        const nestedTableId = `nested-table-${row.index()}`;
        const nestedHtml = `
          <table id="${nestedTableId}" class="display compact" style="width:100%"></table>
        `;

        row.child(nestedHtml).show();
        tr.classList.add("shown");
        target.innerHTML = `<i class="fa-solid fa-square-minus"></i>`;

        // Prepare nested data
        const nestedData = (rowData?.desa ?? []).map((desa) => [
          null,
          desa.desa,
          desa.totalPesertaDidik,
          desa.totalSekolah,
        ]);

        const nestedColumns = [
          { title: "" },
          { title: "Nama Desa" },
          { title: "Jumlah Peserta Didik" },
          { title: "Jumlah Sekolah" },
        ];

        // Ensure child table exists in DOM, then initialize
        setTimeout(() => {
          // Initialize a standalone DataTable instance for the nested table
          new DataTableLib(`#${nestedTableId}`, {
            data: nestedData,
            columns: nestedColumns,
            paging: false,
            searching: false,
            info: true,
          });
        }, 50);
      }
    };

    tbody.addEventListener("click", onClick);

    // Cleanup: detach handlers and avoid memory leaks
    return () => {
      tbody.removeEventListener("click", onClick);
      // Optionally deep-clone to drop DT's bound handlers on unmount:
      const fresh = tbody.cloneNode(true);
      tbody.replaceWith(fresh);
    };
  }, []);

  return (
    <DataTable
      ref={tableRef}
      data={data}
      columns={columns}
      options={{
        paging: true,
        searching: true,
        info: true,
      }}
      className="sppg-datatable"
    />
  );
}
