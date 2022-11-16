import React from "react";
import Layout from "../../components/Layout";
import ProductsGrid from "./ProductsGrid";
import "./index.css";

const Store = () => {
  return (
    <Layout title="Kátodo" description="This is the Store page">
      <div>
        <section class="gradient-border">
          <div class="content">
            <h2>Kátodo</h2>
            <h2>Kátodo</h2>
          </div>
        </section>
        <ProductsGrid />
      </div>
    </Layout>
  );
};

export default Store;
