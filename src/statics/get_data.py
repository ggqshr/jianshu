from flask import Flask,make_response
import json
app=Flask(__name__)

@app.route('/list.json')
def hello_world():
    resp = make_response()
    resp.headers['content-type'] = 'test/html'
    resp.headers['Access-Control-Allow-origin'] = 'http://localhost:3000'
    resp.headers['Access-Control-Allow-Methods'] = 'GET, POST'
    resp.headers['Access-Control-Allow-Credentials'] = 'true'
    ll = ["docker","swy"]
    resp.response = json.dumps(ll)
    return resp

if __name__ == "__main__":
    app.run(
        host='localhost',
      port= 5000,
    )