# isAnAnagram
An anagram is a word or phrase formed by rearranging the letters of another word or phrase, typically using all the original letters exactly once. For example, "listen" is an anagram of "silent."

Let's break down the code and the thought process step by step:

    Function Definition: The code defines a function called isAnagram which takes two string parameters: str1 and str2.

    Sorting the Strings: The code then splits both str1 and str2 into arrays of characters using the split('') method. This method divides a string into an array where each character is an element. Then, the sort() method is used to sort the array of characters in alphabetical order.

    Joining the Sorted Characters: After sorting, the sorted arrays are joined back into strings using the join('') method. This creates strings where the characters are now in sorted order.

    Comparison: Finally, the code compares the sorted strings sortedStr1 and sortedStr2 to check if they are equal. If they are equal, it means that the original strings str1 and str2 are anagrams of each other.

    Return Value: The function returns true if the strings are anagrams and false otherwise.
