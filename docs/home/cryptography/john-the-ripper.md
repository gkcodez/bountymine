---
title: John the Ripper
sidebar_position: 4
description: John the Ripper hash cracking tool.
---

## Introduction
- John the Ripper is a well-known, well-loved, and versatile hash-cracking tool. 
- It combines a fast cracking speed with an extraordinary range of compatible hash types.

## Basic Terms
- Hashing functions are designed as one-way functions.
- **Dictionary attack** - If we know the hashing algorithm, we can hash a large number of words, called a dictionary. If there is a match then the hash is cracked.
- **Jumbo John** - Most popular extended version of john the ripper.
- To find the version of john installed use the `john` command.

## Wordlists
- A good collection of wordlists can be found in the seclists repository (https://github.com/danielmiessler/SecLists/)
- Rockyou wordlist can be found in the path `/Passwords/Leaked-Databases`.
- Extract the wordlist tar file using `tar xvzf rockyou.txt.tar.gz`

## Basic Syntax
- Basic syntax of john the ripper is `john [options] [file path]`.
  - `john` - Invokes the John the Ripper program
  - `[options]` - Specifies the options you want to use
  - `[file path]` - The file containing the hash you’re trying to crack; if it’s in the same directory, you won’t need to name a path, just the file.


## Automatic Cracking
- John can automatically identify the type of hash if it is not specified by the user but it is unreliable.
- To automatically identify and crack the hash use the below command
  ```
  john --wordlist=/usr/share/wordlists/rockyou.txt hash_to_crack.txt
  ```

## Identifying Hashes
- Identify the hashes using one of the below options 
    - Using the online website: https://hashes.com/en/tools/hash_identifier
    - Using the hash id python file:  https://gitlab.com/kalilinux/packages/hash-identifier/-/tree/kali/master

## Format Specific Cracking
- Specify the format using the below command
    ```
    john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt hash_to_crack.txt
    ```
- Note: if you’re dealing with a standard hash type, `raw-` prefix should be added. For example: `md5` would become `raw-md5`.
- To check if you need to add the prefix or not, you can list all of John’s formats using `john --list=formats`.
- To check specific format use the command `john --list=formats | grep -iF "md5"`.

## Cracking Windows Authentication Hashes
- NThash is the standard hashing format in modern windows operating systems. It is also referred to as NTLM which refers the previous version of windows format.
- In windows, Security Account Manager (SAM) is used to store the account information including the usernames and hashed passwords.
- To get dump of SAM database, tools like `mimikatz` or active directory database `NTDS.dit` can be used.
- Hash need not be cracked always to perform previlege escalation as often `Pass the Hash` attacks are performed.
- Hash cracking is suitable when there is a weak password policy.
- Use the `NT` format to crack the NT hash.

## Cracking /etc/shadow Hashes
- In linux, the `/etc/shadow` file stores the password hashes. 
- It also stores additional information such as the date of last password change, password expiration information, etc.
- This file is only accessible by the root user.

### Unshadowing
- John is very particular about the data it needs to work with.
- For this reason, in order to crack `/etc/shadow`, we need to combine it with `/etc/passwd`.
- John has an inbuilt tool called `unshadow` for this purpose.
- Either pass the whole file path like below.
    ```
    unshadow /etc/passwd /etc/shadow > unshadowed.txt
    ```
- Create two files `local_passwd` and `local_shadow` which would contain the lines from `/etc/passwd` and `/etc/shadow`.
    ```
    unshadow local_passwd local_shadow > unshadowed.txt
    ```

### Cracking the password
- To crack the hashes we should feed the output from unshadow to john using the below command.
    ```
    john --wordlist=/usr/share/wordlists/rockyou.txt --format=sha512crypt unshadowed.txt
    ```

## Single Crack Mode
- In single cracking mode, John uses only the information provided in the username to try and work out possible passwords heuristically by slightly changing the letters and numbers contained within the username.
- Consider the username `Markus`. Some possible passwords are `Markus1, Markus2, Markus3, MArkus, MARkus, MARKus, Markus!, Markus$, Markus*`.
- This technique is called **word mangling**.
- To crack the password for the username mike, we would use the below command.
    ```
    john --single --format=<HASH_FORMAT> hashes.txt
    ```
- Note: In single crack mode, we need to prepend the username to be cracked to the password hash like below
    ```
    mike:1efee03cdcb96d90ad48ccc7b8666033
    ```

## Custom Rules
- Custom rules can be defined for john to create passwords dynamically.
- Common pattern people use to bypass password complexiety check is the password with a capital letter first and a number followed by a symbol at the end.
- For example: if `polopassword` is restricted users go with `Polopassword1!`.
- We can define rules in john which matches this kind of patterns.
- Custom rules are defined in the `john.conf` file.
- This file can be found in `/opt/john/john.conf` or `/etc/john/john.conf`.
- Syntax for custom rules is as below.
  - `[List.Rules:THMRules]` - To define the name of rule.
  - `Az` - Takes the word and appends it with the characters you define
  - `A0` - Takes the word and prepends it with the characters you define
  - `c` - Capitalises the character positionally
-  Add character sets in square brackets [ ] to define what characters to be used and where they should be used. 
-  These follow the modifier patterns inside double quotes " "
  - [0-9]: Will include numbers 0-9
  - [0]: Will include only the number 0
  - [A-z]: Will include both upper and lowercase
  - [A-Z]: Will include only uppercase letters
  - [a-z]: Will include only lowercase letters
  - [a]: Will include only a
  - [!£$%@]: Will include the symbols !, £, $, %, and @
- To match Polopassword1! from the word polopassword, use the below rule
    ```
    [List.Rules:PoloPassword]
    cAz"[0-9] [!£$%@]"
    ```
    - `c` - Capitalises the first letter
    - `Az` - Appends to the end of the word
    - `[0-9]` - A number in the range 0-9
    - `[!£$%@]` - The password is followed by one of these symbols
- Once the custom rule is created. Use the rule by the below command
    ```
    john --wordlist=[path to wordlist] --rule=PoloPassword [path to file]
    ```

## Cracking Password Protected Zip Files
- Use `zip2john` to generate the password hash using the below command
    ```
    zip2john zipfile.zip > zip_hash.txt
    ```
- Crack the password using the generated hash using the below command
    ```
    john --wordlist=/usr/share/wordlists/rockyou.txt zip_hash.txt
    ```

## Cracking Password-Protected RAR Archives
- Use `rar2john` to generate the password hash using the below command
    ```
    rar2john rarfile.rar > rar_hash.txt
    ```
- Crack the password using the generated hash using the below command
    ```
    john --wordlist=/usr/share/wordlists/rockyou.txt rar_hash.txt
    ```

## Cracking SSH Keys with John
- Use `ssh2john` to generate the password hash using the below command
    ```
    /opt/john/ssh2john.py id_rsa > id_rsa_hash.txt
    ```
- Crack the password using the generated hash using the below command
    ```
    john --wordlist=/usr/share/wordlists/rockyou.txt id_rsa_hash.txt
    ```

For more information on John the Ripper, Check out https://www.openwall.com/john/.