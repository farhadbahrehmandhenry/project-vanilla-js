#! /usr/local/bin/bash

# ECHO COMMAND
# echo Hello World!

# VARIABLES
# Uppercase by convention
NAME="Farhad"
# echo "My name is $NAME"

# USER INPUT
# read -p "Enter your name: " NAME
# echo "Hello $NAME"

if [ "$NAME" == "Farhad" ]
then 
  echo "Your name is Farhad"
elif [ "$NAME" == "Jak" ]
then 
  echo "Your name is Jak"
else 
  echo "Your name is not Farhad"
fi

# COMPARISON
# val1 -eq val2 Returns true if the values are equal
# val1 -ne val2 Returns true if the values are not equal
# val1 -gt val2 Returns true if val1 is greater than val2
# val1 -ge val2 Returns true if val1 is greater than or equal to val2
# val1 -lt val2 Returns true if val1 is less than val2
# val1 -le val2 Returns true if val1 is less than or equal to val2
NUM1=3
NUM2=5
if [ "$NUM1" -gt "$NUM2" ]
then
  echo "$NUM1 is greater than $NUM2"
else
  echo "$NUM1 is less than $NUM2"
fi


# -d file   True if the file is a directory
# -e file   True if the file exists (note that this is not particularly portable, thus -f is generally used)
# -f file   True if the provided string is a file
# -g file   True if the group id is set on a file
# -r file   True if the file is readable
# -s file   True if the file has a non-zero size
# -u    True if the user id is set on a file
# -w    True if the file is writable
# -x    True if the file is an executable

#CASE STATEMENT
# read -p "Are you 21 or over? Y/N " ANSWER
# case "$ANSWER" in 
#   [yY] | [yY][eE][sS])
#     echo "You can have a beer :)"
#     ;;
#   [nN] | [nN][oO])
#     echo "Sorry, no drinking"
#     ;;
#   *)
#     echo "Please enter y/yes or n/no"
#     ;;
# esac

# SIMPLE FOR LOOP
# NAMES="Brad Kevin Alice Mark"
# for NAME in $NAMES
#   do
#     echo "Hello $NAME"
# done


# FOR LOOP TO RENAME FILES
# FILES=$(ls *.txt)
# NEW="new"
# for FILE in $FILES  
#   do
#     echo "Renaming $FILE to new-$FILE"
#     mv $FILE $NEW-$FILE
# done

# WHILE LOOP - READ THROUGH A FILE LINE BY LINE
# LINE=1
# while read -r CURRENT_LINE
#   do
#     echo "$LINE: $CURRENT_LINE"
#     ((LINE++))
# done < "./new-1.txt"

# FUNCTION
# function sayHello() {
#   echo "Hello World"
# }
# sayHello

# FUNCTION WITH PARAMS
# function greet() {
#   echo "Hello, I am $1 and I am $2"
# }


ls -a => show all file including hiddens
mkdir => create directory
pwd => current location
cd~ => home
touch => create file
nano file.txt => edit file
cat file.txt => show the file's content
less file.txt => show the file content
mv file1.txt file2.txt => rename
cp file1.txt file2.txt => copy
cp file1.txt ~/usr/file2.txt => copy tp a different directory
rm file1.txt => delete
rmdir dir1 => delete directory
rm -R dir2 => delete directory with files inseide
which mongod => where monod is
history => what commands have you ran recently
sudo => to give permission to perform a command
ifconfig / ipconfig => ip information
iwconfig => network informatio
ping google.com => check if goole is online
uname -a => summary of system
blkid / dickutil list => hard drive
top => processes/memory/cpu ...
df => available spaces
sudo apt-get install => to install a package
sudo apt-get remove => to remove a package
sudo apt-get umdate => to update
