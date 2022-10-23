import json


def cleanJSON():
    myDict = {}
    
    # Opening JSON file
    f = open('output.json')
    
    # returns JSON object as 
    # a dictionary
    data = json.load(f)
    
    data = data["data"] 

    myDict['first_name'] = data["name"]["first"]
    myDict['last_name'] = data["name"]["last"]
    myDict['phone_number'] = data["phone_numbers"][0]
    if 'website' in data['websites']:
        myDict['website'] = data["websites"][0]
    else:
        myDict['website'] = None
    myDict[ 'email'] = data['emails'][0]
    if 'location' in data:
        if 'state' in data['location']:
             myDict['state'] = data["location"]["state"]
        else:
            myDict['state'] = ''
            
        myDict['country'] = data["location"]["country"]
        myDict["city"] = data["location"]["city"]

    i = 1
    for edu in data["education"]:
        myDict[f"university_{i}"] = edu["organization"]
        myDict[f"education_{i}"] = edu["accreditation"]["input_str"]
        myDict[f"gpa_{i}"] = edu["grade"]["raw"]
        myDict[f"location_{i}"] = edu["location"]["raw_input"]
        i += 1
    myDict[f"education_count"] = i - 1
        
    i = 1
    for work in data["work_experience"]:
        myDict[f"company_{i}"] = work["organization"]
        myDict[f"job_{i}"] = work["job_title"]
        myDict[f"location_{i}"] = work["location"]["raw_input"]
        myDict[f"description_{i}"] = work["job_description"]
        if "dates" in work:
            myDict[f"endDate_{i}"] = work["dates"]["end_date"]
            i += 1
    myDict[f"work_count"] = i - 1

    i = 1
    for skill in data["skills"]:
        myDict[f"skill_{i}"] = skill['name']
        i += 1
    myDict[f"skill_count"] = i - 1
        
    for section in data["sections"]:
        if section["section_type"] == "Projects":
            myDict["projects"] =  section["text"]
            break
    myDict["approval_status"] = "0"
    return myDict
    