import axios from "axios";

axios.defaults.baseURL = 'https://django-rest-api-j.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;