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
const form = document.getElementById("multistep-form");

function nextStep(step) {
  document.getElementById(`step${currentStep}`).classList.remove("active");
  document.getElementById(`step${step}`).classList.add("active");
  currentStep = step;
}

function previousStep(step) {
  document.getElementById(`step${currentStep}`).classList.remove("active");
  document.getElementById(`step${step}`).classList.add("active");
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
    description.innerHTML =
      "<strong>Tipo:</strong> " +
      photoType +
      "<br><strong>Descrição:</strong> " +
      photoDescription;
    newPhoto.appendChild(description);

    photoList.appendChild(newPhoto);
  }

  // Limpar os campos do formulário
  document.getElementById("photoType").selectedIndex = 0;
  document.getElementById("photoDescription").value = "";
  document.getElementById("photoFile").value = "";
}


// Modal
function openModal() {
  document.getElementById("modal").style.display = "block";
}
function openModal2() {
  document.getElementById("modal2").style.display = "block";
}
function openModal3() {
  document.getElementById("modal3").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("btn-salvar-modal").style.display = "block";
}
function closeModal2() {
  document.getElementById("modal2").style.display = "none";
  document.getElementById("btn-salvar-modal2").style.display = "block";
}
function closeModal3() {
  document.getElementById("modal3").style.display = "none";
  document.getElementById("btn-salvar-modal3").style.display = "block";
}

function openModalView() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("btn-salvar-modal").style.display = "none";
}
function openModalView2() {
  document.getElementById("modal2").style.display = "block";
  document.getElementById("btn-salvar-modal2").style.display = "none";
}
function openModalView3() {
  document.getElementById("modal3").style.display = "block";
  document.getElementById("btn-salvar-modal3").style.display = "none"; 
}

function saveChanges() {
  // Aqui você pode adicionar a lógica para salvar as alterações feitas no modal

  closeModal();
}


// Grafico

const data = {
  labels: [
    "PAMS",
    "PDAAN",
    "PJABL",
    "PGCL",
    "PRTIG",
    "PJDB",
    "PJFI",
    "CAPMCO",
    "CPA",
    "PPJRL",
    "UAS",
    "UAS",
    "UAP",
    "PFT",
    "PO",

  ],
  datasets: [
    {
      label: "Quantidade de Internos por unidade",
      data: [500, 1500, 800, 1200, 960, 1000, 790, 555, 390, 450, 930, 990, 340, 500, 620],
      backgroundColor: ["#007932"],
    },
  ],
};

// Configurações do gráfico
const options = {
  scales: {
    y: {
      beginAtZero: true,
      precision: 0,
    },
  },
};

// Renderiza o gráfico no elemento com o ID "chart"
const chartElement = document.getElementById("chart");
new Chart(chartElement, {
  type: "bar",
  data: data,
  options: options,
});
