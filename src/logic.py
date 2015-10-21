#************************************
# Filename: logic.py
# Author: Kasen Lam
# Creation date: 27/11/2008
#************************************


import os
import logger
import dataAccess
import constants
import messages

#specify if the function is case-sensitive

#Global variable that indicates if the activities should be logged
_log = False;


#************************************
# Summary: This method navigates through the directory path submmited by the user and all its subdirectories.
#           
# Parameters:
#       - directoryPath: the start directory 
#        - originalPattern: the pattern that will be replaced
#        - newPattern:  the new pattern 
#        - backupFirst: create a backup copy before cha
#        - modifiedFilesLogFile: path to the output file used to log the modified files
#        - log: log activity?
# Returns: boolean. True if the check was successful
#************************************
def ReplacePattern(directoryPath, originalPattern, newPattern, backupFirst , modifiedFilesLogFile ,log):
    
     #sets the module global flag to enable logging.
    _log = log
    
    if (_log):
        logger.write(messages.MSG_SEARCH_STARTED)


    #start of walk-for
    #For each directory in the tree rooted at directory top (including top itself), it yields a 3-tuple (dirpath, dirnames, filenames).
   # dirpath is a string, the path to the directory. dirnames is a list of the names of the subdirectories in dirpath . filenames is a list of the names of the non-directory files in dirpath.
    for root, directoriesNames, filesNames in os.walk(directoryPath):

        if (_log):
            print "---------------- root \n"
            print root
            print "---------------- directoriesNames \n"
            print directoriesNames
            print "---------------- filesNames\n"
            print filesNames

        for fileName in filesNames:
            # files with an extension equal to the designated extension for backup files are not included on the search
            if (not fileName.endswith(constants.BACKUPS_FILE_EXTENSION)):
                if (log):
                    logger.write(messages.MSG_SEARCHING_IN_FILE % (fileName))
                #search the pattern in the file
                SearchPatternOnFile(originalPattern , newPattern,  root + "\\" + fileName, backupFirst, modifiedFilesLogFile)
                
    #end of walk-for
        
    if (_log):
        logger.write(messages.MSG_SEARCH_FINISHED)

#************************************
# Summary: This method searchs the given file looking for the original pattern.
#           If the pattern is found in the file, then it's replaced by the new pattern
#          The method avoid writing to files unnecessary  when there are no changes.
#           
# Parameters:
#        - originalPattern: the pattern that will be replaced
#        - newPattern:  the new pattern 
#        - backupFirst: create a backup copy before cha
#        - modifiedFilesLogFile: path to the output file used to log the modified files
# Returns: boolean. True if the check was successful
#************************************
def SearchPatternOnFile(originalPattern, newPattern, fileName, backupFirst, modifiedFilesLogFile):
    
    originalData = dataAccess.readFile(fileName)

    changedData = originalData.replace(originalPattern, newPattern)

    if (originalData != changedData):
        #the original pattern was found one or more times
        if (_log):
            logger.write(messages.MSG_PATTERN_FOUND % (fileName))

        #track modified files?
        if (modifiedFilesLogFile != constants.STR_NULL_VALUE):
            trackModifiedFile(fileName, modifiedFilesLogFile)

        #backup option enabled?
        if (backupFirst):
            dataAccess.backupFile(fileName, constants.BACKUPS_FILE_EXTENSION)

        dataAccess.writeFile(fileName, changedData)
        
##    else:
##        logger.write(messages.MSG_PATTERN_WASNT_FOUND)
    

#************************************
# Summary: This method adds a new entry on the output file indicanting which files was modified.
#           
# Parameters:
#           - modifiedFilename: the file that was modified
#           - modifiedFilesLogFile: output file name
# Returns: boolean. True if the check was successful
#************************************
def trackModifiedFile(modifiedFilename, modifiedFilesLogFile):
    #format information
    changeInfo = "Modified file: %s " % (modifiedFilename)
    #write the information into the file
    logger.writeFile(modifiedFilesLogFile, changeInfo)
   

    
#ReplacePattern("TargetDirectory","original", "nuevo",  True, "changedFiles.txt", False)


