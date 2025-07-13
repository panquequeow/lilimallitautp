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
  ],
  "3er Ciclo": [
    { nombre: "Psicología experimental", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Observación y entrevista", "Introducción a la vida universitaria"] },
    { nombre: "Neuropsicología", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Bases biológicas del comportamiento"] },
    { nombre: "Personalidad", creditos: 3, horas: 4, tipo: "O", prerrequisitos: ["Observación y entrevista"] },
    { nombre: "Inglés III", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Inglés II"] },
    { nombre: "Problemas y desafíos en el Perú actual", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Individuo y medio ambiente", "Comprensión y redacción de textos I"] },
    { nombre: "Psicología del desarrollo II", creditos: 4, horas: 5, tipo: "O", prerrequisitos: ["Psicología del desarrollo I"] }
  ],
  "4to Ciclo": [
    { nombre: "Psicopatología", creditos: 4, horas: 5, tipo: "O", prerrequisitos: ["Personalidad", "Neuropsicología", "Psicología del desarrollo II"] },
    { nombre: "Estadística descriptiva para psicología", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Tecnologías del aprendizaje"] },
    { nombre: "Ciudadanía y reflexión ética", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Individuo y medio ambiente", "Comprensión y redacción de textos I"] },
    { nombre: "Inglés IV", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Inglés III"] },
    { nombre: "Psicología social - comunitaria", creditos: 4, horas: 5, tipo: "O", prerrequisitos: ["Personalidad", "Psicología del desarrollo II"] },
    { nombre: "Pruebas psicométricas", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Personalidad", "Psicología del desarrollo II"] }
  ],
  "5to Ciclo": [
    { nombre: "Motivación y emoción", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Personalidad"] },
    { nombre: "Pruebas proyectivas", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Personalidad", "Psicología del desarrollo II"] },
    { nombre: "Curso integrador I: portafolio I", creditos: 4, horas: 5, tipo: "O", prerrequisitos: ["Psicopatología", "Psicología social - comunitaria"] },
    { nombre: "Estadística inferencial para psicología", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Estadística descriptiva para psicología"] },
    { nombre: "Investigación académica", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Individuo y medio ambiente", "Comprensión y redacción de textos I"] },
    { nombre: "Elementary Business English", creditos: 4, horas: 4, tipo: "E", prerrequisitos: ["Inglés IV"] },
    { nombre: "Psicopatología infanto - juvenil", creditos: 3, horas: 3, tipo: "E", prerrequisitos: ["Psicopatología"] },
    { nombre: "Psicología de la sexualidad", creditos: 3, horas: 3, tipo: "E", prerrequisitos: ["Psicología social - comunitaria", "Psicología del desarrollo II"] }
  ],
  "6to Ciclo": [
    { nombre: "Psicología cultural", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Psicología social - comunitaria"] },
    { nombre: "Construcción de pruebas psicológicas", creditos: 3, horas: 4, tipo: "O", prerrequisitos: ["Estadística inferencial para psicología", "Pruebas proyectivas"] },
    { nombre: "Dinámica de grupos", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Psicología social - comunitaria"] },
    { nombre: "Psicología educativa", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Curso integrador I: portafolio I"] },
    { nombre: "Diagnóstico diferencial", creditos: 4, horas: 5, tipo: "O", prerrequisitos: ["Psicopatología"] },
    { nombre: "Psicología de las organizaciones", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Motivación y emoción", "Psicología social - comunitaria"] }
  ],
  "7mo Ciclo": [
    { nombre: "Diagnóstico vocacional y educacional", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Pruebas proyectivas"] },
    { nombre: "Creatividad e innovación", creditos: 3, horas: 4, tipo: "O", prerrequisitos: ["Motivación y emoción"] },
    { nombre: "Dificultades del aprendizaje", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Psicología educativa"] },
    { nombre: "Técnicas psicoterapéuticas", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Diagnóstico diferencial"] },
    { nombre: "Gestión humana en las organizaciones", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Psicología de las organizaciones", "Pruebas proyectivas"] },
    { nombre: "Psicología forense", creditos: 3, horas: 3, tipo: "E", prerrequisitos: ["Psicopatología"] },
    { nombre: "Salud psicolaboral", creditos: 3, horas: 3, tipo: "E", prerrequisitos: ["Psicología de las organizaciones"] }
  ],
  "8vo Ciclo": [
    { nombre: "Salud mental y rehabilitación social", creditos: 3, horas: 4, tipo: "O", prerrequisitos: ["Diagnóstico diferencial", "Psicología social - comunitaria"] },
    { nombre: "Formación para la investigación en psicología", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Estadística inferencial para psicología", "Inglés I", "Investigación académica", "Construcción de pruebas psicológicas"] },
    { nombre: "Curso integrador II: portafolio II", creditos: 4, horas: 5, tipo: "O", prerrequisitos: ["Técnicas psicoterapéuticas", "Dinámica de grupos", "Curso integrador I: portafolio I", "Dificultades del aprendizaje", "Construcción de pruebas psicológicas"] },
    { nombre: "Intervención psicoeducativa", creditos: 4, horas: 4, tipo: "O", prerrequisitos: ["Dificultades del aprendizaje"] },
    { nombre: "Ética en psicología", creditos: 2, horas: 2, tipo: "O", prerrequisitos: ["Diagnóstico diferencial", "Ciudadanía y reflexión ética"] },
    { nombre: "Diagnóstico y desarrollo organizacional", creditos: 4, horas: 5, tipo: "O", prerrequisitos: ["Gestión humana en las organizaciones"] }
  ],
  "9no Ciclo": [
    { nombre: "Consultoría en organizaciones", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Diagnóstico y desarrollo organizacional"] },
    { nombre: "Investigación aplicada a la psicología", creditos: 2, horas: 2, tipo: "O", prerrequisitos: ["Formación para la investigación en psicología"] },
    { nombre: "Internado I - Psicología", creditos: 13, horas: 26, tipo: "O", prerrequisitos: ["Formación para la investigación en psicología", "Técnicas psicoterapéuticas", "Ética en psicología", "Curso integrador II: portafolio II", "Intervención psicoeducativa", "Diagnóstico y desarrollo organizacional", "Salud mental y rehabilitación social"] }
  ],
  "10mo Ciclo": [
    { nombre: "Internado II - Psicología", creditos: 13, horas: 26, tipo: "O", prerrequisitos: ["Internado I - Psicología"] },
    { nombre: "Taller de investigación - Psicología", creditos: 2, horas: 3, tipo: "O", prerrequisitos: ["Investigación aplicada a la psicología"] },
    { nombre: "Formación para la empleabilidad", creditos: 3, horas: 3, tipo: "O", prerrequisitos: ["Gestión humana en las organizaciones"] }
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
