const malla = {
  "1er Ciclo": [
    { nombre: "Observación del comportamiento", creditos: 3, horas: 3, tipo: "O", prerrequisitos: [] },
    { nombre: "Introducción a la Psicología", creditos: 4, horas: 4, tipo: "O", prerrequisitos: [] },
    { nombre: "Inglés I", creditos: 3, horas: 3, tipo: "O", prerrequisitos: [] },
    { nombre: "Individuo y medio ambiente", creditos: 2, horas: 2, tipo: "O", prerrequisitos: [] },
    { nombre: "Comprensión y redacción de textos I", creditos: 4, horas: 4, tipo: "O", prerrequisitos: [] },
    { nombre: "Introducción a la vida universitaria", creditos: 3, horas: 3, tipo: "O", prerrequisitos: [] }
  ],
  "2do Ciclo": [
    { nombre: "Observación y entrevista", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Observación del comportamiento"] },
    { nombre: "Tecnologías del aprendizaje", creditos: 2, horas: 3, tipo: "O", prerrequisitos: [] },
    { nombre: "Bases biológicas del comportamiento", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Introducción a la vida universitaria"] },
    { nombre: "Inglés II", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Inglés I"] },
    { nombre: "Comprensión y redacción de textos II", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Comprensión y redacción de textos I"] },
    { nombre: "Psicología del desarrollo I", creditos: 4, horas: 5, tipo: "O", prerrequisitos: [] }
  ]
};

let cursosCompletados = new Set();
const contenedor = document.getElementById("contenedor-malla");

function cargarMalla() {
  contenedor.innerHTML = "";
  for (const ciclo in malla) {
    const divCiclo = document.createElement("div");
    divCiclo.className = "ciclo";
    const titulo = document.createElement("h2");
    titulo.textContent = ciclo;
    divCiclo.appendChild(titulo);

    malla[ciclo].forEach((curso) => {
      const divCurso = document.createElement("div");
      divCurso.className = "curso";
      divCurso.setAttribute("data-nombre", curso.nombre);

      const requisitosCumplidos = curso.prerrequisitos.every(pr => cursosCompletados.has(pr));

      if (!requisitosCumplidos && curso.prerrequisitos.length > 0) {
        divCurso.classList.add("bloqueado");
      }

      if (cursosCompletados.has(curso.nombre)) {
        divCurso.classList.add("completado");
      }

      divCurso.innerHTML = `
        <strong>${curso.nombre}</strong><br/>
        Créditos: ${curso.creditos} | Horas: ${curso.horas} | Tipo: ${curso.tipo}
        ${curso.prerrequisitos.length ? `<br><small>Prerequisitos: ${curso.prerrequisitos.join(", ")}</small>` : ""}
      `;

      divCurso.addEventListener("click", () => {
        if (divCurso.classList.contains("bloqueado")) return;
        if (divCurso.classList.contains("completado")) {
          cursosCompletados.delete(curso.nombre);
        } else {
          cursosCompletados.add(curso.nombre);
        }
        actualizarVista();
      });

      divCiclo.appendChild(divCurso);
    });

    contenedor.appendChild(divCiclo);
  }
  actualizarAvance();
}

function actualizarVista() {
  cargarMalla();
}

function actualizarAvance() {
  const totalCreditos = Object.values(malla).flat().reduce((acc, cur) => acc + cur.creditos, 0);
  const completadosCreditos = Object.values(malla)
    .flat()
    .filter(c => cursosCompletados.has(c.nombre))
    .reduce((acc, cur) => acc + cur.creditos, 0);

  const porcentaje = Math.round((completadosCreditos / totalCreditos) * 100);
  document.getElementById("avance").textContent = `Avance: ${porcentaje}%`;
}

cargarMalla();
