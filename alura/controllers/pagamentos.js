module.exports = function(app){
  app.get('/pagamentos', function(req, res) {
    console.log('Recebida requisisçao');
    res.send('OK');
  });

  app.post('/pagamentos/pagamento', function(req, res){
    var pagamento = req.body;
    console.log('processando uma requisicao de pagamento');
    pagamento.status = 'CRIADO';
    pagamento.data = new Date;
    res.send(pagamento);
  })
}
