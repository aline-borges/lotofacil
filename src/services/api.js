import axios from 'axios';

const api = axios.create({baseURL: `
  https://apiloterias.com.br/app/resultado?loteria=lotofacil&token=M3syK8VQLS2YhiG&concurso=[]
`})

export default api 
