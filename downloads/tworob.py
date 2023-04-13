# pip install keyboard
import sim
import sys
import time
import keyboard

# Connect to the simulation
sim.simxFinish(-1)
clientID = sim.simxStart('127.0.0.1', 19997, True, True, 5000, 5)

if clientID != -1:
    print('Connected to remote API server')

    # Get handles for BubbleRob and its left and right motors
    res, bubbleRob = sim.simxGetObjectHandle(clientID, 'bubbleRob', sim.simx_opmode_oneshot_wait)
    res, bubbleRob2 = sim.simxGetObjectHandle(clientID, 'bubbleRob2', sim.simx_opmode_oneshot_wait)
    res, leftMotor = sim.simxGetObjectHandle(clientID, 'bubbleRob_leftMotor', sim.simx_opmode_oneshot_wait)
    res, rightMotor = sim.simxGetObjectHandle(clientID, 'bubbleRob_rightMotor', sim.simx_opmode_oneshot_wait)
    res, leftMotor2 = sim.simxGetObjectHandle(clientID, 'bubbleRob2_leftMotor', sim.simx_opmode_oneshot_wait)
    res, rightMotor2 = sim.simxGetObjectHandle(clientID, 'bubbleRob2_rightMotor', sim.simx_opmode_oneshot_wait)
    # Set the initial motor velocities to zero
    sim.simxSetJointTargetVelocity(clientID, leftMotor, 0, sim.simx_opmode_oneshot_wait)
    sim.simxSetJointTargetVelocity(clientID, rightMotor, 0, sim.simx_opmode_oneshot_wait)
    sim.simxSetJointTargetVelocity(clientID, leftMotor2, 0, sim.simx_opmode_oneshot_wait)
    sim.simxSetJointTargetVelocity(clientID, rightMotor2, 0, sim.simx_opmode_oneshot_wait)

    # Control BubbleRob using the keyboard
    while True:
        # Set the motor velocities based on the arrow keys being pressed
        if keyboard.is_pressed('up'):
            print("up")
            sim.simxSetJointTargetVelocity(clientID, leftMotor, 2, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, rightMotor, 2, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, leftMotor2, 2, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, rightMotor2, 2, sim.simx_opmode_oneshot_wait)
        elif keyboard.is_pressed('down'):
            print("down")
            sim.simxSetJointTargetVelocity(clientID, leftMotor, -2, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, rightMotor, -2, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, leftMotor2, -2, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, rightMotor2, -2, sim.simx_opmode_oneshot_wait)
        elif keyboard.is_pressed('left'):
            print("left")
            sim.simxSetJointTargetVelocity(clientID, leftMotor, -1.5, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, rightMotor, 1.5, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, leftMotor2, -1.5, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, rightMotor2, 1.5, sim.simx_opmode_oneshot_wait)
        elif keyboard.is_pressed('right'):
            print("right")
            sim.simxSetJointTargetVelocity(clientID,leftMotor , 1.5 ,sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID,rightMotor , -1.5 ,sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID,leftMotor2 , 1.5 ,sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID,rightMotor2 , -1.5 ,sim.simx_opmode_oneshot_wait)
        else:
            # Stop the motors if no arrow keys are being pressed
            sim.simxSetJointTargetVelocity(clientID,leftMotor , 0 ,sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID,rightMotor , 0 ,sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID,leftMotor2 , 0 ,sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID,rightMotor2 , 0 ,sim.simx_opmode_oneshot_wait)


        time.sleep(0.01)
        

else:
    print('Failed connecting to remote API server')