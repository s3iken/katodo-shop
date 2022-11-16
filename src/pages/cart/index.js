import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";
import $ from "jquery";
import CartProducts from "./CartProducts";
import Layout from "../../components/Layout";
import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";

const Cart = () => {
  const { total, cartItems, itemCount, handleCheckout } = useCart();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let nombre = document.forms["myForm"]["user_name"].value;
    let email = document.forms["myForm"]["user_email"].value;
    let telefono = document.forms["myForm"]["user_tel"].value;
    let checkbox = document.getElementById("box-1");

    if (nombre === "") {
      $("#errorName").css("display", "block");
      return false;
    } else {
      $("#errorName").css("display", "none");
    }

    if (validateEmail(email) === false) {
      $("#errorEmail").css("display", "block");
      return false;
    } else {
      $("#errorEmail").css("display", "none");
    }

    if (telefono.length !== 9) {
      $("#errorTel").css("display", "block");
      return false;
    } else {
      $("#errorTel").css("display", "none");
    }

    if (!checkbox.checked) {
      $("#errorAviso").css("display", "block");
      return false;
    } else {
      $("#errorAviso").css("display", "none");
    }

    $("#btnSubmit").click();
    window.location.href = "/thankyou";

    emailjs
      .sendForm(
        "service_ntdh4xt",
        "template_yehrete",
        form.current,
        "5SKOk1ltN8wPuK0Mo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
          console.log(JSON.stringify(cartItems));
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <Layout title="Cart" description="This is the Cart page">
      <div>
        <div className="text-center mt-5">
          <h1 class="textCesta cesta-titulo">Cesta</h1>
        </div>

        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <h3
                style={{ color: "white" }}
                class="textCesta"
                className="p-3 text-center"
              >
                Tu Cesta está vacía
              </h3>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="col-sm-3 p-3">
              <div className="card card-body">
                <p className="mb-1 text-dark">Nº de Artículos</p>
                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                <p className="mb-1 text-dark">Total </p>
                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                <hr className="my-4" />
                <div className="">
                  <form name="myForm" ref={form}>
                    <input
                      id="test"
                      type="text"
                      name="user_name"
                      placeholder="Nombre"
                      className="form-control mb-2"
                    />
                    <span id="errorName" class="errorMSG">
                      Introduce tu nombre
                    </span>
                    <input
                      type="email"
                      pattern=".+@globex\.com"
                      name="user_email"
                      placeholder="Email"
                      className="form-control mb-2 mt-2"
                    />
                    <span id="errorEmail" class="errorMSG">
                      Introduce tu correo
                    </span>
                    <input
                      id="user_tel"
                      type="number"
                      name="user_tel"
                      required
                      min="0"
                      placeholder="Nº Teléfono"
                      className="form-control mb-2 mt-2"
                    />
                    <span id="errorTel" class="errorMSG" className="mb-2">
                      Introduce tu teléfono
                    </span>

                    <div class="boxes">
                      <input type="checkbox" name="user_checkbox" id="box-1" />
                      <label for="box-1">
                        Los envios y los pagos online no están disponibles. Al
                        enviar los datos se preparará su pedido y se contactará
                        con usted lo antes posible para acordar la fecha, hora y
                        lugar para realizar la compra.
                      </label>
                    </div>
                    <span
                      id="errorAviso"
                      class="errorMSG"
                      className="mt-2 mb-2"
                    >
                      Debes aceptar los avisos y condiciones
                    </span>

                    <input
                      type="hidden"
                      name="message"
                      value={JSON.stringify(cartItems)}
                    />
                    <button
                      type="button"
                      id="btnSubmit"
                      onClick={handleCheckout}
                      hidden
                    />

                    <button
                      id="btnClean"
                      type="button"
                      className="btn btn-primary mt-3 btn-block"
                      onClick={sendEmail}
                    >
                      ENVIAR
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
