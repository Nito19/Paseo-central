import React, { useEffect } from "react";
import styles from "./bodylogin.module.css"
import classNames from "classnames";
import LineIcon from "react-lineicons";

export const BodyLogin = () => {
    useEffect(() => {
        window.addEventListener("load", () => {
            const registerButton = document.getElementById("register");
            const loginButton = document.getElementById("login");
            const container = document.getElementById("container");

            registerButton.addEventListener("click", () => {
                container.classList.add(styles.right__panel__active);
            });
            loginButton.addEventListener("click", () => {
                container.classList.remove(styles.right__panel__active);
            });
            return () => {
                registerButton.removeEventListener("click", () => {
                    container.classList.add(styles.right__panel__active);
                });

                loginButton.removeEventListener("click", () => {
                    container.classList.remove(styles.right__panel__active);
                });
            };
        });
    }, []);
    return (
        <>
            <div className={styles.contenedor}>
                <div className={styles.container} id="container">
                    <div className={classNames(styles.form__container, styles.register__container)}>
                        <form>
                            <h1>Registrate Aqui!!</h1>

                            <input type="text" placeholder="Nombre" />
                            <input type="Correo Electronico" placeholder="Email" />
                            <input type="password" placeholder="Contraseña" />
                            <input type="password" placeholder="Confirmar Contraseña" />
                            <button>Registrate</button>
                            <span>or use your account</span>
                            <div className={styles.social__container}>
                                <a className="lni lni-facebook-original"></a>
                                <a className="lni lni-google"></a>
                                <a className="lni lni-linkedin-original"></a>
                            </div>
                        </form>
                    </div>



                    <div className={classNames(styles.form__container, styles.login__container)}>
                        <form>
                            <h1>Ingresa Aqui!!</h1>
                            <input type="Correo Electronico" placeholder="Email" />
                            <input type="password" placeholder="Contraseña" />
                            <div className={styles.content}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" name="checkbox" id="checkBox" />
                                    <label> Recordar cuenta </label>
                                </div>
                                <div className="">
                                    <a href="#"> Recordar Contraseña </a>
                                </div>

                            </div>
                            <button>Ingresar</button>
                            <span>puedes usar</span>

                            <div className={styles.social__container}>
                                <a className="lni lni-facebook-original"></a>
                                <a className="lni lni-google"></a>
                                <a className="lni lni-linkedin-original"></a>
                            </div>
                        </form>
                    </div>

                    <div className={styles.overlay__container}>
                        <div className={styles.overlay}>
                            <div className={classNames(styles.overlay__panel, styles.overlay__left)}>
                                <h1>Hola <br /> Chicos</h1>
                                <p>si tienes una cuenta, inicia sesión aquí</p>
                                <button className={styles.ghost} id="login">Ingresa
                                    <i className={classNames(styles.login)}></i>
                                </button>
                            </div>
                            <div className={classNames(styles.overlay__panel, styles.overlay__right)}>
                                <h1>Se parte de <br /> nuestra familia</h1>
                                <p>Si no tienes cuenta ¡¡Registrate!! y se parte de nuestra familia</p>
                                <button className={styles.ghost} id="register">Registrate
                                    <i className={classNames(styles.register, "lni lni-arrow-right")}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};