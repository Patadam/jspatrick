from flask import Flask, render_template, url_for

app  = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html') #Returns the index.html @ jspatrick.netlify.app/ - path address

@app.route("/project/<name>")
def project(name):
    return render_template("/Projects/"+name+"/"+name+".html")

@app.errorhandler(404)
def not_found(event):
    return render_template("/Admin/Errors/404/404.html")

if __name__ == "__main__":
    app.run(debug=False)