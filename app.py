from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

@app.route("/")
def login():
    return render_template("form.html")


@app.route("/pdf", methods=["POST"])
def render_form():
    # from render_html import render_html
    # render_html()
    from render_pdf import generate_pdf
    html_file = "templates/form.html"
    output_path = "pdf_output/first_output"
    generate_pdf(html_file,output_path)
    return "generated_pdf"
    


if __name__ == "__main__":
    app.run(debug=True, port="5003")