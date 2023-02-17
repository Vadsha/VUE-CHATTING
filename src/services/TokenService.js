// const token = "id_token";
// export const getToken = () => {
//   return localStorage.getItem(token);
// };
// export const setToken = () => {
//   return localStorage.setToken(token);
// };
// export const destroyToekn = () => {
//   return localStorage.removeItem(token);
// };
// export default { getToken, setToken, destroyToekn };


const ID_TOKEN_KEY = "id_token" ;

/**
 * @description get token form localStorage
 */
export const getToken = ()=>{
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token) => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken };
