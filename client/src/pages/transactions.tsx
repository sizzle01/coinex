import React, { useContext, useState } from "react";
import Layout from "../components/globals/Layout";
import Loading from "../components/Loading";
import { TransactionContext } from "../context/TransactionContext";
import { trimAddress } from "../utils/TrimAddress";
import { protocols } from "../utils/Data";
import TableDetails from "../components/TableDetails";

const Nftpage = () => {
  const {
    currentAccount,
    setNetwork,
    network,
    transaction,
    connectWallet,
    balance,
    isLoading,
  } = useContext(TransactionContext);

  const finalBalance = balance
    ? balance[0]?.confirmed_balance.slice(0, 6) * 10 ** -5
    : balance;

  const symbol = balance[0]?.currency?.symbol;

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <div className="bg-primary text-white pt-2 px-3 overflow-auto">
        <div className="flex gap-x-4">
          <button className="rounded-full border border-blue-400 px-2">
            <span>{trimAddress(currentAccount) || "Connect"}</span>
          </button>
          <select
            name="network"
            id="network"
            value={network}
            onChange={(e) => {
              setNetwork(e.target.value);
            }}
            className="bg-darkBg rounded-full px-2 cursor-pointer flex items-center"
          >
            {protocols.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="my-6">
          <p className="text-3xl font-bold">Net Worth</p>
          <h2 className="text-2xl">
            {finalBalance?.toFixed(3)}
            {symbol || balance}
          </h2>
        </div>
        {currentAccount ? (
          <table className="border-collapse table-auto w-full text-sm mt-5">
            <thead>
              <tr>
                {[
                  "id",
                  "Block Number",
                  "Date",
                  "Status",
                  "No of Events",
                  "Confirmations",
                ].map((item) => {
                  return (
                    <th
                      className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
                      key={item}
                    >
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
              {transaction.length > 1 ? (
                transaction?.map((item: any, index) => {
                  return <TableDetails item={item} key={item + index} />;
                })
              ) : (
                <tr>
                  <td>No Transactions</td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <div className="text-gradient grid place-items-center border border-blue-500 py-2">
            <span
              className="cursor-pointer text-lg font-bold"
              onClick={connectWallet}
            >
              Connect Wallet
            </span>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Nftpage;
