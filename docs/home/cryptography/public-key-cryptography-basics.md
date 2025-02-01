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

## Diffie Hellman Key Exchange
- Key exchange aims to establish shared secret between two parties.
- For example, Alice and Bob wants to talk securely.
  - Alice and Bob generates private keys independently.
  - They both agree on the public variables: a large prime number p and a generator g, where `0 < g < p`. These values will be disclosed publicly over the communication channel.
  - Let's choose `p = 29 and g = 3` to simplify our calculations.
  - They both calculate their public key using the private key that they have.
  - Alice calculates A = `g^a mod p` = 313 mod 29 =`19` and Bob calculates B =` g^b mod p` = 315 mod 29 = `26`. These are the public keys.
  - They share these public keys to each other and calculates the shared key by reversing the formula.
    - Alice calculation: `B^a mod p` = 2613 mod 29 = `10`.
    - Bob's calculation: `A^b mod p` = 1915 mod 29 = `10`
  - Diffie-Hellman Key Exchange is `often used alongside RSA public key cryptography`. Diffie-Hellman is used for key agreement, while RSA is used for digital signatures, key transport, and authentication, among many others.


## SSH
- SSH authentication uses both public and private keys to prove that the client is valid and authorized.
- By default, SSH keys are RSA keys. But the user is allowed to select the algorithm and can add a passphrase.
- `ssh-keygen` is used to generate SSH keypairs. It supports the following algorithms.
  - **DSA (Digital Signature Algorithm)** is a public-key cryptography algorithm specifically designed for digital signatures.
  - **ECDSA (Elliptic Curve Digital Signature Algorithm)** is a variant of DSA that uses elliptic curve cryptography to provide smaller key sizes for equivalent security.
  - **ECDSA-SK (ECDSA with Security Key)** is an extension of ECDSA. It incorporates hardware-based security keys for enhanced private key protection.
  - **Ed25519** is a public-key signature system using EdDSA (Edwards-curve Digital Signature Algorithm) with Curve25519.
  - **Ed25519-SK (Ed25519 with Security Key)** is a variant of Ed25519. Similar to ECDSA-SK, it uses a hardware-based security key for improved private key protection.
- To generate a ed25519 key pair with default options use the below command.
  ```
  ssh-keygen -t ed25519
  ```
- The above command generates the public key (with a .pub extension) and a private key.

### SSH Private keys
- **Private keys are like passwords** and it should not be shared at any circumstances.
- Use a passphrase to encrypt the private key, so that the attacker cannot use it without the passphrase.
- Tools like **John the Ripper** can crack the passwords, so it is recommended to use a complex password.
- `ssh-copy-id` can be used to copy ssh keys to servers.
- Permissions must be set to enable only owner to read or write to the private key. (600 or stricter)
- To login to an ssh session by specifying the key use the below command.
  ```
  ssh -i privateKeyFileName user@host
  ```
- `~/.ssh` folder is the default place to store the ssh keys.
- `authorized_keys` file in this directory stores the list of public keys that are allowed access to the server.

## Digital Signatures and Certificates

### Digital Signatures

- Digital signatures provide a way to verify the authenticity and integrity of a digital message or document.
- The simplest form of digital signature is encrypting the document with your private key. If someone wants to verify this signature, they would decrypt it with your public key and check if the files match.
- Digital signatures and Electronic signatures are different as the latter means pasting an image of the signature on top of a document. This does not ensure integrity as anyone can paste the image.
- An example of the digital signature verification is as below.
  - Bob encrypts a hash of his document and shares it with Alice, along with the original document. 
  - Alice can decrypt the encrypted hash using the bob's public key. 
  - Alice then compares it with the hash of the file she received.

### Certificates
- Certificates prove who you are.
- A common use of certificates is HTTPS, it proves that browser that the website which you visit is real.
- Certificates have a chain of trust starting with the root certificate authority (Root CA).
  - The browser trusts CA.
  - CA trusts the organization.
  - Organization signs the certificate.
  - Browser trusts the certificate.
- If you have a website and want to use HTTPS, then you should get a TLS certificate.
- Get a free TLS certificate on https://letsencrypt.org/.

## PGP and GPG
- PGP - Pretty Good Privacy.
  - It is a software for implementing encryption for encrypting files and performing digital signing.
- GPG - GNU Privacy Guard. 
  - It is an open source implementation of OpenPGP.
  - GPG is commonly used in email to protect confidentiality of email messages.
  - To generate a GPG, use the command `gpg --full-gen-key`.
  - To crack a password protected gpg key use `gpg2john`

### Practical Example of GPG
- Generate a GPG key pair.
- Share the public key with the person B.
- Person B encrypts a message with the public key and sends it to you.
- You import the private key using the command `gpg --import backup.key`.
- You decrypt the GPG message using the command `gpg --decrypt confidential_message.gpg`.

## Summary
- **Cryptography** is the science of securing communication and data using codes and ciphers.
- **Cryptanalysis** is the study of methods to break or bypass cryptographic security systems without knowing the key.
- **Brute-Force Attack** is an attack method that involves trying every possible key or password to decrypt a message.
- **Dictionary Attack** is an attack method where the attacker tries dictionary words or combinations of them.
