from flask import Flask, render_template
app = Flask(__name__)

# Dummy content
posts = [{},{}];



# Home Page Route
@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/blog')
def blog():
    return render_template('blog.html', posts=posts)


if __name__ == '__main__':
    app.run(debug=True)