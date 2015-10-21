#************************************
# Filename: logger.py
# Author: Kasen Lam
# Creation date: 27/11/2008
#************************************


import datetime
import constants

#************************************
# Summary: Writes the message into the log file specified on the constants module.
# Parameters:
#           - Message: text that will be written on the log file.
# Returns: void
#************************************
def write( message):
    #opens the file using append mode
    logFile = open(constants.LOG_FILE_NAME, constants.APPEND_MODE)
    #writes the message
    logFile.write( '%s \n %s \n Message: %s \n'  % (constants.LOG_DELIMITER, datetime.datetime.today(), message))
    logFile.close()
    print message

#************************************
# Summary: Writes the message into the log file specified as a parameter
# Parameters:
#           - filename: output filename
#           - Message: text that will be written on the log file.
# Returns: void
#************************************
def writeFile( filename, message):
    #opens the file using append mode
    logFile = open(filename, constants.APPEND_MODE)
    #writes the message
    logFile.write( '%s \n %s \n %s \n'  % (constants.LOG_DELIMITER, datetime.datetime.today(), message))
    logFile.close()
    print message






#write("Primer Log")
