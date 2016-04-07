import os
from subprocess import call

#print 
dics = next(os.walk('.'))[1]
#print dics

for dic in dics:
	#print dic
	test1 = "sudo rm -rf /home/ubuntu/ironhack/blue/blue/" + dic + "/.git/"
	print test1
	#test = ""
	#call([test1])
