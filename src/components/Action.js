import { useState } from "react"

const Action = ({ url }) => {
	const [action, setAction] = useState(null)
	return (
		<div>
			<div className="seleccion">
                <h2>Por favor indique la acción que desea realizar</h2>
				<div className="acciones">
				<div>
					<input
						type="radio"
						value="Pagado"
						name="action"
						onClick={() => setAction("?estado=pagado")}
					/>{" "}
					<p>PAGADO</p>
				</div>
				<div>
					<input
						type="radio"
						value="NoPagado"
						name="action"
						onClick={() => setAction("?estado=noPagado")}
					/>{" "}
					<p>NO PAGADO</p>
				</div>

				<div>
					<input
						type="radio"
						value="incorrecto"
						name="action"
						onClick={() => setAction("?estado=incorrecto")}
					/>{" "}
					<p>INCORRECTO</p>
				</div>
				</div>
                <a className="actionBtn" href={ url + action}>
				Aceptar
			</a>
			</div>
			
		</div>
	)
}

export default Action
