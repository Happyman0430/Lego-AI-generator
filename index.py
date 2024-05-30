from flask import Flask, redirect, url_for, render_template, jsonify, send_from_directory, current_app, request, session
import os

app = Flask(__name__)

SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY

@app.route("/")
def index():
    return render_template('index.html')

