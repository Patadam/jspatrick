from flask import render_template, url_for, flash, redirect, request
from jspatrick import app, db, bcrypt
from jspatrick.forms import RegistrationForm, LoginForm
from jspatrick.models import User, Post

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
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash(f'Your account has been created! You are now able to log in', 'success')
        return redirect(url_for('login'))
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



