import "./CampoTexto.css";

const CampoTexto = (props) => {
  const { type = "text" } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className="campo">
      <label> {props.titulo} </label>
      <input
        placeholder={props.placeholder}
        required
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default CampoTexto;
