from flask import Flask, render_template

app = Flask(__name__)

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
    return render_template("livro.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)