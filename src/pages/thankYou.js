import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <Layout title="Thank You" description="This is the Thank You page">
      <div className="p-3 text-center text-success mt-4">
        <p class="thanks">¡Gracias por comprar en Kátodo!</p>
        <Link to="/" className="btn btn-outline-success btn-sm">
          Comprar más
        </Link>
      </div>
    </Layout>
  );
};

export default ThankYou;
