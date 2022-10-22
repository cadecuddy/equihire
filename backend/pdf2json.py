import json
from affinda import AffindaAPI, TokenCredential

# Resume token runs out after 200 requests (hit about 5)
TOKEN = "5540b6a10e4f0cabe2b9ace4e9b0f5b19d6c78e1"
PATH = input("Input file path: ")

credential = TokenCredential(token=TOKEN)
client = AffindaAPI(credential=credential)

def main():
    with open(PATH, "rb") as f:
        resume = client.create_resume(file=f)
    out = open("output.json", "w")
    jsonFormat = json.dumps(resume.as_dict(), indent=4)
    # print(jsonFormat)
    out.write(jsonFormat)
        
main();
