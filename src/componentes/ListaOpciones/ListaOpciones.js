import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  //!Metodo MAP en arreglo
  /*const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Movil",
    "Gestión e Innovación",
  ];*/
  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.actualizarEquipo(e.target.value);
  };
  return (
    <div className="listaOpciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Selecionar Equipo
        </option>
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
        ;
      </select>
    </div>
  );
};

export default ListaOpciones;
