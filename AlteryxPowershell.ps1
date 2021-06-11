Powershell Notes:
To peer into deep folder layers
 Get-ChildItem -Path .\*.* -recurse

Move all files out of deep folders to the top level folder for that library
 $root = '\ind\DI\Documents2007\'
 ls -ad | Get-Childitem -Path {$_} -Recurse -File | Move-Item -Destination $root -Force

See variables for above command with: echo $root
On local machine -
$root = 'C:\Users\jcoffin\Documents\USPortal\Industries\DI-IndMfg\Documents2007\'

-----------------------------
Bulk Renaming of Files to clean user friendly URL
-----------------------------
Remove prepositions
ls |  Rename-Item -NewName {$_.name -replace "( |_)(to|in|on|of|the|and|at|for)( |_)",""}

Repurpose underscores to dashes
ls |  Rename-Item -NewName {$_.name -replace "_","-"}

Remove all non-dash punctuation from file name. NOTE: basename is separated to protect extension.
ls | Rename-Item -NewName {($_.BaseName -replace "(\.| |\(|\)|\'|,)","") + $_.Extension}
