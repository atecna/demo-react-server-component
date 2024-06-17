import { ArrowUpIcon } from "@heroicons/react/16/solid";
import { ColumnProps, Column, Group } from "react-aria-components";


interface StockColumnProps extends ColumnProps {
  children: React.ReactNode;
}

/**
 * StockColumn component
 *
 * This component renders a column with optional sorting functionality.
 */
export default function StockColumn(props: StockColumnProps) {
  return (
    <Column
      {...props}
      className="sticky top-0 p-0 border-0 border-b border-solid border-slate-300 bg-slate-200 font-bold text-left cursor-default first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap outline-none"
    >
      {({ allowsSorting, sortDirection }) => (
        <div className="flex items-center pl-4 py-1">
          <Group
            role="presentation"
            tabIndex={-1}
            className="flex flex-1 items-center overflow-hidden outline-none rounded focus-visible:ring-2 ring-slate-600"
          >
            <span className="flex-1 truncate">{props.children}</span>
            {allowsSorting && (
              <span
                className={`ml-1 w-4 h-4 flex items-center justify-center transition-transform ${
                  sortDirection === "descending" ? "rotate-180" : ""
                }`}
              >
                {sortDirection && <ArrowUpIcon width={8} height={10} />}
              </span>
            )}
          </Group>
        </div>
      )}
    </Column>
  );
}
