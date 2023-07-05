// Recolher sideBar

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");

  var container = document.querySelector(".container");
  container.style.marginLeft = sidebar.classList.contains("collapsed")
    ? "60px"
    : "210px";
}

// multstep
let currentStep = 1;
const form = document.getElementById('multistep-form');

function nextStep(step) {
  document.getElementById(`step${currentStep}`).classList.remove('active');
  document.getElementById(`step${step}`).classList.add('active');
  currentStep = step;
}

function previousStep(step) {
  document.getElementById(`step${currentStep}`).classList.remove('active');
  document.getElementById(`step${step}`).classList.add('active');
  currentStep = step;
}


// Naturalidade e nacionalidade

function changeOptions() {
  var nacionalidade = document.getElementById("nacionalidade").value;
  var naturalidade = document.getElementById("naturalidade");
  
  // Limpar as opções existentes
  naturalidade.innerHTML = "";

  if (nacionalidade === "brasileiro") {
    // Adicionar opções de cidades brasileiras
    var cidades = ["Teresina", "Picos", "Floriano", "São luiz", "Brasília"];
    
    for (var i = 0; i < cidades.length; i++) {
      var option = document.createElement("option");
      option.text = cidades[i];
      naturalidade.add(option);
    }
  } else if (nacionalidade === "estrangeiro") {
    // Adicionar opções de países
    var paises = ["Venezuela", "Bolívia", "Argentina", "Chile", "Alemanha"];
    
    for (var j = 0; j < paises.length; j++) {
      var option = document.createElement("option");
      option.text = paises[j];
      naturalidade.add(option);
    }
  }
}

// Exibir as fotos

function addPhoto() {
  var photoType = document.getElementById("photoType").value;
  var photoDescription = document.getElementById("photoDescription").value;
  var photoFile = document.getElementById("photoFile").files[0];
  
  if (photoDescription !== "" && photoFile) {
    var photoList = document.getElementById("photoList");
    var newPhoto = document.createElement("div");
    
    // Cria a miniatura da foto
    var thumbnail = document.createElement("img");
    thumbnail.className = "thumbnail";
    thumbnail.src = URL.createObjectURL(photoFile);
    newPhoto.appendChild(thumbnail);
    
    // Cria a descrição
    var description = document.createElement("p");
    description.innerHTML = "<strong>Tipo:</strong> " + photoType + "<br><strong>Descrição:</strong> " + photoDescription;
    newPhoto.appendChild(description);
    
    photoList.appendChild(newPhoto);
  }
  
  // Limpar os campos do formulário
  document.getElementById("photoType").selectedIndex = 0;
  document.getElementById("photoDescription").value = "";
  document.getElementById("photoFile").value = "";
}

// Incluir documentos 
function adicionarDocumento() {
  const tipoDocumento = document.getElementById('tipo-documento').value;
  const documentoInput = document.getElementById('documento');
  const documento = documentoInput.files[0];
  
  if (documento) {
    const listItem = document.createElement('li');
    listItem.classList.add('document-list-item');
    
    const tipoDocumentoSpan = document.createElement('span');
    tipoDocumentoSpan.textContent = tipoDocumento + ': ';
    
    const label = document.createElement('label');
    label.textContent = documento.name;
    
    listItem.appendChild(tipoDocumentoSpan);
    listItem.appendChild(label);
    document.getElementById('lista-documentos').appendChild(listItem);
    
    documentoInput.value = '';  // Limpar o campo do arquivo após adicionar o documento
  }
}