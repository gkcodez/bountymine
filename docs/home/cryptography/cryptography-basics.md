---
title: Cryptography Basics
sidebar_position: 1
description: Basics of Cryptography.
---

## Introduction
- While networking protocols have made it possible for devices spread across the globe to communicate, cryptography has made it possible to trust this communication.

## Importance of Cryptography
- The ultimate purpose of cryptography is to ensure secure communication in the presence of adversaries.
- Cryptography is used to protect confidentiality, integrity and authenticity.
- Various compliances are in place to ensure secure communication.
  - For example, Credit cards should comply with Payment Card Industry Data Security Standard (PCI DSS).

## Plaintext to Ciphertext
- Plain text - Original readable data.
- Ciphertext - Scrambled unreadable version of data after encryption.
- Cipher - Algorithm or method to convert plaintext to ciphertext and vice versa.
- Key - String of bits the cipher uses to encrypt or decrypt data.
- Encryption - Process of converting plain text to cipher text using a cipher through the key.
- Decryption - Process of coverting cipher text back to plain text using a cipher through the key.

## Historical Ciphers
- Cryptography’s history is long and dates back to ancient Egypt in 1900 BCE.
- One of the simplest historical ciphers is the Ceaser Cipher.
- In Ceaser Cipher every character in the plaintext is shifted to a certain number specified in the key.
- There are only 25 possible combinations in ceaser cipher as the number of characters in english alphabets is 26.
- Online tools to encrypt and decrypt ceaser cipher are
  - https://cryptii.com/pipes/caesar-cipher 
  - https://www.dcode.fr/caesar-cipher

## Types of Encryption
- There are two main categories of encryption
  - Symmetric Encryption
  - Asymmetric Encryption
  
## Symmetric Encryption
- Uses the same key to encrypt and decrypt data.
- It is also called **Symmetric Cryptography** or **Private Key Cryptography**.
- Examples of Symmetric Encryption are
  - **DES** -  Data Encryption Standard. Adopted in 1977.
  - **3DES** - Triple DES. DES applied 3 times.
  - **AES** - Advanced Encryption Standard. Adopted in 2001.

## Asymmetric Encryption
- Uses a pair of keys. One for encryption and the other for decryption.
- It is also called **Asymmetric Cryptography** or **Public Key Cryptography**.
- Examples of Asymmetric Encryption are
  - **RSA** - Supported key size 2048, 3072, 4096 bits.
  - **Diffie-Hellman** - Supported key size 2048, 3072, 4096 bits..
  - **ECC** - Elliptic Curve Cryptography. ECC can achieve equivalent security with shorter keys. For example: 256-bit ECC key is equivaluent to 3072 bit RSA key.

## Basic Math
- Two common operations used in various algorithms
  - XOR operation
  - Modulo operation

### XOR
- Also called exclusive OR.
- Returns 1 when the bits are different and 0 when they are same.
- For example: 
  - 0 XOR 0 returns 0. 
  - 1 XOR 1 returns 0. 
  - 0 XOR 1 returns 1. 
  - 1 XOR 0 returns 1.

### Modulo
- Also called as % or mod.
- X % Y returns the remainder when X is divided by Y.
- The modulo operation always returns a non-negative result less than the divisor.