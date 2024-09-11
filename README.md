## GradePlus
ECE 6400 Project

> [!WARNING]
> This repository will be made private soon. Please complete the setup by **8 PM Friday, 13 September 2024**. After this date, please send me your github username so I can add you to the repository manually.

### Team Members
Not shown for privacy

## Installation Guide

### Software Requirements

Download and install the following software:

- [XAMPP](https://www.apachefriends.org/) (Comes with Apache, PHP, and MySQL bundled)
- [Git](https://git-scm.com/downloads) (Required - macOS users can `brew install git` if needed)
- Any Chromium Browser (Google Chrome, Microsoft Edge, etc.)

### VSCode Extensions

- PHP Server by brapifra (Required)
- php cs fixer by junstyle (Required)
- Live Server by Ritwick Dey (Optional)
- GitHub Copilot (Recommended - Students get free GitHub Pro)

### GitHub

You need to have a GitHub account. Please create one if you have not done so.

> [!TIP]
> For GitHub Copilot, you need to get GitHub Pro which is free for students. However, GitHub will ask for document verification which may take 2-3 business days.

Once that is done, fork this repository first and then clone it to your local machine.

<img width="400px" src="https://github.com/user-attachments/assets/d5856cfb-6ea4-426f-b717-7f788d5511a5">

Use the following command to clone the forked repository to your local machine.

```
git clone <YOUR FORKED REPO ADDRESS> <OPTIONAL FOLDER NAME>
```

<img width="400px" src="https://github.com/user-attachments/assets/3cc28e2f-5526-44f2-9741-6ff8b70ad942">

### XAMPP

To run the initial boiler plate code, you only need PHP which comes bundled with XAMPP. XAMPP will be used to run the PHP server and MySQL database in the future. Here is an quick look. Just clicking the first two buttons will do the job. No need for complex MySQL or Docker setups. Again not needed for initial setup.

<img width="400px" src="https://github.com/user-attachments/assets/4e48b96c-a4b2-488b-b4c1-ff2142fc9b36">

Install XAMPP in the root directory of your C: drive. Please add the PHP directory to user PATH during or after installation. In some cases, you may need to add to VSCode settings as well. It would be `C:\xampp\php`.

<img width="400px" src="https://github.com/user-attachments/assets/68df2e84-7ebc-4b80-92a5-4bfcc8ab6db0">
<br><br>

> [!IMPORTANT]
> Finally add php cs fixer VSCode Extenstion as the default formatter. This is **important**. If we do not use a consistent formatter, PRs may have incorrect indentation when you `CTRL+S` php files leading to huge unnecessary changes across the whole file.

<img width="400px" src="https://github.com/user-attachments/assets/694af1ea-c7f5-4024-9fdf-052dad042019">

### Running the Code
Go to the `index.php` file in the project folder after you have cloned the repository. Right click and select `PHP Server: Serve Project`. This will open up your default browser automatically.
You should see a green themed GradePlus website with the access signup sheet. If you see that, you are good to go.

If you have any questions, please give me a tag in the discord or `asamanta@mun.ca`.

Best Regards,
Akash Samanta


