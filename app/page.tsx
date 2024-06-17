import { getUserSort, getStonks } from "./db";
import { StockTable } from "./table-basic";

export default async function Home() {
  let stocks = await getStonks();
  const userSort = await getUserSort();
  return (
    <main className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl font-bold mb-8 mt-8">
        You should be curious about this
      </h1>
      <StockTable stocks={stocks} sort={userSort} />
    </main>
  );
}
