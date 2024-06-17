import { RowProps, Row } from "react-aria-components";

interface StockRowProps<T> extends RowProps<T> {
  children: React.ReactNode;
}

/**
 * Renders a row component with custom styles.
 * 
 * @param props - The properties for the row.
 * @returns The rendered row component.
 */
export default function StockRow<T extends object>(props: StockRowProps<T>) {
  return (
    <Row
      {...props}
      className="even:bg-slate-100  odd:bg-slate-200 selected:bg-slate-600 selected:text-white cursor-default group outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-600 focus-visible:-outline-offset-4 selected:focus-visible:outline-white"
    />
  );
}
