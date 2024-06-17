"use client";

import { useState } from "react";
import {
  SortDescriptor,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";
import { Stock } from "./db";
import { saveUserSort } from "./table-actions";
import StockColumn from "./components/StockColumn";
import StockRow from "./components/StockRow";
import StockCell from "./components/StockCell";

interface StockTableProps {
  stocks: Stock[];
  sort: SortDescriptor;
}

export function StockTable({ stocks, sort: s }: StockTableProps) {
  let [sort, setSort] = useState<SortDescriptor>(s);

  let sortedItems = stocks.sort(byLocaleCompare(sort));

  return (
    <div className="max-h-[500px] overflow-y-auto scrollbar-hide">
      <Table
        aria-label="Stocks"
        selectionMode="single"
        selectionBehavior="replace"
        sortDescriptor={sort}
        onSortChange={(sort) => {
          setSort(sort);
          saveUserSort(sort);
        }}
      >
        <TableHeader>
          <StockColumn id="symbol" allowsSorting>
            Symbol
          </StockColumn>
          <StockColumn id="name" isRowHeader allowsSorting>
            Name
          </StockColumn>
          <StockColumn id="marketCap" allowsSorting>
            Market Cap
          </StockColumn>
          <StockColumn id="sector" allowsSorting>
            Sector
          </StockColumn>
          <StockColumn id="industry" allowsSorting>
            Industry
          </StockColumn>
        </TableHeader>
        <TableBody items={sortedItems}>
          {(item) => (
            <StockRow key={item.symbol}>
              <StockCell>{item.symbol}</StockCell>
              <StockCell>{item.name}</StockCell>
              <StockCell>{item.marketCap}</StockCell>
              <StockCell>{item.sector}</StockCell>
              <StockCell>{item.industry}</StockCell>
            </StockRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}






function byLocaleCompare(sort: SortDescriptor) {
  return (a: Stock, b: Stock) => {
    let { column, direction } = sort;
    let cmp = a[column as keyof Stock].localeCompare(b[column as keyof Stock]);
    return direction === "ascending" ? cmp : -cmp;
  };
}
