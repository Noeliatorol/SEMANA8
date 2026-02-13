# Proyecto: Tienda Online (proyecto_tienda_online)

Descripción breve:

Este proyecto es una aplicación web básica en Flask que implementa rutas estáticas y dinámicas para una "Tienda Online" de ejemplo.

Archivos creados:

- [proyecto_tienda_online/app.py](proyecto_tienda_online/app.py#L1-L200)
- [proyecto_tienda_online/requirements.txt](proyecto_tienda_online/requirements.txt#L1-L5)
- [proyecto_tienda_online/.gitignore](proyecto_tienda_online/.gitignore#L1-L10)
- [proyecto_tienda_online/Procfile](proyecto_tienda_online/Procfile#L1-L1)

Instalación y ejecución (Windows PowerShell):

```powershell
python -m venv venv
.\venv\Scripts\Activate
pip install -r requirements.txt
python app.py
```

Visita `http://127.0.0.1:5000/` para ver la página principal.

Rutas de ejemplo:

- `/` : Página principal con nombre del sistema.
- `/producto/<nombre>` : Muestra el estado del producto.
- `/item/<codigo>` : Muestra estado en inventario.

Subir a GitHub:

```bash
git init
git add .
git commit -m "Inicial: proyecto Tienda Online"
# crea un repo en GitHub y luego:
git remote add origin https://github.com/USUARIO/REPO.git
git branch -M main
git push -u origin main
```

Despliegue en Render (resumen):

1. Crea un nuevo Web Service en Render y conecta tu repositorio de GitHub.
2. Selecciona rama `main`.
3. Build command: `pip install -r requirements.txt`
4. Start command: `gunicorn app:app`
5. Despliega y verifica la URL proporcionada por Render.

Sustituye `USUARIO/REPO` por tu cuenta y repo reales.
