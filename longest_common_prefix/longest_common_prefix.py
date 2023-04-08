def longest_common_prefix(strs):
    if not strs:
        return ""
    prefix = strs[0]
    for i in range(1, len(strs)):
        while strs[i].find(prefix) != 0:
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix
    
strs = ["flower","flow","flight"]
print(longest_common_prefix(strs))
