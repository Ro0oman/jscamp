import data from "../data.json";


export function JobListings() {
  return (
    <>
      <h2>Resultados de búsqueda</h2>
      <div className="jobs-listings">
        {data.map((empleo) => (
          <div key={empleo.id}>
            <h3>{empleo.titulo}</h3>
            <small>
              {empleo.empresa} | {empleo.ubicacion}
            </small>
            <p>{empleo.descripcion}</p>
          </div>
        ))}
      </div>
      <button className="button-apply-job">Aplicar</button>
    </>
  );
}
