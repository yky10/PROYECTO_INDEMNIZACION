document.getElementById('indemnizacionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura de variables del formulario
    const nombre = document.getElementById('nombre').value;
    const dpi = document.getElementById('dpi').value;
    const cargo = document.getElementById('cargo').value;
    const salario = parseFloat(document.getElementById('salario').value);
    const anios = parseInt(document.getElementById('anios').value);
    const meses = parseInt(document.getElementById('meses').value);
    const tipoDespido = document.getElementById('tipoDespido').value;

    // Cálculo de indemnización
    const indemnizacionAnios = salario * anios;
    const indemnizacionMeses = (salario / 12) * meses;
    const totalIndemnizacion = indemnizacionAnios + indemnizacionMeses;

    // Cálculo de despido injustificado
    const salarioPreaviso = salario; // Un mes de salario por preaviso
    const bonificacionAnualProporcional = salario / 12; // Proporcional al aguinaldo y bonificación anual
    const vacacionesProporcionales = (salario / 12) * (15 / 30); // Proporcional a vacaciones (15 días al año)
    const totalDespidoInjustificado = totalIndemnizacion + salarioPreaviso + bonificacionAnualProporcional + vacacionesProporcionales;

    // Generar la nueva página con el resultado
    const resultadoHTML = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resultado de Indemnización</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="container">
                <h1>Resultado del Cálculo de Indemnización</h1>
                <h2>Datos Personales</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>DPI:</strong> ${dpi}</p>
                <p><strong>Cargo:</strong> ${cargo}</p>

                <h2>Despido Justificado</h2>
                <p><strong>Salario base mensual:</strong> Q${salario.toFixed(2)}</p>
                <p><strong>Años de servicio:</strong> ${anios}</p>
                <p><strong>Meses adicionales:</strong> ${meses}</p>
                <p><strong>Indemnización por años y meses trabajados:</strong> Q${totalIndemnizacion.toFixed(2)}</p>

                <h2>Despido ${tipoDespido === 'injustificado' ? 'Injustificado' : 'Justificado'}</h2>
                ${tipoDespido === 'injustificado' ? `
                    <p><strong>Salario de preaviso:</strong> Q${salarioPreaviso.toFixed(2)}</p>
                    <p><strong>Bonificación anual proporcional:</strong> Q${bonificacionAnualProporcional.toFixed(2)}</p>
                    <p><strong>Vacaciones proporcionales:</strong> Q${vacacionesProporcionales.toFixed(2)}</p>
                    <p><strong>Total por despido injustificado:</strong> Q${totalDespidoInjustificado.toFixed(2)}</p>
                ` : `
                    <p>Para el despido justificado, se recomienda consultar la normativa local específica.</p>
                `}
                <button onclick="window.history.back()">Regresar</button>
            </div>
        </body>
        </html>
    `;

    // Abrir una nueva ventana con el resultado
    const newWindow = window.open();
    newWindow.document.write(resultadoHTML);
    newWindow.document.close();
});
