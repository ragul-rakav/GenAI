import google.generativeai as genai
import os

import pymysql as mysql
genai.configure(api_key='AIzaSyBBgk4J0ZKRvevNNpH9RSVjhHotVu1OxHE')
connect=mysql.connect(
    host= "localhost",
    database= "genai",
    user= "root",
    password="6454",
  
)
def access_table_from_database():
    cursor = connect.cursor()
    query = "SELECT * FROM NOMINAL_ROLL"
    cursor.execute(query)
    results=cursor.fetchall()
    cursor.close()
    return str(results)
commands={
    "persona":"you are a bot that only meant for analysing the table from database and your creator is Cadet. K S RAGUL RAKAV",
    "objective":"answer the question based on the user input by analysing the sql table",
    "instruction":"you must only answer question related to the table in database and must also answer questions about you like who are you? what can you do? who is your creator? and many more  must not answer any other questions like general question If they ask any other irrelavant question say I am a bot and I am meant only for questions about the student informationsand you must answer questions about you like who are you? also",
    "format":"You must give the output in dictionary format only and for the questions about you like (who are you?) you must answer in string format only. ",
    "exampler":"if i ask about sanjay p you must give all details of sanjay and if  i ask about a specific information about some one like roll_no of sanjay p you display his roll number only "
}  
commands=str(commands)
model=genai.GenerativeModel(model_name="gemini-1.5-flash",system_instruction=commands)
while True:
    user_input = input("Enter your question: ")
    if user_input.lower() in ("exit","quit"):
        break
    else:
        table_data=access_table_from_database()
        table_data_str=str(table_data)
        
        response=(model.generate_content(f"{user_input} {table_data_str}"))
        print(response.text)
        print(" ")