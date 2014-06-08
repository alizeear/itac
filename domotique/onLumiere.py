#! /usr/bin/python
# -*- coding: utf-8 -*-
print('Content-type: text/html\r\n\r')
#!/Python27/python

# -*- coding: utf-8 -*-
import serial
import time
 
ser = serial.Serial("COM3", 9600)

try:  
    ser.write('Y')
    print ser.readline() 
    ser.close 
except:  
    print "Failed to send!"  
