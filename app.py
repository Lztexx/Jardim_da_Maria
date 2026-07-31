from flask import Flask, render_template, request, redirect
import os
from werkzeug.utils import secure_filename
from database import (
    criar_banco,
    adicionar_pagina,
    listar_paginas,
    excluir_pagina,
    buscar_pagina,
    atualizar_pagina
)

app = Flask(__name__)

UPLOAD_FOLDER = "static/img/uploads"

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# Cria o banco de dados caso ainda não exista
criar_banco()


@app.route("/teste")
def teste():
    return "FUNCIONOU"


@app.route("/")
def entrada():
    return render_template("entrada.html")


@app.route("/menu")
def menu():
    return render_template("menu.html")


@app.route("/jardim")
def jardim():
    return render_template("jardim.html")


@app.route("/casa")
def casa():
    return render_template("casa.html")


@app.route("/estufa")
def estufa():
    return render_template("estufa.html")


@app.route("/livro")
def livro():

    paginas = listar_paginas()

    return render_template(
        "livro.html",
        paginas=paginas
    )


# ADICIONAR NOVA PÁGINA
@app.route("/nova", methods=["GET", "POST"])
def nova():

    if request.method == "POST":

        titulo = request.form["titulo"]
        texto = request.form["texto"]
        arquivo = request.files["imagem"]

        nome_imagem = ""

        if arquivo.filename != "":

            nome_imagem = secure_filename(arquivo.filename)

            caminho = os.path.join(
                app.config["UPLOAD_FOLDER"],
                nome_imagem
            )

            arquivo.save(caminho)

        adicionar_pagina(
            titulo,
            texto,
            nome_imagem
        )

        return redirect("/banco")

    return render_template("nova_pagina.html")

@app.route("/excluir/<int:id>")
def excluir(id):

    excluir_pagina(id)

    return redirect("/banco")

@app.route("/editar/<int:id>", methods=["GET", "POST"])
def editar(id):

    pagina = buscar_pagina(id)

    if request.method == "POST":

        titulo = request.form["titulo"]
        texto = request.form["texto"]

        imagem = pagina[3]

        atualizar_pagina(
            id,
            titulo,
            texto,
            imagem
        )

        return redirect("/banco")

    return render_template(
        "editar.html",
        pagina=pagina
    )

@app.route("/banco")
def banco():

    paginas = listar_paginas()

    return render_template(
        "banco.html",
        paginas=paginas
    )

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)