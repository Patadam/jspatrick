from flask import Flask, render_template, url_for
app = Flask(__name__)

# Dummy content
posts = [{},{}];



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
    return render_template('blog.html', posts=posts)


if __name__ == '__main__':
    app.run(debug=True)