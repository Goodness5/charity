import httplib2, urllib, json
import uuid
import http.client

reference_id = str(uuid.uuid4())
print(reference_id)

headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': '4ae0c999e9cb4782914b1e0fa0c30787', 
}

params = urllib.parse.urlencode({})

body = json.dumps({
    "providerCallbackHost": '127.0.0.1:8000'
})

try:
    url = f"/v1_0/apiuser/{reference_id}/apikey?{params}"  # Construct the URL correctly
    conn = http.client.HTTPSConnection('ericssonbasicapi2.azure-api.net')
    conn.request("POST", url, body, headers)
    response = conn.getresponse()
    print(response.reason)
    data = response.read()
    print(data)
    conn.close()
except Exception as e:
    print("[Errno {0}] {1}".format(e.errno, e.strerror))
