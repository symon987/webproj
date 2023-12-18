import Flask as flask


app = flask(app)

app.route('/')
def link1():
    render_template('link.html')

app.route('/link2')
def link2():
    render_template('link2.html')


