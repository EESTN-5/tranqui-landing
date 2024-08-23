# Tranqui App



## Descripción
Descripcion de la app


## Lineamientos



### Ramas



1. **Rama Principal (`main`)**:

   - No se debe hacer push directamente a `main`.

   - Todos los cambios deben ser enviados a través de Pull Requests (PRs).



2. **Ramas de Funcionalidad (Feature Branches)**:

   - Crea una nueva rama a partir de `main` para cada nueva funcionalidad o corrección de errores.

   - Nombrado de ramas: usa un prefijo descriptivo seguido de una breve descripción. Ejemplos:

     - `feat/nueva-funcionalidad`

     - `fix/bug-en-el-sistema`



### Commits



1. **Mensajes de Commit**:

   - Los mensajes de commit deben ser claros y descriptivos.

   - Usa el formato:

     ```

     tipo(parte_afectada): descripción breve



     Explicación detallada (si es necesaria)

     ```

   - Tipos comunes: `feat` (funcionalidad), `fix` (corrección de errores), `docs` (documentación), `style` (formato, sin afectar el código), `refactor` (cambios en el código sin cambiar funcionalidades), `test` (añadir o modificar tests).



2. **Ejemplo de mensaje de commit**:

   ```

   feat(UI): añadir botón de recarga



   Se añadió un botón de recarga en la pantalla principal para mejorar la experiencia del usuario.

   ```



### Push y Pull Requests



1. **Prohibido hacer push a `main`**:

   - Bajo ninguna circunstancia se debe hacer push directo a la rama `main`.

   - Todos los cambios deben pasar por el proceso de Pull Request (PR).



2. **Realización de Pull Requests**:

   - Asegúrate de realizar PRs breves y centrados en una sola funcionalidad o corrección.

   - Describe claramente qué problema resuelve la PR o qué funcionalidad añade.

   - Relaciona la PR con los Issues correspondientes, si es aplicable.



3. **Revisión de Código**:

   - Todos los PRs deben ser revisados por al menos un miembro del equipo antes de ser fusionados.

   - Responde a los comentarios de revisión y realiza los cambios necesarios antes de la aprobación final.



## Estándares de Código



- Asegúrate de seguir los estándares de codificación definidos en el proyecto. Consulta la guía de estilo específica en [ruta/a/la/guia].

- Utiliza las herramientas de linting y formateo automatizado que hemos configurado.



## Pruebas



- Antes de enviar una PR, asegúrate de que todas las pruebas pasen correctamente.

- Añade pruebas para cualquier nueva funcionalidad o corrección de errores.



## Documentación



- Mantén la documentación actualizada con cualquier cambio significativo en el código o la funcionalidad.

- Consulta [ruta/a/la/documentacion] para obtener más detalles.



## Comunicación



- Utiliza [herramienta de comunicación] para discutir cualquier cambio importante o para reportar problemas de manera informal antes de crear un Issue formal.



## Agradecimientos



Gracias por contribuir a [nombre del proyecto]. Juntos, mantendremos un código limpio y un proceso de desarrollo ágil.