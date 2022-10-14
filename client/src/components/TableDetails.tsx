import React from "react";
import Converter from "timestamp-conv";

const TableDetails = ({ item }: any) => {
  const trim = (params: string) => params.slice(0, 10) + "....";

  const Date = new Converter.date(item.date);
  return (
    <tr>
      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
        {trim(item.id)}
      </td>
      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
        {item.block_number}
      </td>
      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
        {Date.formatDay}
      </td>
      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
        {item.status}
      </td>
      <td className="border-b border-slate-100 dark:border-slate-700 px-10 text-slate-500 dark:text-slate-400">
        {item.num_events}
      </td>
      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
        {item.confirmations}
      </td>
    </tr>
  );
};

export default TableDetails;
