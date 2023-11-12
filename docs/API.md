## Get the projects list
curl "https://script.google.com/macros/s/AKfycbxHnOPpkeuMWRqZvcHJSCIYt0XCyU3d88K-DaTtByh_fC1y5GqY0PSH4qx8quvMPpAs/exec?action=get-projects" \
-H "Accept: application/json"  -L

## Posting a new project
curl -X POST "https://script.google.com/macros/s/AKfycbxHnOPpkeuMWRqZvcHJSCIYt0XCyU3d88K-DaTtByh_fC1y5GqY0PSH4qx8quvMPpAs/exec?action=add-project" \
 -H 'Content-Type: application/json'  -L \
 -d '{"TimeStamp":"","Title":"Report Management System","Company":"TechCorp","Goal":"To manage inventory efficiently","Tasks":"1. Develop UI 2. Create Database 3. Implement features 4. Testing","Technology":"Java","Minimum_Team":"3","Date_Added":"2023-09-24","Duration":"8 weeks","Details_Link":"http://techcorp.com/projects/inv_mgmt","Contact_Phone":"555-1234","Contact_Email":"project@techcorp.com","Contact_Name":"John Doe","Active":""}'


## Reference links
 - https://github.com/tanaikech/taking-advantage-of-Web-Apps-with-google-apps-script/blob/master/README.md
 - https://gist.github.com/nyancodeid/abc7f2c3ce47eda753dee8a2b63070ab
 - https://stackoverflow.com/questions/45534493/using-authtoken-obtained-via-scriptapp-getauthtoken-to-call-web-apps-in-gas
