function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
const word1 = "listen";
const word2 = "silent";

if (isAnagram(word1, word2)) {
    console.log(`${word1} and ${word2} are anagrams.`);
} else {
    console.log(`${word1} and ${word2} are not anagrams.`);
}
