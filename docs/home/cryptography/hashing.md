---
title: Hashing
sidebar_position: 3
description: Hashing notes.
---

## Introduction
- A hash value is a fixed-size string or characters that is computed by a hash function. 
- A hash function takes an input of an arbitrary size and returns an output of fixed length, i.e., a hash value. 
- Hashing is used to identify if a file is tampered by comparing the hash value with the original file hash value.
- Hashing also helps in storing passwords in database. The server then uses the hash function to ensure the correct value.

## Hash Functions
- Hash functions are **different from encryption**.
- Hash functions are computationally impractical to go from output to input.
- A hash function takes some input data of any size and creates a summary or digest of that data. 
- The output has a **fixed size**. 
- Any slight change in the input data, even a single bit, should cause a significant change in the output.
- Most common hashing algorithms are 
  - **MD5 (Message-Digest Algorithm 5)** - To generate MD5 hash use command `md5sum *.txt`.
  - **SHA1 (Secure Hash Algorithm 1)** - To generate SHA1 hash use command `sha1sum *.txt`.
  - **SHA256 (Secure Hash Algorithm 256)** - To generate SHA256 hash use command `sha256sum *.txt`.
- These hash function produce results in **hexadecimal format** which prints each raw byte as two hexadecimal digits.

## Hash Collision
- Hash collision is when two inputs have the same hash value.
- As the output is limited and the input is practically limitless, the hash collision is likely to happen.
- A good hashing algorithm will keep this collision probability to a negligible value.
- To calculate the number of outputs a hash function can generate, use the formula `2^number_of_bits`.
  - For a hash function that produces 4 bit hash value, the number of outputs is `2^4 = 16`
- The **pigeonhole effect** states that the number of items (pigeons) is more than the number of containers (pigeonholes) and some pigeons has to share the pigeonholes.

## Insecure Password Storage For Authentication
- Top 3 insecure password practices
  - Storing as plaintext. (Rockyou databreach)
  - Storing using deprecated encryption. (Adobe databreach)
  - Storing using insecure hashing algorithm. (LinkedIn databreach. SHA1 without salting.)

## Using Hashing For Secure Password Storage
- A Rainbow Table is a lookup table of hashes to plaintexts, so you can quickly find out what password a user had just from the hash.
- Websites like https://crackstation.net/ and https://hashes.com/en/decrypt/hash use massive rainbow tables to provide fast password cracking for hashes without salts.
- To protect against a rainbow table attack, use a secure password with unique salting.

## Recognizing Password Hashes
- Automated hash recognition tools often mix up hash types and are unreliable.
- Find different types of hashes in https://hashcat.net/wiki/doku.php?id=example_hashes

### Linux Passwords
- Previously on linux, the password hashes were stored on `/etc/passwd` which was readable by everyone.
- Nowadays, the password hashes are stored in `/etc/shadow` which is readable by root only.
- Each line in the shadow file consists of nine fields separated by colons(:).
- The first two fields are login name and encrypted passwords. More information on other fields can be found by using the command `man 5 shadow`.
- The encrypted password field contains hashed passphrase with four components.
  - Prefix (Algorithm ID)
  - Options (Parameters)
  - Salt
  - Hash
- The prefix is used to find the hashing algorithm.
- Most common unix style password prefixes can be found in the decreasing strength using the command `man 5 crypt`.
  | Prefix                         | Algorithm                                                                                                                                                                                        |
  | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `$y$`                          | yescrypt is a scalable hashing scheme and is the default and recommended choice in new systems                                                                                                   |
  | `$gy$`                         | gost-yescrypt uses the GOST R 34.11-2012 hash function and the yescrypt hashing method                                                                                                           |
  | `$7$`                          | scrypt is a password-based key derivation function                                                                                                                                               |
  | `$2b$`, `$2y$`, `$2a$`, `$2x$` | bcrypt is a hash based on the Blowfish block cipher originally developed for OpenBSD but supported on a recent version of FreeBSD, NetBSD, Solaris 10 and newer, and several Linux distributions |
  | `$6$ `                         | sha512crypt is a hash based on SHA-2 with 512-bit output originally developed for GNU libc and commonly used on (older) Linux systems                                                            |
  | `$md5`                         | SunMD5 is a hash based on the MD5 algorithm originally developed for Solaris                                                                                                                     |
  | `$1$`                          | md5crypt is a hash based on the MD5 algorithm originally developed for FreeBSD                                                                                                                   |

  ### MS Windows Password
  - MS Windows Password are hashed using New Technology LAN Manager (NLTM), a variant of MD4.
  - They are visually identical to MD4 and MD5. Use the context to determine the type of hash.
  - On windows, the password hashes are stored in Security Accounts Manager (SAM) and normal users are not allowed to access this.
  - Tools like mimikatz help to exist to circumvent MS Windows Security.

## Password Cracking
- Password hashes cannot be decrypted as they are not encrypted.
- Password hashes should be cracked by generating and comparing the hashes of many different inputs such as `rockyou.txt`.
- Tools like **Hashcat and John the Ripper** are commonly used for these purposes.
- **Graphics Processing Units (GPUs)** have thousands of cores and they are very good at mathematical calculations involved in the hash functions.
- Some hashing algorithms, such as **Bcrypt** are designed so that hashing on a GPU does not provide any improvement over CPU to prevent cracking.
- It is generally a good practice to **avoid VMs** for the purpose of password cracking as the VMs do not have access to host's graphics card and will be relatively slower.

## Cracking Hashes with Hashcat
- To crack the hashes using hashcat, use the below command
    ```
    hashcat -m <hash_type> -a <attack_mode> hashfile wordlist
    ```
  - `-m <hash_type>` specifies the hash-type in numeric format. For example, -m 1000 is for NTLM. Check the official documentation (man hashcat) and example page to find the hash type code to use
  - `-a <attack_mode>` specifies the attack-mode. For example, -a 0 is for straight, i.e., trying one password from the wordlist after the other.
  - `hashfile` is the file containing the hash you want to crack.
  - `wordlist` is the security word list you want to use in your attack.
 
 ## Integrity Checking with Hashcat
 - Hashing can be used to check that files haven’t been changed.
 - Generate a hash for the file using functions such as `sha256sum` and compare it to ensure integrity.

### HMACs
- **HMAC** - Keyed-Hash Message Authentication Code.
- HMAC uses a cryptographic hash function in combination with a secret key to verify the authenticity and integrity of data.
- The following steps give you a fair idea of how HMAC works.
  - The secret key is padded to the block size of the hash function.
  - The padded key is XORed with a constant (usually a block of zeros or ones).
  - The message is hashed using the hash function with the XORed key.
  - The result from Step 3 is then hashed again with the same hash function but using the padded key XORed with another constant.
  - The final output is the HMAC value, typically a fixed-size string.

## Encoding
- Encoding converts data from one form to another to make it compatible with a specific system. 
- Commonly used encoding formats when sending or saving data are **Base32 and Base64**.
- To encode a value to Base64 encoding use `base64 <REGULAR_STRING>`.
- To decode a value from Base64 encoding use `base64 -d <ENCODED_STRING>`.
- Encoding does not ensure confidentiality as it can be reversed.