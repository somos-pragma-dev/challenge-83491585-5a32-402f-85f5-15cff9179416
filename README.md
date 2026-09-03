# Diseño y Desarrollo de Componentes Standalone en Angular

El equipo de desarrollo de una aplicación bancaria necesita implementar componentes standalone en Angular que utilicen signals y el nuevo control flow syntax para mejorar la modularidad y reutilización del código. El dominio de la banca requiere que los componentes sean robustos y manejen correctamente los estados y transiciones del negocio. Los componentes deben ser capaces de gestionar eventos del dominio como 'solicitud de préstamo aprobada' o 'pago rechazado', y mantener la consistencia de los datos a lo largo de su ciclo de vida.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | componentes standalone con signals y nuevo control flow syntax |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición de Requisitos

**Objetivo:** Establecer los requisitos funcionales y no funcionales para los componentes standalone.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar los eventos del dominio que deben manejar los componentes.
- Definir las propiedades operativas requeridas (consistencia, latencia, disponibilidad) para cada componente.

**Entregable:** Documento de requisitos que detalla los eventos del dominio y las propiedades operativas para cada componente.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los diferentes estados que puede tener una solicitud de préstamo.
- Piensa en cómo los componentes deben reaccionar ante eventos asíncronos del dominio.

</details>

### Fase 2: Diseño de Componentes

**Objetivo:** Diseñar los componentes standalone utilizando signals y el nuevo control flow syntax.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crear un diseño conceptual de los componentes que incluya la gestión de estados y eventos del dominio.
- Identificar posibles errores comunes y cómo mitigarlos.

**Entregable:** Diagrama de diseño que muestra la estructura y las interacciones de los componentes.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza signals para manejar la comunicación entre componentes.
- Considera el nuevo control flow syntax para mejorar la legibilidad y mantenibilidad del código.

</details>

### Fase 3: Implementación de Componentes

**Objetivo:** Implementar los componentes standalone según el diseño creado.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crear los componentes en Angular utilizando signals y el nuevo control flow syntax.
- Asegurar que los componentes manejen correctamente los eventos del dominio y mantengan la consistencia de los datos.

**Entregable:** Código fuente de los componentes standalone implementados.

<details>
<summary>Pistas de conocimiento</summary>

- Prueba los componentes con diferentes eventos del dominio para asegurar que funcionan correctamente.
- Utiliza pruebas unitarias para validar el comportamiento de los componentes.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los componentes standalone en Angular y por qué son útiles en este contexto?
- **paraQueSirve**: ¿Para qué sirven los signals y el nuevo control flow syntax en la gestión de eventos del dominio?
- **comoSeUsa**: ¿Cómo se utilizan signals y el nuevo control flow syntax en la implementación de los componentes?
- **erroresComunes**: ¿Qué errores comunes pueden ocurrir al implementar componentes standalone y cómo se pueden mitigar?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de componentes standalone en términos de modularidad y reutilización del código?

## Criterios de Evaluacion

- Definición clara de requisitos funcionales y no funcionales para los componentes.
- Diseño conceptual de los componentes que incluye la gestión de estados y eventos del dominio.
- Implementación correcta de los componentes utilizando signals y el nuevo control flow syntax.
- Manejo adecuado de errores comunes y mitigación de los mismos.
- Validación del comportamiento de los componentes a través de pruebas unitarias.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
