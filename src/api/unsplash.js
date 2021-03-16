import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Bv1pZq7kH8BhhlTiDQ511nUlDYWmVuTmPrgyqAhro1I",
  },
});
