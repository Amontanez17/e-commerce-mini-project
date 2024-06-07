import List from "../List/List";

function DashboardPage({ products, setProducts }) {
  return (
    <div>
      DashboardPage
      <List products={products} setProducts={setProducts} />
    </div>
  );
}

export default DashboardPage;
