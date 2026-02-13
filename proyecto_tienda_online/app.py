from flask import Flask

app = Flask(__name__)


@app.route("/")
def index():
    return (
        "<h1>Bienvenido a Tienda Online – Catálogo y ofertas</h1>"
        "<p>Usa /producto/&lt;nombre&gt; para ver un producto. Ej: /producto/Laptop</p>"
    )


@app.route("/producto/<nombre>")
def producto(nombre):
    return f"Producto: {nombre} – disponible."


@app.route("/item/<codigo>")
def item(codigo):
    return f"Inventario: Item {codigo} – estado: Disponible."


if __name__ == "__main__":
    app.run(debug=True)
