import autores from "../models/Autor.js";

class AutorController {

  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  }

  static listarAutorPorId = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (err, autores) => {
      if(err) {
        res.status(400).send({message: `${err.message} - ID do autor nao encontrado`});
      } else {
        res.status(200).send(autores);
      }
    });
  }

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);

    autor.save(err => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar autor`});
      } else {
        res.status(200).send(autor.toJSON());
      }
    });
  }

  static autualizarAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, {$set: req.body}, err => {
      if(err) {
        res.status(500).send({message: err.message})
      } else {
        res.status(200).send({message: 'Autor atualizado com sucesso'});
      }
    });
  }

  static excluirAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, err => {
      if(err) {
        res.status(500).send({message: err.message});
      } else {
        res.status(200).send({message: 'Autor excluido com sucesso'});
      }
    });
  }
}

export default AutorController;