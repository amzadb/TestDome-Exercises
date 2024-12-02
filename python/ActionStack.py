# Implement a stack that has the following methods:
# - perform_action(action): This method should add an action to the stack. The action is a string.
# - undo_action(self): This method should undo the last action done. Return the action that was undone.

from collections import deque
class ActionStack:
    def __init__(self):
        self.stack = deque
        
    def perform_action(self, action):
        if action is not None:
            self.stack.append(action)
            
    def undo_action(self):
        if len(self.stack) == 0:
            raise Exception("No more actions")
        return self.stack.pop()
    
text_actions = ActionStack()
text_actions.perform_action("Write text")
# text_actions.perform_action("Add an empty page")
# text_actions.perform_action("Change the font color")
last_action = text_actions.undo_action()
print(last_action)