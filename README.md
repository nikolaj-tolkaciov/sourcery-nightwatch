# sourcery-nightwatch
## _Totorial_
## How?
### 1. Clone via Sourcetree

1. Click [Clone/New] button
2. Copy paste "https://github.com/nikolaj-tolkaciov/sourcery-nightwatch.git" to [Source Path / URL] input
3. Input desired path to store repository on your local machine in [Destination Path] input 
4. Click [Clone] button

### 2. Install

1. In cmd (comand line/terminal (Click [Windows Key] keyboard key and type "cmd")) navigate to the repository path selected in _part 1_
2. Run "npm install" command

### 3. Run tests

Run the Nightwatch tests:

1. In cmd navigate to the repository path selected in _part 1_ (not required if just completed _part 2_)
2. Run "npm test" command
3. It will fail at first, because of missing credentials
4. Navigate to repository path in File Explorer
5. Open [libs] folder
6. Edit [credentials.js] file (only available after first attempt)
7. Enter credentails used to login to Sourcery For Testers application under test