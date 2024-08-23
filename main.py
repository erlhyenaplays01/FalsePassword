user_name = input("What is your name? ")
fake_pwd = input("Set password: ")
logged_in = False
req_attempts = int(input("how many times must the correct password be entered? "))
correct_attempts = 0

while not logged_in:
    pwd_attempt = input("Password, Please: ")

    if pwd_attempt == fake_pwd:
        correct_attempts += 1

        if correct_attempts >= req_attempts:
            print("Success!")
            logged_in = True
            print(f"Hello, {user_name}. Your password is {fake_pwd}")

    else:
        print("incorrect password, please try again.")

