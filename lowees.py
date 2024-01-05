from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    user_query = request.json['user_query']
    response = get_response(user_query)  
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run()  
