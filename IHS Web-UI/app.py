from flask import Flask, render_template, request, session, redirect, url_for
from test_data import test_data
#from interfaces.check_repo import *

app = Flask(__name__)
app.secret_key = 'supersecretkey'

data = test_data
class User: 
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password
    
    def __repr__(self):
        return f'<User: {self.username}>'

users = [User(id=hash('username'), username='username', password='password')]


@app.route('/', methods=['GET', 'POST'])
def login(): 
    if request.method == 'POST':
        session.pop('user_id', None)

        username = request.form['username']
        password = request.form['password']

        logging_user = None
        for user in users:
            if user.username == username:
                logging_user = user

        if logging_user and logging_user.password == password:
            session['user_id'] = logging_user.id
            return redirect(url_for('registry'))
        
        return redirect(url_for('login'))

    return render_template('login.html')

@app.route('/registry', methods=['GET','POST'])

def registry():
    if request.method =="POST": 
        repo_name = request.form.get('repo_name')
        return redirect(url_for('repo', repo_name = repo_name))     
        
        
    return render_template('registry.html', data = data)


@app.route('/repo/<repo_name>')
def repo(repo_name):   
    for repo in data: 
        if repo['repo_name'] == repo_name: 
            return render_template('repo.html', data = repo)

@app.route('/report')
def report():
    return render_template('example_report.html')


if __name__ == '__main__':
    app.run()
