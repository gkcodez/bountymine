---
title: Public Key Cryptography Basics
sidebar_position: 3
description: Basics of Public Key Cryptography.
---

## Introduction
- Cryptography can provide solutions to satisfy the below requirements.
  - **Authentication:** You want to be sure you communicate with the right person, not someone else pretending.
  - **Authenticity:** You can verify that the information comes from the claimed source.
  - **Integrity:** You must ensure that no one changes the data you exchange.
  - **Confidentiality:** You want to prevent an unauthorised party from eavesdropping on your conversations.
- Symmetric encryption or Private Key Encryption mainly protects confidentiality.
- Asymmetric encryption or Public Key Encryption protects all 4 principles.

## Common Use Of Asymmetric Encryption
- If you send the instructions in a locked box to your friend, they can unlock it once it reaches them and read the instructions. After that, you can communicate using the secret code without the risk of people snooping.
- Secret code - Symmetric encryption cipher and key
- Lock - Public key
- Lock's key - Private key
- Apparently, you would only have to use the asymmetric encryption only once as it is slow, and then you can communicate securely using symmetric encryption.

## RSA
- RSA is a public-key encryption algorithm that enables secure data transmission over insecure channels.
- RSA is based on the mathematically difficult problem of multiplying two large prime numbers typically more than 300 digits each and finding factoring of a resulting large number.
- Example:
  - Take two prime numbers p = 157 and q = 199.
  - n = p × q = 31243.
  - ϕ(n) = n − p − q + 1 = 31243 − 157 − 199 + 1 = 30888.
  - Select e = 163 such that e is relatively prime to ϕ(n).
  - Select d = 379, where e × d = 1 mod ϕ(n), i.e., e × d = 163 × 379 = 61777 and 61777 mod 30888 = 1.
  -  The public key is (n,e), i.e., (31243,163) and the private key is $(n,d), i.e., (31243,379).
  -  Alice would calculate and send y = xe mod n = 13163 mod 31243 = 16341.
  -  Bob can decrypt the value by calculating x = yd mod n = 16341379 mod 31243 = 13.

### RSA in CTFs
- Some of the tools for RSA decryption are
  - https://github.com/Ganapati/RsaCtfTool
  - https://github.com/ius/rsatool
- You need to know the main variables for RSA in CTFs: p, q, m, n, e, d, and c. 
  - `p and q` are large prime numbers
  - `n` is the product of `p and q`
  - The public key is `n and e`
  - The private key is `n and d`
  - `m` is used to represent the original message, i.e., plaintext
  - `c` represents the encrypted text, i.e., ciphertext
