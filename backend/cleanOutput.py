from dataclasses import dataclass
import dacite
import json
# @dataclass
# class Body: 
#     day:int
#     month:int
#     year:int

# @dataclass
# class Dat:
#     response_time: int
#     body: Body
# data = {'response_time':12, 'body':{'day':1,'month':2,'year':3}}

# dat: Dat = dacite.from_dict(Dat,data)
# print(dat)
myDict = {}
  
# Opening JSON file
f = open('output.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)
  
# Iterating through the json
# list
# for i in data['data']:
data = data["data"]

myDict['first_name'] = data["name"]["first"]
myDict['last_name'] = data["name"]["last"]
myDict['phone_number'] = data["phone_numbers"][0]
myDict['website'] = data["websites"][0]
myDict[ 'emails'] = data['emails'][0]
myDict['state'] = data["location"]["state"]
myDict['country'] = data["location"]["country"]
myDict["city"] = data["location"]["city"]

i = 1
for edu in data["education"]:
    myDict[f"university_{i}"] = edu["organization"]
    myDict[f"education_{i}"] = edu["accreditation"]["input_str"]
    myDict[f"gpa_{i}"] = edu["raw"]
    myDict[f"location_{i}"] = ["location"]["raw_input"]
    i += 1
    # myDict[]

i = 1
for work in data["work_experience"]:
    myDict[f"job_{i}"] = work["job_title"]
    myDict[f"location_{i}"] = work["location"]["raw_input"]
    myDict[f"description_{i}"] = work["job_description"]
    myDict[f"endDate_{i}"] = work["dates"]["end_date"]
    i += 1

i = 1
for skill in data["skills"]:
                               
    
  
# Closing file
f.close()