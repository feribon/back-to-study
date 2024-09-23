let cep = document.getElementById("cep");

let resposta = document.querySelector(".resposta");

cep.addEventListener("blur", (e) => {
  let formatCep = cep.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://viacep.com.br/ws/${formatCep}/json/`, options)
    .then((response) => {
      response.json().then((data) => {
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        p1.innerText = data.localidade;
        p2.innerText = data.bairro;
        p3.innerText = data.logradouro;
        p4.innerText = data.complemento;
        p5.innerText = data.cep;
        resposta.append(p1, p2, p3, p4, p5);
      });
    })
    .catch((e) => {
      console.log(`deu erro ${(e, message)}`);
    });
});

logradouro.addEventListener("blur", (e) => {
  let logradouro = document.getElementById("logradouro").value;
  let localidade = document.getElementById("localidade").value;
  let estado = document.getElementById("estados").value;
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(
    `https://viacep.com.br/ws/${estado}/${localidade}/${logradouro}/json/`,
    options
  )
    .then((response) => {
      response.json().then((data) => {
        resposta.innerHTML = "";
        let coluna1 = document.createElement("div");
        let coluna2 = document.createElement("div");
        let coluna3 = document.createElement("div");
        let coluna4 = document.createElement("div");
        let coluna5 = document.createElement("div");

        coluna1.classList.add("coluna");
        coluna2.classList.add("coluna");
        coluna3.classList.add("coluna");
        coluna4.classList.add("coluna");
        coluna5.classList.add("coluna");

        data.forEach((item) => {
          let p1 = document.createElement("p");
          let p2 = document.createElement("p");
          let p3 = document.createElement("p");
          let p4 = document.createElement("p");
          let p5 = document.createElement("p");
          let hr = document.createElement("hr");

          p1.innerText = item.localidade;
          p2.innerText = item.bairro;
          p3.innerText = item.logradouro;
          p4.innerText = item.complemento || "Sem complemento";
          p5.innerText = item.cep;

          coluna1.appendChild(p1);
          coluna2.appendChild(p2);
          coluna3.appendChild(p3);
          coluna4.appendChild(p4);
          coluna5.appendChild(p5);

          coluna1.appendChild(hr.cloneNode());
          coluna2.appendChild(hr.cloneNode());
          coluna3.appendChild(hr.cloneNode());
          coluna4.appendChild(hr.cloneNode());
          coluna5.appendChild(hr.cloneNode());
        });
        resposta.append(coluna1, coluna2, coluna3, coluna4, coluna5);
      });
    })
    .catch((e) => {
      console.log(`deu erro ${(e, message)}`);
    });
});
