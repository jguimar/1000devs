const calculaIdade = (req, res) => {
  const hoje = new Date(Date.now())
  const nascimento = new Date("1996-03-05")
  const idade = hoje.getFullYear() - nascimento.getFullYear()

  res.json({
      "nome": "Jônatas",
      "cidade": "São José dos Campos",
      "UF": "SP",
      "profissao": "programador",
      "nascimento": idade,
  })
}

module.exports = {
  calculaIdade
}