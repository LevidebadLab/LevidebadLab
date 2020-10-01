let registro = "teste1";
let codigoExame = 3;

function salvarRegistro() {
  var nome = document.getElementById("nomeExame").value;
  var descricao = document.getElementById("descricaoExame").value;
  var preco = document.getElementById("precoExame").value;

  if (nome !== undefined && descricao !== undefined && preco !== undefined) {
    document.getElementById("exames").insertAdjacentHTML(
      "beforeend",
      `<section class="card" id=${codigoExame}> 
      <h4 class="card-title"> 
      ${nome} 
      </h4> 
      <p> 
      ${descricao} 
      </p>
    <p>  ${preco}  </p>
        <img src="../assets/delete.png"  alt="Delete" class="img-icon" onclick="deletarRegistro(this)"/>
        <img src="../assets/edit.png"  alt="Edit" class="img-icon" onclick="editarRegistro(this)"/>`
    );
    codigoExame++;
  }
}

function deletarRegistro(card) {
  exame = card.parentElement;
  debugger;
  exame.parentNode.removeChild(exame);
}

function editarRegistro(card) {
  exame = card.parentElement;
  document.getElementById("nomeExame").value = exame.children[0].innerText;
  document.getElementById("descricaoExame").value = exame.children[1].innerText;
  document.getElementById("precoExame").value = parseFloat(
    exame.children[2].innerText.split(" ")[2].replace(",", ".")
  );
  debugger;
  exame.parentNode.removeChild(exame);
  debugger;
}
