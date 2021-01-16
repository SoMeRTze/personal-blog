---
title: Desktop launcher
date: "2020-12-12T22:12:03.284Z"
description: "The [Desktop ] utility allows developers to create desktop application launchers for custom scripts..""
---


Syntax

Example:
**step 1.** Open an empty file

**step 2.** write your specs as follows

```
[Desktop Entry]
Version=1.0
Name=name
Comment=no comment
Exec=command
Icon=/path/to/icon
Terminal=true
Type=Application
Categories=Application

```

**Version:** App version,
**Name:** App name,
**Comment:** describes app,
**Exec:** command,
**Icon:** path to icon,
**Terminal:** true or false,
**Type:** Application,
**Categories:** description



**step 3.** save the file with a **.desktop** extension, on the desktop

**step 4.** make the file executable

**step 5.** once done, right click on the file and select "Allow launching"

**step 6.** double click on the .desktop file, which should
start your script!


Let me know, if you have any questions!
