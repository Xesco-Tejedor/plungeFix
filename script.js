document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos del DOM ---
    const problemInput = document.getElementById('problemInput');
    const apiKeyInput = document.getElementById('apiKeyInput');
    const generateButton = document.getElementById('generateButton');
    const outputArea = document.getElementById('outputArea');
    const loadingIndicator = document.getElementById('loadingIndicator');

    // --- Configuración de la API (URL del Endpoint de OpenRouter) ---
    // CAMBIO: Apuntar al endpoint correcto de OpenRouter
    const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

    // --- Función para generar perspectivas ---
    async function generatePerspectives() {
        const problemText = problemInput.value.trim();
        const userApiKey = apiKeyInput.value.trim(); // Obtener la API Key del input

        // --- Validaciones ---
        if (problemText.length < 10) {
            outputArea.innerHTML = '<p><em>Por favor, describe tu problema con más detalle (mínimo 10 caracteres).</em></p>';
            return;
        }
        if (!userApiKey) { // Validar que la API Key no esté vacía
            outputArea.innerHTML = '<p><em>Por favor, introduce tu API Key en el campo correspondiente.</em></p>';
            return;
        }

        // Mostrar indicador de carga y deshabilitar botón
        loadingIndicator.style.display = 'block';
        outputArea.innerHTML = ''; // Limpiar salida anterior
        generateButton.disabled = true;
        generateButton.textContent = 'Generando...';

        // --- Construir el Prompt para la IA (sin cambios) ---
        const prompt = `
        Dada la siguiente descripción de un problema complejo proporcionada por un usuario:
        "${problemText}"

        Por favor, genera 3 analogías, metáforas o pequeños fragmentos de historias distintas y creativas.
        Cada una debe ofrecer una perspectiva nueva y útil sobre el problema descrito, ayudando al usuario a desbloquear su pensamiento y encontrar enfoques diferentes.
        Enfócate en la esencia del problema y cómo se podría ver desde otro ángulo.
        Presenta cada perspectiva de forma clara y separada (por ejemplo, usando saltos de línea o guiones).
        Sé conciso pero inspirador. No incluyas introducciones o conclusiones genéricas, solo las 3 perspectivas.
        `;

        try {
            // --- Realizar la llamada a la API de OpenRouter ---
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Usar la clave API proporcionada por el usuario (igual que antes)
                    'Authorization': `Bearer ${userApiKey}`,
                    // CAMBIO OPCIONAL: Headers recomendados por OpenRouter para identificar tu sitio
                    // Reemplaza '<TU_URL_O_NOMBRE>' con la URL real donde alojarás la app o un nombre identificativo
                    'HTTP-Referer': '<TU_URL_O_NOMBRE>',
                    'X-Title': 'Generador Analogias IA', // Puedes cambiar este título
                },
                body: JSON.stringify({
                    // CAMBIO: Usar un identificador de modelo compatible con OpenRouter
                    // Puedes elegir otros modelos disponibles en OpenRouter, consulta su documentación.
                    model: "openai/gpt-3.5-turbo",
                    messages: [
                        { role: "system", content: "Eres un asistente experto en creatividad y resolución de problemas, especializado en generar analogías útiles y perspectivas novedosas." },
                        { role: "user", content: prompt }
                    ],
                    max_tokens: 300,
                    temperature: 0.75
                })
            });

             // --- Manejo de la respuesta y errores (ligeramente ajustado para claridad) ---
            if (!response.ok) {
                let errorData;
                let errorMessage = `Error ${response.status}: ${response.statusText}`;
                try {
                    errorData = await response.json();
                    // OpenRouter puede tener una estructura de error ligeramente diferente
                    errorMessage = errorData?.error?.message || JSON.stringify(errorData) || errorMessage;

                    // Mensajes específicos más genéricos o adaptados a OpenRouter si es necesario
                    if (response.status === 401) { // Unauthorized
                       errorMessage += " Verifica que tu API Key de OpenRouter sea correcta y tenga fondos/créditos disponibles.";
                    } else if (response.status === 429) { // Rate limit / Quota Exceeded
                        errorMessage += " Has excedido los límites de uso (peticiones o cuota) de tu API Key en OpenRouter.";
                    } else if (response.status === 400) { // Bad Request (podría ser el modelo no existe)
                         errorMessage += " Hubo un problema con la solicitud (ej: ¿el modelo especificado es válido en OpenRouter?).";
                    }

                } catch (e) {
                    // Si el cuerpo del error no es JSON, usar el statusText como fallback
                     console.error("No se pudo parsear el JSON del error:", e);
                }
                 console.error("Respuesta completa del error:", response);
                throw new Error(`Error de la API: ${errorMessage}`);
            }

            const data = await response.json();
            // La estructura de respuesta de OpenRouter es compatible con la de OpenAI
            const generatedText = data.choices[0]?.message?.content?.trim();

            if (generatedText) {
                 // Usar textContent es más seguro contra XSS que innerHTML si solo muestras texto plano
                 outputArea.textContent = generatedText;
            } else {
                outputArea.innerHTML = '<p><em>La IA no devolvió una respuesta válida. Revisa la consola o inténtalo de nuevo.</em></p>';
                console.log("Respuesta recibida sin contenido esperado:", data);
            }

        } catch (error) {
            console.error("Error al llamar a la API:", error);
            outputArea.innerHTML = `<p><strong>Error al generar perspectivas:</strong></p><p style="color: red;"><em>${error.message}</em></p><p><em>Revisa la consola del navegador (F12) para más detalles técnicos.</em></p>`;
        } finally {
            // Ocultar indicador de carga y habilitar botón
            loadingIndicator.style.display = 'none';
            generateButton.disabled = false;
            // Restaurar el texto original del botón que estaba en el HTML
            generateButton.textContent = '3. Generar Perspectivas con IA';
        }
    }

    // --- Event Listener ---
    generateButton.addEventListener('click', generatePerspectives);

});