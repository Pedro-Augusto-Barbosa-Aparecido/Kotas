import React from "react";
import styles from "./styles.module.css";
import globalStyles from "../../styles/globalStyles.module.css";

import NumberDiv from "./numberDiv";

import Questions  from "./questions";

export default function Content () {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.box}>
                    <img src="/spotfy.png" alt="logo do spotfy" width="43.2" height="43.2" />

                    <h1>Spotify Family</h1>

                    <p>Grupo destinado a pessoas que querem ver o melhor da Netflix em 4K a um preço acessível.</p>

                    <div className={styles.customizado}>Customizado</div>

                </div>

                <NumberDiv />
            </div>

            <div className={styles.column}>
                <div className={styles.box}>
                    <h1>Administrador</h1>

                    <img src="/login_teste.png" alt="imagem login" width="56" height="56" />

                    <h2>João das Couves</h2>

                    <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 9V2.8C4.23269 2.8 2.8 4.23269 2.8 6C2.8 7.76731 4.23269 9.2 6 9.2L6.00327 9.2C6.0011 9.1336 6 9.06693 6 9ZM1 6C1 3.23858 3.23858 1 6 1H18C20.7614 1 23 3.23858 23 6C23 8.76142 20.7614 11 18 11C17.8866 11 17.7741 10.9962 17.6625 10.9888C16.938 13.0519 15.1177 14.5994 12.9 14.933V19.6H14.5C14.9971 19.6 15.4 20.0029 15.4 20.5C15.4 20.7305 15.3133 20.9408 15.1708 21.1H16C16.4971 21.1 16.9 21.5029 16.9 22C16.9 22.4971 16.4971 22.9 16 22.9H12H8C7.50294 22.9 7.1 22.4971 7.1 22C7.1 21.5029 7.50294 21.1 8 21.1H8.82917C8.68666 20.9408 8.6 20.7305 8.6 20.5C8.6 20.0029 9.00294 19.6 9.5 19.6H11.1V14.933C8.88227 14.5994 7.06205 13.0519 6.33746 10.9888C6.22594 10.9962 6.11341 11 6 11C3.23858 11 1 8.76142 1 6ZM18 9C18 9.06693 17.9989 9.1336 17.9967 9.2L18 9.2C19.7673 9.2 21.2 7.76731 21.2 6C21.2 4.23269 19.7673 2.8 18 2.8V9ZM12.3606 4.7505C12.2153 4.44812 11.7847 4.44812 11.6394 4.75051L11.0813 5.91241C11.0229 6.03379 10.9075 6.11768 10.774 6.13563L9.49649 6.30745C9.16402 6.35217 9.03097 6.76166 9.27366 6.99326L10.2062 7.88319C10.3036 7.97615 10.3477 8.11189 10.3236 8.24436L10.0922 9.51246C10.032 9.84248 10.3803 10.0956 10.6756 9.93631L11.8101 9.32441C11.9286 9.26049 12.0714 9.26049 12.1899 9.32441L13.3244 9.93631C13.6197 10.0956 13.968 9.84248 13.9078 9.51246L13.6764 8.24436C13.6523 8.11189 13.6964 7.97615 13.7938 7.88319L14.7263 6.99326C14.969 6.76166 14.836 6.35217 14.5035 6.30745L13.226 6.13563C13.0925 6.11768 12.9771 6.03379 12.9187 5.91241L12.3606 4.7505Z" fill="#262F56"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 9V2.8C32.2327 2.8 30.8 4.23269 30.8 6C30.8 7.76731 32.2327 9.2 34 9.2L34.0033 9.2C34.0011 9.1336 34 9.06693 34 9ZM29 6C29 3.23858 31.2386 1 34 1H46C48.7614 1 51 3.23858 51 6C51 8.76142 48.7614 11 46 11C45.8866 11 45.7741 10.9962 45.6625 10.9888C44.938 13.0519 43.1177 14.5994 40.9 14.933V19.6H42.5C42.9971 19.6 43.4 20.0029 43.4 20.5C43.4 20.7305 43.3133 20.9408 43.1708 21.1H44C44.4971 21.1 44.9 21.5029 44.9 22C44.9 22.4971 44.4971 22.9 44 22.9H40H36C35.5029 22.9 35.1 22.4971 35.1 22C35.1 21.5029 35.5029 21.1 36 21.1H36.8292C36.6867 20.9408 36.6 20.7305 36.6 20.5C36.6 20.0029 37.0029 19.6 37.5 19.6H39.1V14.933C36.8823 14.5994 35.062 13.0519 34.3375 10.9888C34.2259 10.9962 34.1134 11 34 11C31.2386 11 29 8.76142 29 6ZM46 9C46 9.06693 45.9989 9.1336 45.9967 9.2L46 9.2C47.7673 9.2 49.2 7.76731 49.2 6C49.2 4.23269 47.7673 2.8 46 2.8V9ZM40.3606 4.7505C40.2153 4.44812 39.7847 4.44812 39.6394 4.75051L39.0813 5.91241C39.0229 6.03379 38.9075 6.11768 38.774 6.13563L37.4965 6.30745C37.164 6.35217 37.031 6.76166 37.2737 6.99326L38.2062 7.88319C38.3036 7.97615 38.3477 8.11189 38.3236 8.24436L38.0922 9.51246C38.032 9.84248 38.3803 10.0956 38.6756 9.93631L39.8101 9.32441C39.9286 9.26049 40.0714 9.26049 40.1899 9.32441L41.3244 9.93631C41.6197 10.0956 41.968 9.84248 41.9078 9.51246L41.6764 8.24436C41.6523 8.11189 41.6964 7.97615 41.7938 7.88319L42.7263 6.99326C42.969 6.76166 42.836 6.35217 42.5035 6.30745L41.226 6.13563C41.0925 6.11768 40.9771 6.03379 40.9187 5.91241L40.3606 4.7505Z" fill="#262F56"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62 9V2.8C60.2327 2.8 58.8 4.23269 58.8 6C58.8 7.76731 60.2327 9.2 62 9.2L62.0033 9.2C62.0011 9.1336 62 9.06693 62 9ZM57 6C57 3.23858 59.2386 1 62 1H74C76.7614 1 79 3.23858 79 6C79 8.76142 76.7614 11 74 11C73.8866 11 73.7741 10.9962 73.6625 10.9888C72.938 13.0519 71.1177 14.5994 68.9 14.933V19.6H70.5C70.9971 19.6 71.4 20.0029 71.4 20.5C71.4 20.7305 71.3133 20.9408 71.1708 21.1H72C72.4971 21.1 72.9 21.5029 72.9 22C72.9 22.4971 72.4971 22.9 72 22.9H68H64C63.5029 22.9 63.1 22.4971 63.1 22C63.1 21.5029 63.5029 21.1 64 21.1H64.8292C64.6867 20.9408 64.6 20.7305 64.6 20.5C64.6 20.0029 65.0029 19.6 65.5 19.6H67.1V14.933C64.8823 14.5994 63.062 13.0519 62.3375 10.9888C62.2259 10.9962 62.1134 11 62 11C59.2386 11 57 8.76142 57 6ZM74 9C74 9.06693 73.9989 9.1336 73.9967 9.2L74 9.2C75.7673 9.2 77.2 7.76731 77.2 6C77.2 4.23269 75.7673 2.8 74 2.8V9ZM68.3606 4.7505C68.2153 4.44812 67.7847 4.44812 67.6394 4.75051L67.0813 5.91241C67.0229 6.03379 66.9075 6.11768 66.774 6.13563L65.4965 6.30745C65.164 6.35217 65.031 6.76166 65.2737 6.99326L66.2062 7.88319C66.3036 7.97615 66.3477 8.11189 66.3236 8.24436L66.0922 9.51246C66.032 9.84248 66.3803 10.0956 66.6756 9.93631L67.8101 9.32441C67.9286 9.26049 68.0714 9.26049 68.1899 9.32441L69.3244 9.93631C69.6197 10.0956 69.968 9.84248 69.9078 9.51246L69.6764 8.24436C69.6523 8.11189 69.6964 7.97615 69.7938 7.88319L70.7263 6.99326C70.969 6.76166 70.836 6.35217 70.5035 6.30745L69.226 6.13563C69.0925 6.11768 68.9771 6.03379 68.9187 5.91241L68.3606 4.7505Z" fill="#262F56"/>
                    </svg>

                    <p>selos disponíveis</p>
                </div>
            </div>
            
            <div className={styles.column}>
                <div className={styles.box1}>
                    <h1>Sobre o grupo</h1>
                    
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9087 6.616H6.46069V12.04H5.54869V6.616H0.100688V5.656H5.54869V0.207999H6.46069V5.656H11.9087V6.616Z" fill="black"/>
                    </svg>

                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.box}>
                    <h1>Quem já faz parte</h1>

                    <div className={styles.divBreakHorizontal}></div>

                    <div className={globalStyles.marginTop} style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                    }}>
                        <div className={styles.foto}>
                            <img src="/foto1.png" alt="foto1" />
                            <p>Maria</p>

                        </div>
                        <div className={styles.foto}>
                            <img src="/foto2.png" alt="foto1" />
                            <p>Filipe</p>

                        </div>
                        <div className={styles.foto}>
                            <img src="/foto3.png" alt="foto1" />
                            <p>Ana</p>

                        </div>

                    </div>

                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.box}>
                    <h1>Dúvidas frequentes</h1>

                    <div className={styles.divBreakHorizontal}></div>

                    <Questions question="Quais são as formas de pagamento?" />

                    <div className={styles.divBreakHorizontal}></div>

                    <Questions question="O que é caução?" />

                    <div className={styles.divBreakHorizontal}></div>

                    <Questions question="Quando terei acesso ao serviço?" />

                    <div className={styles.divBreakHorizontal}></div>

                    <Questions question="Políticas de cancelamento" />

                </div>
            </div>

            <div>
                <div className={styles.row}>
                <div className={styles.column} style={{
                    marginRight: "10px"
                }}>
                        <div className={styles.box2}>
                            <img src="/deezer.png" alt="deezer" width="40" height="40" />

                            <h1>Deezer Family</h1>

                            <div style={{
                                display: "flex",
                                alignItems: "baseline",
                                justifyContent: "space-between",

                            }}>
                                <h1 style={{
                                    marginRight: "15px"
                                }}>2</h1>
                                <h2> vagas</h2>
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "baseline",
                                justifyContent: "space-between",
                                
                            }}>
                                <h1 style={{
                                    marginRight: "15px"
                                }}>15,90</h1>
                                <h2>por mês</h2>
                            </div>

                            <p>Última vaga</p>

                        </div>
                    </div>
                    <div className={styles.column} style={{
                        marginRight: "10px"
                    }}>
                        <div className={styles.box2}>
                            <img src="/avast.png" alt="deezer" width="40" height="40" />

                            <h1>Avast Ultimate</h1>

                            <div style={{
                                display: "flex",
                                alignItems: "baseline",
                                justifyContent: "space-between",

                            }}>
                                <h1 style={{
                                    marginRight: "15px"
                                }}>2</h1>
                                <h2> vagas</h2>
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "baseline",
                                justifyContent: "space-between",
                                
                            }}>
                                <h1 style={{
                                    marginRight: "15px"
                                }}>15,90</h1>
                                <h2>por mês</h2>
                            </div>

                            <p>Última vaga</p>

                        </div>
                    </div>
                    <div className={styles.column} style={{
                        marginRight: "10px"
                    }}>
                        <div className={styles.box2}>
                            <img src="/avast.png" alt="deezer" width="40" height="40" />

                            <h1>Avast Ultimate</h1>

                            <div style={{
                                display: "flex",
                                alignItems: "baseline",
                                justifyContent: "space-between",

                            }}>
                                <h1 style={{
                                    marginRight: "15px"
                                }}>2</h1>
                                <h2> vagas</h2>
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "baseline",
                                justifyContent: "space-between",
                                
                            }}>
                                <h1 style={{
                                    marginRight: "15px"
                                }}>15,90</h1>
                                <h2>por mês</h2>
                            </div>

                            <p>Última vaga</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.box}>
                    <div className={styles.line}>
                        <p>Mensalidade</p>
                        <h2>R$ 15,00</h2>
                    </div>

                    <div className={styles.divBreakHorizontal}></div>

                    <div className={styles.line}>
                        <p>Kotas</p>
                        
                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <h2 style={{
                                marginRight: "10px"
                            }}>
                                1 
                            </h2>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                                marginRight: "10px"
                            }}>
                                <rect width="16" height="16" fill="white"/>
                                <circle cx="8" cy="8" r="8" fill="#01B1EC"/>
                            </svg>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="16" height="16" fill="white"/>
                                <circle cx="8" cy="8" r="8" fill="#01B1EC"/>
                            </svg>
                        </div>
                        
                    </div>

                    <div className={styles.divBreakHorizontal}></div>

                    <div className={styles.line}>
                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <p style={{
                                marginRight: "10px"
                            }}>Caução</p>

                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.65625 5V3.65625H6.34375V5H7.65625ZM7.65625 10.3438V6.34375H6.34375V10.3438H7.65625ZM2.28125 2.3125C3.59375 1 5.16667 0.34375 7 0.34375C8.83333 0.34375 10.3958 1 11.6875 2.3125C13 3.60417 13.6562 5.16667 13.6562 7C13.6562 8.83333 13 10.4062 11.6875 11.7188C10.3958 13.0104 8.83333 13.6562 7 13.6562C5.16667 13.6562 3.59375 13.0104 2.28125 11.7188C0.989583 10.4062 0.34375 8.83333 0.34375 7C0.34375 5.16667 0.989583 3.60417 2.28125 2.3125Z" fill="#E1E1E1"/>
                            </svg>

                        </div>

                        <h2>R$ 15,00</h2>

                    </div>

                    <div className={styles.divBreakHorizontal}></div>

                    <div className={styles.line}>
                        <h2>Total da Inscrição</h2>
                        <h2>R$ 30,00</h2>
                    </div>

                    <div className={styles.line}>
                        <h2>R$ 30,00</h2>
                        <h2>R$ 15,00</h2>
                        <h2 style={{ color: "#26B36A" }}>R$ 0,00</h2>
                    </div>

                    <div className={styles.lineContainer}>
                        <input className={styles.radio} type="radio" name="first" id="first" checked />
                        <div className={styles.lineBreak}></div>
                        <input className={styles.radio} type="radio" name="first" id="first" />
                        <div className={styles.lineBreak}></div>
                        <input className={styles.radio} type="radio" name="first" id="first" />
                    </div>

                    <div className={styles.line}>
                        <h2>Assinatura</h2>
                        <h2>Segundo mês</h2>
                        <h2>Último mês</h2>
                    </div>

                    <div className={styles.button}>
                        <h1 className={styles.textButton}>Participar</h1>
                    </div>

                </div>
            </div>
        </div>
    );
}
