import produtos from "../Models/Produto.js";

class ProdutoController{
    
    static getProdutos = (req, res) => {
        produtos.find((err, produtos) => { 
        res.status(200).json(produtos)
    });

    }

    static getProdutosId = (req, res) => {
        const id = req.params.id;
        produtos.findById(id, (err, produtos) => { 
            if (err) {  
                res.status(400).send({message: `${err.message} - falha ao localizar produto`})
            } else {
                res.status(200).send(produtos)
                console.log(produtos);
            }
    });

    }

    static addProduto = (req, res) => {
        const produto =  new produtos(req.body);

        produto.save((err) => {
            if (err) {  
                res.status(500).send({message: `${err.message} - falha ao cadastrar produto`})
                } else {
                    res.status(201).send(produto.toJSON())
                }
            })

    }

    static editProduto = (req, res) => {
        const id = req.params.id;

        produtos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: 'Produto atualizado com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        })

    }

    static deleteProduto = (req, res) => {
        const id = req.params.id;
        produtos.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(200).send({message: 'Produto removido com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
    }

}

export default ProdutoController;