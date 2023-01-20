import axios from "axios";

axios.interceptors.request.use(function (config) {
  const {origin} = new URL(config.url);
  const allowedOrigins = "http://127.0.0.1:5000/api"
  const token = localStorage.getItem('token')

  if(allowedOrigins.includes(origin)){
    config.headers.authorization=token
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});



export const fetchProductList = async () => {
  const { data } = await axios.get("http://127.0.0.1:5000/api/book/");
  return data;
};
export const fetchProduct = async (product_id) => {
  const { data } = await axios.get(
    `http://127.0.0.1:5000/api/book/${product_id}`
  );
  return data;
};

export const fetchMe =async ()=>{
  const {data}= await axios.get("http://127.0.0.1:5000/api/users/me")  
  return data;
  
};

export const fetchLogin = async (input) => {
  const {data}= await axios.post("http://127.0.0.1:5000/api/users/login",input)  
  return data;
};

export const fetchRegister = async (data) => {

    var config = {
        method: 'post',
        url: 'http://127.0.0.1:5000/api/users/addusers',
        data : data
      };
      const result = await axios(config)
      return result
      

  /*var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:5000/api/users/addusers", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));*/

  //const {data}= await axios.post("http://127.0.0.1:5000/api/users/addusers",);
  //return data;
};
