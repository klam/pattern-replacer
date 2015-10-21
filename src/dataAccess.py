#************************************
# Filename: dataAccess.py
# Author: Kasen Lam
# Creation date: 27/11/2008
#************************************




import shutil
import logger
import messages
import constants

#************************************
# Summary: This method reads the information from a file until it encounters EOF 
#           
# Parameters:
#           - path: location of the file accessed in read mode
# Returns: string: filecontent
#************************************
def readFile(path):
    try:
        #open a file and assign it to a file handler
        fileHandler = open(path, constants.READ_MODE, 0) 
        try:                           
  
            fileData = fileHandler.read()
            return fileData
        finally:                        
            fileHandler.close()       
        
    except IOError:
        logger.write(messages.MSG_ERROR_ACCESSING_FILE % (path))   
        pass                           


#************************************
# Summary: This method overwrite information in the file or create a newone
#           
# Parameters:
#           - path: location of the file accessed 
#            - content: data 
# Returns: void
#************************************
def writeFile(path, content):
    writeCommon(path, content, constants.WRITE_MODE)
    
#************************************
# Summary: This method appends information to the end of the file 
#           
# Parameters:
#           - path: location of the file accessed 
#            - content: data 
# Returns: void
#************************************
def appendToFile(path, content):
    writeCommon(path, content, constants.APPEND_MODE)

#************************************
# Summary: This is the common method to overwrite or appent to a file 
#           
# Parameters:
#           - path: location of the file accessed in write mode
#           - content: data 
#           - mode: overwrite or append
# Returns: string: filecontent
#************************************
def writeCommon(path, content, mode):
    try:
        #open a file and assign it to a file handler
        fileHandler = open(path, mode, 0) 
        try:                           
            fileHandler.write(content)
            
        finally:                        
            fileHandler.close()       
        
    except IOError:
        logger.write(messages.MSG_ERROR_ACCESSING_FILE % (path))
        
#************************************
# Summary: This method copies the file to the same directory with the same filename + backup Extension
#           
# Parameters:
#           - path: location of the file 
#           -  backupExtention: the extension added to the back up files
# Returns: void
#************************************
def backupFile(path, backupExtention):
    try:
        destination = path
        #if the destination ends with the backup extension then continue without making the backup.
        if (not  destination.endswith(backupExtention)):
            #source path was not a backup file. 
            destination += backupExtention
            #copy the file
            shutil.copy(path, destination)
        
    except IOError:
        logger.write(messages.MSG_ERROR_ACCESSING_FILE % (path))   
        logger.write(tracebacjprint_exc())

#backupFile("Readme.txt", ".bak")


