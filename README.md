# Pattern replacer 
This python script will search a given text or pattern to be located in any file of a given directory or its subdirectories and replace it with a new text or pattern.

The entry point for the application is the script called replacePattern.py

```python
Usage: %s -p <pathToDirectory> -x <originalPattern> -y <newPattern> [ -o <modifiedFilesLogFile> ] [ -b ] [ -l ]
    -p <pathToDirectory>      :Path to start directory
    -x <originalPattern>      :A original text or pattern to be located
    -y <newPattern>           :A new pattern which will replace the original
    -o <modifiedFilesLogFile> :path to a file for outputting modified files
    -b                        : enable backing up the original file
    -l                        : enable simple logging
```
The application is able to receive the arguments in variable order using the option prefixes:

#### Examples:
```python
python replacePattern.py -x rojo -y amarillo -p TargetDirectory -b -l -o modi.txt

python replacePattern.py -o modi.txt  -x rojo -y amarillo -p TargetDirectory -b -l
```

As described above, the application can receive a optional argument for outpytting the files that was modified. To use this option just add a  -o <outputFileName>.

The development environment was configured as follow:
Python 2.6
OS/Python libraries used:
- shutil
- os
- datetime
- sys

To indicate the application that it should backup the files first before making any changes, add the -b option.

The logging module was implemented too. To indicate the application that it should log the searching activities, add the -l option. The default output file is "log.txt".
