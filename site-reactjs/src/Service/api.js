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

export const updateProduto = async (id, body) => {
    const response = await instancia.put(`/produtos/${id}`, body);
}

export const deleteProduto = async (id) => {
    const response = await instancia.delete(`/produtos/${id}`);
}

export const postProduto = async (produto) => {
    const response = await instancia.post(`/produtos`, produto);
    const json = await response.data.msg;
    return json;
}
    //mostrar no máximo 3 itens aleatórios na página de indicações
export const getIndicacoes = async ()=>{
    const response = await instancia.get('/produtos');
    const json = await response.data;
    let tamanho = json.length;
    if (tamanho <= 3) {
        return json;
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    let indicacoes = [];
    for(let i=0; i<3; i++) {
        tamanho = json.length;
        let randomIndex = getRandomArbitrary(0, tamanho-1);
        let produtoAleatorio = json.splice(randomIndex, 1).pop();
        indicacoes.push(produtoAleatorio);
    }
    return indicacoes;
}