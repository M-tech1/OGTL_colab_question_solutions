
def length_of_last_word(s):
    # Split the string by space characters and store the resulting words in a list
    words = s.split()
    # If the resulting list is empty, return 0
    if not words:
        return 0
    # Otherwise, return the length of the last word in the list
    return len(words[-1])
