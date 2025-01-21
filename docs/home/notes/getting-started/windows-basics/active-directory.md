---
title: Active Directory
sidebar_position: 1
---

## Windows Domain
- Windows Domain - Group of users and computers under the administration of given business.
- Active Directory (AD) - Common components of the computer network reside in this repository.
- Domain Controller (DC) - Server which runs the active directory services.

### Advantages of Windows Domain
- Centralised identity management.
- Managing security policies.

## Active Directory
- Active Directory Domain Service (ADDS) is the core of windows domains.
- ADDS contains information about all the object in the network including users, groups, machines, printers, shares and many others.

## Active Directory Objects
### Users
- Most common objects in active directory.
- Considered as security principals, which are objects that can act upon objects in the network.
- Users can be used to represent two type of entities.
    - People: Represents actual persons in the network.
    - Services: Represents service users who are only allowed to run their own services. Example: IIS, MSSQL, etc.

### Machines
- For every computer that joins the active directory, a machine account will be created.
- Also considered a security principal but has limited rights within the domain.
- Machine accounts are local administrators of the computer.
- Machine account username will be computer name followed by a \$. For example: **TESTPC$**
- Machine password will be the auto-rotated password with 120 random characters.

### Security Groups
- Also considered security principals.
- Groups can have both machines, users and even other groups.
- By default, the following groups are created in the active directory.
    - **Domain Admins** - Has admin previleges over the whole domain. Can administer any computer including the domain controller (DC).
    - **Server Operators** - Can only administer domain controllers. Cannot change administrative group memberships.
    - **Backup Operators**- Can access any file ignoring their permissions. Performs backup operations.
    - **Account Operators** - Users can create, modify other accounts.
    - **Domain Users** - Includes all existing user accounts in the domain.
    - **Domain Computers** - Includes all existing computers in the domain.
    - **Domain Controllers** - Includes all existing domain controllers (DCs) in the domain.
- Complete list of default security groups can be found here: https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups

## Active Directory Users and Computers
- Objects in active directory are organised into **Organizational Units (OU)**.
- Default Containers in AD are
    - **Builtin** - Contains default groups available to any windows hosts.
    - **Computers** - All machine joining the network will be put her by default.
    - **Domain Controllers** - Default OU that contains DCs in your network.
    - **Users** - Holds default users and groups in windows domain.
    - **Managed Service Accounts** - Holds accounts used by services.

## Managing Users In Active Directory
- To delete an Organizational Units
    - Navigate to View > Enable "Advanced Features".
    - Open "Properties" > "Object" tab.
    - Uncheck "Protect object from accidental deletion".
    - Delete the OU.

## Delegation
- Delegation is the process of providing specific features some control over some OUs.
- To delegate a task
    - Right click on an OU and click "Delegate Control"
    - Type the user name and Click "Check Names"
    - Select the Tasks to be delegated and Click Finish.
- To reset the password for another user
```powershell
Set-ADAccountPassword sophie -Reset -NewPassword (Read-Host -AsSecureString -Prompt 'New Password') -Verbose
```
- To force a password reset at the next logon.
```powershell
Set-ADUser -ChangePasswordAtLogon $true -Identity sophie -Verbose
```

## Managing Computers in AD
- In General, It is good to divide the computers into at least 3 categories.
    - Workstations
    - Servers
    - Domain Controllers


## Building Blocks of Active Directory
- **Domains**- Logical grouping of network resources.
- **Organizational Unit (OU)** - Containers within the domain which can help group objects.
- **Forests** - A collection of one or more domains.
- **Trust Relationships** - Allows users in one domain to access resources in another domain.

## Core Active Directory Components
- **Domain Controllers** - Servers that hosts active directory components.
- **Global catalog** - Searchable database within AD which contains information from all objects in the directory.
- **Lightweight Directory Access Protocol (LDAP)** - AD uses this protocol to query and modify the directory.
- **Kerberos Authentication** - Default protocol used by AD to provide secure authentication.


## Group Policies
- Group policies allow administrators to enforce policies across domains.
- Group policies can be applied to users or computers.

### Group policy objects
- Group policy objects (GPO) are containers that hold the group policies.
- GPOs can be applied to the entire domain, an OU or only a site.
- Group policy management can be launched by using the command `gpmc.msc`.

## Common Active Directory Attacks
### Golden Ticket Attack
- Golden Ticket Attack allows attackers to exploit the kuberos protocol to impersonate any account by forging a Ticket Granting Ticket (TGT). By compromising the krbtgt account and it's password hash attackers gain complete control over the domain.
- For this attack to be successful the attacker needs the following
    - Fully Qualified Domain Name (FQDN)
    - SID of the domain
    - Username of the account to impersonate
    - KRBTGT account password hash

### Pass the Hash
- Attacker steal the password hash and impersonates the user.
- This is possible because New Technnology LAN Manager (NLTM) allows authentication  based on password hashes.

### Kerberoasting
- Attacker requests service tickets for accounts with Service Principal Names (SPN), Extracts the tickets and password hashes and attempts to crack them offline.

### Pass the Ticket
- Attacker steals ticket from compromised machine and use them to authenticate as the user or service.

### Malicious GPOs
- Attackers abuse group policies to create persistent, previleged access to resources.

### Skeleton Key Attack
- In a skeleton key attack , attackers install malware backdoor to login as any user using the master password. The user password remains unchanged.    