import axios from 'axios';  

const instancia = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const getProdutos = async () => {
    const response = await instancia.get('/produtos');
    const json = await response.data;
    return json;
}

export const getProdutosById = async (valorInput) => {    
    const response = await instancia.get(`/produtos/${valorInput}`);
    const json = await response.data;
    return json;
}

export const postProduto = async (produto) => {
    const response = await instancia.post(`/produtos/:id`, produto);
    const json = await response.data.msg;
    return json;
}