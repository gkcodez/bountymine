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

