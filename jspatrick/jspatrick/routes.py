from flask import render_template, url_for, flash, redirect
from jspatrick.forms import RegistrationForm, LoginForm
from jspatrick.models import User, Post
from jspatrick import app

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

@app.route('/register', methods=['GET','POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html', title='Register', form=form)

@app.route('/login', methods=['GET','POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Plase check username and password', 'danger')
    return render_template('login.html', title='Login', form=form)



