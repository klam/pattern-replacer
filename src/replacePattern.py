
#!/usr/bin/python 

#************************************
# Filename: replacePattern.py
# Project: file content pattern replacement
# Author: Kasen Lam
# Creation date: 27/11/2008
#************************************


import sys, os
import logic, constants, messages

#************************************
# Summary: Prints information about how to use this application and the available options. 
# Parameters:
#           - None
# Returns: void
#************************************
def printUsageInfo():
    usageInfo = """ Usage: %s -p <pathToDirectory> -x <originalPattern> -y <newPattern> [ -o <modifiedFilesLogFile> ] [ -b ] [ -l ]
    -p <pathToDirectory>      :Path to start directory
    -x <originalPattern>      :A original text or pattern to be located 
    -y <newPattern>           :A new pattern which will replace the original
    -o <modifiedFilesLogFile> :path to a file for outputting modified files
    -b                        : enable backing up the original file
    -l                        : enable simple logging  
        """ % sys.argv[0]       #reads the script file name from the arguments array
    print usageInfo


#************************************
# Summary: This method parses the arguments array from the command prompt and store they values on a dictionary.
#           This method also validates that the options passed to the application are valid ones.
# Parameters:
#           - args: arguments array from the command prompt
#           - paramsValues: dictionay used to store the values for each requested parameter
# Returns: boolean. True if the parsing was successful
#************************************
def parseArguments(args, paramsValues):

    #will indicate if the parse was successful or not
    parseSuccessful = True

    try:
        #initializes the last registered option
        lastRegisteredOption = constants.STR_NULL_VALUE

        #this segment determines if the next argument entered was the prefix for an option or is the value of the option itself
        #in the first case, it only store the key for the dictionay
        #in the second case, it stores the value for that key
        
        for argument in args[1:]:
#            print argument
            if (argument == '-p'):
                lastRegisteredOption = constants.KEY_PATH
            elif (argument == '-x'):
                lastRegisteredOption = constants.KEY_ORIGINAL_PATTERN
            elif (argument == '-y'):
                lastRegisteredOption = constants.KEY_NEW_PATTERN
            elif (argument == '-o'):
                lastRegisteredOption = constants.KEY_MODIFIED_LOG_FILE  
            elif (argument == '-b'):
                paramsValues[constants.KEY_BACKUP_FIRST] = True
            elif (argument == '-l'):
                paramsValues[constants.KEY_LOG ] = True            
            else:
                if (lastRegisteredOption != constants.STR_NULL_VALUE):
                    #the was an option prefix registered earlier by the parser, so this should be the value
                    #print "Assigning value to parameter: %s = %s" % (lastRegisteredOption, argument)
                    paramsValues[lastRegisteredOption] = argument
                    #resets the last registered option prefix
                    lastRegisteredOption = constants.STR_NULL_VALUE 
                else:
                    #this is an error case. The argument was not recognized neither as a option prefix or option value
                    raise TypeError               
    except TypeError:
        #parse was unsuccessful
        parseSuccessful =  False
        
    return parseSuccessful

#************************************
# Summary: This method checks that the required parameters have been submited by the user
#           
# Parameters:
#           - paramValues: dictionay used to store the values for each requested parameter
# Returns: boolean. True if the check was successful
#************************************

def checkRequiredParameters(paramsValues):
    checkResult = True
    nullValue = constants.STR_NULL_VALUE
    if ((paramsValues[constants.KEY_PATH] == nullValue) or (paramsValues[constants.KEY_ORIGINAL_PATTERN] == nullValue) or (paramsValues[constants.KEY_NEW_PATTERN] == nullValue)):
        checkResult = False

    if (not os.path.isdir(paramsValues[constants.KEY_PATH])):
        print  messages.MSG_INVALID_DIRECTORY % (paramsValues[constants.KEY_PATH])
        checkResult = False


    return checkResult


#************************************
# Summary: This is the main method of the application. Performs basic validation of the arguments array
#           
# Parameters:
#           - void
# Returns: void
#************************************
def main():
    # Perform some argument checking
    paramsValues = {'path':'', 'originalPattern': '', 'newPattern':'', 'modifiedFilesLogFile':'','backupFirst':False, 'logActivity':False}

    
    if ( parseArguments(sys.argv,paramsValues) and ( checkRequiredParameters(paramsValues)) ):

        print "----------------------------------------------"
        print paramsValues[constants.KEY_PATH]
        print paramsValues[constants.KEY_ORIGINAL_PATTERN]
        print paramsValues[constants.KEY_NEW_PATTERN]
        print paramsValues[constants.KEY_BACKUP_FIRST]
        print paramsValues[constants.KEY_MODIFIED_LOG_FILE  ]
        print paramsValues[constants.KEY_LOG]

        print "----------------------------------------------"

        
        logic.ReplacePattern(paramsValues[constants.KEY_PATH], paramsValues[constants.KEY_ORIGINAL_PATTERN],paramsValues[constants.KEY_NEW_PATTERN],paramsValues[constants.KEY_BACKUP_FIRST],paramsValues[constants.KEY_MODIFIED_LOG_FILE ],paramsValues[constants.KEY_LOG])

    else:
        printUsageInfo()
        sys.exit(1)



if __name__ == '__main__':
    main()

