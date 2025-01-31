---
title: Hashing Basics
sidebar_position: 3
description: Basics of Hashing.
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

## 