export const FormatearFecha = ({ fecha }) => {
  const fechaPublicacion = new Date(fecha);

  const formatCorto = `${fechaPublicacion
    .getDate()
    .toString()
    .padStart(2, "0")}/${(fechaPublicacion.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${fechaPublicacion.getFullYear()}`;

  // Formato "25 de agosto del 2024"
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const formatLargo = `${fechaPublicacion.getDate()} de ${
    meses[fechaPublicacion.getMonth()]
  } del ${fechaPublicacion.getFullYear()}`;

  return <p className="">{formatCorto}</p>;
};

export const FormatearFechaCondicional = ({ fecha }) => {
  const fechaPublicacion = new Date(fecha);
  const ahora = new Date();

  // Cálculo de la diferencia en milisegundos
  const diferenciaTiempo = ahora - fechaPublicacion;

  // Cálculo de la diferencia en días
  const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
  const diferenciaMeses = Math.floor(diferenciaDias / 30); // Aproximado
  const diferenciaAnios = Math.floor(diferenciaMeses / 12); // Aproximado

  // Función para obtener el nombre del mes en español
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  // Lógica para mostrar la fecha en diferentes formatos
  var formatoFecha;
  if (diferenciaDias === 0) {
    formatoFecha = `${fechaPublicacion.getDate()} de ${
      meses[fechaPublicacion.getMonth()]
    } del ${fechaPublicacion.getFullYear()}`;
  } else if (diferenciaDias === 1) {
    formatoFecha = "Ayer";
  } else if (diferenciaDias === 2) {
    formatoFecha = "Hace 2 días";
  } else if (diferenciaDias < 7) {
    formatoFecha = `Hace ${diferenciaDias} días`;
  } else if (diferenciaDias === 7) {
    formatoFecha = "Hace una semana";
  } else if (diferenciaDias < 30) {
    const semanas = Math.floor(diferenciaDias / 7);
    formatoFecha = `Hace ${semanas} ${semanas === 1 ? "semana" : "semanas"}`;
  } else if (diferenciaDias === 30 || diferenciaDias === 31) {
    formatoFecha = "Hace un mes";
  } else if (diferenciaDias < 365) {
    formatoFecha = `Hace ${diferenciaMeses} ${
      diferenciaMeses === 1 ? "mes" : "meses"
    }`;
  } else if (diferenciaAnios === 1) {
    formatoFecha = "Hace un año";
  } else if (diferenciaAnios < 5) {
    formatoFecha = `Hace ${diferenciaAnios} años`;
  } else {
    formatoFecha = "Hace mucho tiempo";
  }

  return <p className="">{formatoFecha}</p>;
};

export const PublicacionNueva = ({fecha}) => {
  const fechaPublicacion = new Date(fecha);
  const ahora = new Date();

  // Cálculo de la diferencia en días
  const diferenciaTiempo = ahora - fechaPublicacion;
  const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

  if (diferenciaDias <= 1) {
    return (
      <span className="bg-btn-600 py-1 rounded-md px-2 text-sm font-bold absolute top-3 left-4">
        Nuevo
      </span>
    );
  }

  return null;
};
