
;Include Modern UI

!include "MUI2.nsh"
Icon "img\connectorjs.ico"

Name "ConnectorJS Client"

OutFile "installer\win64\connectorjs-client-setup.exe"

InstallDir "$APPDATA\ConnectorJS Client"
;InstallDir "$PROGRAMFILES\ConnectorJS Client"

InstallDirRegKey HKLM "Software\ConnectorJS Client" "Install_Dir"


RequestExecutionLevel admin

;--------------------------------

; Pages

Page components
Page directory
Page instfiles

UninstPage uninstConfirm
UninstPage instfiles

;--------------------------------

 
;-------------------------------- 
;Modern UI System
 
  ;;;!insertmacro MUI_SYSTEM
  
  !define MUI_PAGE_CUSTOMFUNCTION_LEAVE installServices
  !insertmacro MUI_PAGE_FINISH
  
  ; !insertmacro MUI_LANGUAGE "Turkish"
  !insertmacro MUI_LANGUAGE "English"

  


; The stuff to install
;Section "ConnectorJS Client (required)"
Section "install"

  SetOutPath $INSTDIR

  CreateDirectory "$INSTDIR\img"

  File /r "installer\win64\node.exe"
  File /r "installer\win64\nssm.exe"


  File /r /x ".env*" /x "installer"  /x ".*" "*.*"

  

  WriteRegStr HKLM "Software\ConnectorJS Client" "Install_Dir" "$INSTDIR"
  
  ; Write the uninstall keys for Windows
  WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\ConnectorJS Client" "DisplayName" "ConnectorJS Client"
  WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\ConnectorJS Client" "UninstallString" '"$INSTDIR\uninstall.exe"'
  WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\ConnectorJS Client" "NoModify" 1
  WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\ConnectorJS Client" "NoRepair" 1
  WriteUninstaller "uninstall.exe"
  
  CreateDirectory "$SMPROGRAMS\ConnectorJS Client\"
  CreateShortcut "$SMPROGRAMS\ConnectorJS Client\ConnectorJS Start.lnk" "$INSTDIR\node.exe" "cli.js start" "$INSTDIR\img\database.ico"
  CreateShortcut "$SMPROGRAMS\ConnectorJS Client\Client User Information.lnk" "$INSTDIR\node.exe" "cli.js show" "$INSTDIR\img\connectorjs.ico"
  CreateShortcut "$SMPROGRAMS\ConnectorJS Client\Renew Password.lnk" "$INSTDIR\node.exe" "cli.js renewpass" "$INSTDIR\img\shield.ico"
  CreateShortcut "$SMPROGRAMS\ConnectorJS Client\Uninstall.lnk" "$INSTDIR\uninstall.exe"
  ;create desktop shortcut
  CreateShortCut "$DESKTOP\ConnectorJS Client.lnk" "$INSTDIR\node.exe" "cli.js show" "$INSTDIR\img\connectorjs.ico"

SectionEnd


Section "Uninstall"
  
  ; Remove registry keys
  DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\ConnectorJS Client"
  DeleteRegKey HKLM "SOFTWARE\ConnectorJS Client"

  ExpandEnvStrings $0 %COMSPEC%
  ExecWait '"$INSTDIR\nssm.exe" stop "ConnectorJS Client"'
  ExecWait '"$INSTDIR\nssm.exe" remove "ConnectorJS Client" confirm'


  Delete $INSTDIR\*.*

  ; Remove shortcuts, if any
  Delete "$SMPROGRAMS\ConnectorJS Client\*.*"
  Delete "$DESKTOP\ConnectorJS Client.lnk"

  ; Remove directories used
  RMDir "$SMPROGRAMS\ConnectorJS Client"
  RMDir /r "$INSTDIR"

SectionEnd


Function installServices
  
  ExpandEnvStrings $0 %COMSPEC%
  Exec '"$INSTDIR\nssm.exe" install "ConnectorJS Client"  "$INSTDIR\node.exe" "connector-client.js"'
  Exec '"$INSTDIR\nssm.exe" set "ConnectorJS Client" AppParameters "connector-client.js"'
  Exec '"$INSTDIR\nssm.exe" set "ConnectorJS Client" AppDirectory $INSTDIR\'
  Exec '"$INSTDIR\nssm.exe" set "ConnectorJS Client" AppStdout $INSTDIR\log.log'
  Exec '"$INSTDIR\nssm.exe" set "ConnectorJS Client" AppStderr $INSTDIR\error.log'
  Exec '"$INSTDIR\nssm.exe" set "ConnectorJS Client" AppStopMethodSkip 6'
  Exec '"$INSTDIR\nssm.exe" set "ConnectorJS Client" AppStopMethodConsole 1000'
  Exec '"$INSTDIR\nssm.exe" set "ConnectorJS Client" AppThrottle 5000'
  Exec '"$INSTDIR\nssm.exe" start "ConnectorJS Client"'

FunctionEnd
