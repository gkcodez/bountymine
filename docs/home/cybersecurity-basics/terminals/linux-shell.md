---
title: Linux Shell
sidebar_position: 2
description: Command line application in Linux.
---

## Introduction
- Shell is a facilitator between user and the operating system.

## Types of linux shells
- `echo $SHELL` - Displays the current shell.
- `cat /etc/shells` - Displays all the available shells.
- Type the shell name in the command line to switch between the shells. For example: `zsh`.
- `chsh -s /usr/bin/zsh` - To permanently change the shell.

## Bourne Again Shell (Bash)
- Bourne Again Shell (Bash) - It is the default shell in linux.
- Bash came as an enhanced replacement of previous shells **sh, ksh, csh, etc.**
- Some features of bash are
    - Offers tab completion.
    - Keeps the history of commands.
- Bash does not offer auto spell correction.

## Friendly Interactive Shell (FISH)
- Offers auto spell correction.
- Offers customization with cool themes.
- Offers syntax highlighting.

## Z Shell (ZSH)
- Provides advanced tab completion.
- Provides auto spell correction.
- Offers extensive customization.
- It's slower than other shells.

## Shell Scripting
- Allows the user to run multiple commands at once.
- Shell scripts should have the file extension as `.sh`.
- A shell script should always start with a shebang `#!/bin/bash`.

### Comments
- Comments help to provide information about what the code does.
- Comment can be defined by starting a sentence with `#` character.
```shell
#!/bin/bash # This is a shebang.
# This will print hello. This is a comment
echo hello
```

### Variables
- Create a variable in shell script like below.
```shell
#!/bin/bash
echo "What is your name?"
read name # Read value.
echo "Welcome $name!" # Print the value of name variable.
```
- To run this script, first the execute permission needs to be given using the command. `chmod +x print_name.sh`.
- Once the permission is assigned, the script can be executed with `print_name.sh`.

### Loops
- Loops are used to do something multiple times.
```shell
#!/bin/bash
for i in {1..10};
do
echo $i # Prints the value of i 10 times.
done
```

### Conditional statements
- Conditional statements help in performing an action based on a condition.
```shell
#!/bin/bash
for i in {1..10};
do
if [ $(($i % 2)) = 0 ]; then
    echo "$i is even."
else
    echo "$i is odd."
fi
done
```
