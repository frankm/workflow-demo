Create a config file using the values in a GitHub Action repository secret. The single secret variable contains multiple key value pairs. Allows to manually trigger workflow. See **workflow_dispatch** entry in **node.js.yml**

Demo reads value from repository secret, creates a config file, assigns values to local variables, and displays values to console.

Convert multiline file into base64 string
1. Create .env file with multiple key-value pairs
2. Add .env file name to .gitignore file
3. (Assume .env is file name) In terminal: base64 .env > env.txt

Copy contents to repository secret
1. In GitHub repo, click Settings | Secrets | Actions
2. Click button: New repository secret
3. Choose Name, eg: ENV_STAGING_LOCAL
4. Paste contents of env.txt into Value field. Delete env.txt file later.
5. Click button: Add secret

Create config file from repository  secret
1. In Github repo, click: Actions | New workflow. Select Node.js and click Configure
2. Modify file to look like file in sample: .github/workflow/
3. ENV_FILE contains content of repository 
4. run command decodes base64 string into multiline file and saves contents to root directory

Import dotenv to read value from config file
1. npm install dotenv
2. In file, that wants values, 
> const dotenv = require('dotenv'); </br>
> dotenv.config({ path: '.env.staging.local' });

3. Assign environment values to variables
> const bob = process.env.DB_USERNAME; </br>
> const mary = process.env.DB_PASSWORD;


