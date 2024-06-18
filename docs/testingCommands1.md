# Commands used during testing of Smart Email Notifier Project :

## 17-06-2024 : Testing Backend (sendEmail endpoint and server)

###  Step 1. Start the server using nodemon
```
cd backend

npm run dev
```

### Step 2: Open Postman
Open Postman on your computer. 


### Step 3: Create a New Request
Click on "New" in the top left corner of Postman and select "Request".
Name your request (e.g., "Send Test Email") and save it to a collection or create a new collection.

### Step 4: Configure the Request
Set the HTTP method to POST.
Enter the request URL:
```
http://localhost:5000/send-email.
```

### Step 5: Set Headers
Go to the "Headers" tab in Postman.
Add a new header:
```
Key: Content-Type
Value: application/json
```

### Step 6: Set the Request Body
Go to the "Body" tab in Postman.
Select "raw" and set the body type to JSON (application/json).
Enter the JSON body:
```
{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "This is a test email.",
  "html": "<p>This is a test email.</p>"
}
```
Replace recipient@example.com with the actual recipient's email address.

### Step 7: Send the Request
Click on the "Send" button to send the request.

### Step 8: Inspect the Response
Check the response in the lower part of the Postman interface.

**Success**: You should receive a response indicating that the email was sent successfully.
```
{
  "message": "Email sent successfully"
}
```

**Error**: If there is an error, the response will indicate what went wrong.
```
{
  "error": "Failed to send email"
}
```
Check the email inbox of the recipient to confirm that the email was received.