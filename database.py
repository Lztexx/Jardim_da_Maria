import sqlite3

def conectar():
    return sqlite3.connect("database.db")


def criar_banco():

    conn = conectar()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS paginas (

        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        texto TEXT NOT NULL,
        imagem TEXT
    )
    """)

    conn.commit()
    conn.close()

    print("Banco criado com sucesso!")


def adicionar_pagina(titulo, texto, imagem):

    conn = conectar()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO paginas
        (titulo, texto, imagem)
        VALUES (?, ?, ?)
    """, (titulo, texto, imagem))

    conn.commit()
    conn.close()

    print("Página adicionada!")

def listar_paginas():
    conn = conectar()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM paginas")
    paginas = cursor.fetchall()

    conn.close()

    return paginas
    conn = conectar()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM paginas")
    paginas = cursor.fetchall()

    conn.close()

    return paginas 

def excluir_pagina(id):

    conn = conectar()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM paginas WHERE id=?",
        (id,)
    )

    conn.commit()
    conn.close()


def buscar_pagina(id):

    conn = conectar()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM paginas WHERE id=?",
        (id,)
    )

    pagina = cursor.fetchone()

    conn.close()

    return pagina 

def atualizar_pagina(id, titulo, texto, imagem):

    conn = conectar()
    cursor = conn.cursor()

    cursor.execute("""
        UPDATE paginas
        SET titulo=?,
            texto=?,
            imagem=?
        WHERE id=?
    """, (titulo, texto, imagem, id))

    conn.commit()
    conn.close()