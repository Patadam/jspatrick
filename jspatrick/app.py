from flask import Flask, render_template, url_for
from forms import RegistrationForm, LoginForm
app = Flask(__name__)

app.config['SECRET_KEY'] = '39a9d6e42cee4e1479994bccffe098d7'


# Home Page Route
@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', style='/static/styles/index.css', javascript='/static/javascript/index.js')

@app.route('/about')
def about():
    return render_template('about.html', style='/static/styles/about.css', javascript='/static/javascript/about.js')


@app.route('/blog')
def blog():
    return render_template('blog.html', style='/static/styles/blog.css', javascript='/static/javascript/blog.js')


if __name__ == '__main__':
    app.run(debug=True)